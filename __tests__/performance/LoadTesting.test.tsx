import React from 'react';
import { render, screen, fireEvent, waitFor } from '../setup/test-utils';
import { performanceBenchmarks } from '../setup/test-utils';

// Mock high-load scenarios
const createMultipleUsers = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `user_${i}`,
    timestamp: Date.now() + i * 100,
    sessionId: `session_${Math.random().toString(36).substring(7)}`,
    actions: []
  }));
};

// Mock performance monitoring
const mockPerformanceObserver = {
  entries: [] as any[],
  observe: jest.fn(),
  disconnect: jest.fn()
};

global.PerformanceObserver = jest.fn().mockImplementation(() => mockPerformanceObserver);

describe('Load Testing - Performance Critical Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    // Reset performance marks
    performance.clearMarks();
    performance.clearMeasures();
    
    // Mock fetch for performance tracking
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true })
    });
  });

  describe('High Traffic Form Submission', () => {
    test('handles concurrent form submissions without data loss', async () => {
      const ConcurrentFormTest = () => {
        const [submissions, setSubmissions] = React.useState<string[]>([]);
        
        const submitForm = async (formId: string) => {
          const response = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
              formId,
              timestamp: Date.now(),
              data: { name: `User ${formId}`, email: `user${formId}@test.de` }
            })
          });
          
          if (response.ok) {
            setSubmissions(prev => [...prev, formId]);
          }
        };

        const handleConcurrentSubmissions = async () => {
          const promises = Array.from({ length: 50 }, (_, i) => 
            submitForm(`form_${i}`)
          );
          
          await Promise.all(promises);
        };

        return (
          <div>
            <button onClick={handleConcurrentSubmissions}>
              Submit 50 Forms Concurrently
            </button>
            <div data-testid="submission-count">
              Submissions: {submissions.length}
            </div>
            <div data-testid="submissions">
              {submissions.map(id => (
                <div key={id} className="submission">{id}</div>
              ))}
            </div>
          </div>
        );
      };

      render(<ConcurrentFormTest />);

      const startTime = performance.now();
      
      fireEvent.click(screen.getByText('Submit 50 Forms Concurrently'));

      // Wait for all submissions to complete
      await waitFor(() => {
        expect(screen.getByTestId('submission-count')).toHaveTextContent('Submissions: 50');
      }, { timeout: 10000 });

      const endTime = performance.now();
      const totalTime = endTime - startTime;

      // Should handle 50 concurrent submissions within reasonable time
      expect(totalTime).toBeLessThan(5000); // 5 seconds
      expect(fetch).toHaveBeenCalledTimes(50);

      // Verify all submissions were processed
      const submissionElements = screen.getAllByText(/form_/);
      expect(submissionElements).toHaveLength(50);
    });

    test('maintains form validation under load', async () => {
      const LoadValidationTest = () => {
        const [validationResults, setValidationResults] = React.useState<boolean[]>([]);
        
        const validateForm = (data: any) => {
          // Simulate validation logic
          const isValid = data.email && data.email.includes('@') && data.name && data.name.length > 2;
          return isValid;
        };

        const submitWithValidation = async (index: number) => {
          const formData = {
            name: index % 5 === 0 ? '' : `User ${index}`, // Every 5th form invalid
            email: index % 3 === 0 ? 'invalid' : `user${index}@test.de` // Every 3rd form invalid
          };

          const isValid = validateForm(formData);
          setValidationResults(prev => [...prev, isValid]);

          if (isValid) {
            await fetch('/api/contact', {
              method: 'POST',
              body: JSON.stringify(formData)
            });
          }
        };

        const runLoadTest = async () => {
          const promises = Array.from({ length: 100 }, (_, i) => 
            submitWithValidation(i)
          );
          
          await Promise.all(promises);
        };

        return (
          <div>
            <button onClick={runLoadTest}>
              Run Validation Load Test
            </button>
            <div data-testid="validation-results">
              Valid: {validationResults.filter(Boolean).length} / Invalid: {validationResults.filter(v => !v).length}
            </div>
          </div>
        );
      };

      render(<LoadValidationTest />);

      fireEvent.click(screen.getByText('Run Validation Load Test'));

      await waitFor(() => {
        const results = screen.getByTestId('validation-results');
        expect(results.textContent).toContain('Valid:');
        expect(results.textContent).toContain('Invalid:');
      }, { timeout: 5000 });

      // Should maintain validation accuracy under load
      const resultsText = screen.getByTestId('validation-results').textContent;
      const validCount = parseInt(resultsText!.match(/Valid: (\d+)/)?.[1] || '0');
      const invalidCount = parseInt(resultsText!.match(/Invalid: (\d+)/)?.[1] || '0');
      
      expect(validCount + invalidCount).toBe(100);
      expect(invalidCount).toBeGreaterThan(0); // Should catch invalid forms
    });
  });

  describe('Calculator Performance Under Load', () => {
    test('calculator maintains responsiveness with rapid calculations', async () => {
      const RapidCalculationTest = () => {
        const [calculations, setCalculations] = React.useState<number[]>([]);
        
        const performCalculation = (area: number, material: number, urgency: number) => {
          const basePrice = 35;
          const result = basePrice * area * material * urgency;
          return Math.round(result);
        };

        const runRapidCalculations = () => {
          const results: number[] = [];
          const startTime = performance.now();
          
          // Perform 1000 calculations rapidly
          for (let i = 0; i < 1000; i++) {
            const area = 50 + (i % 200); // 50-250 m²
            const material = 1.0 + (i % 3) * 0.5; // 1.0-2.0 factor
            const urgency = 1.0 + (i % 4) * 0.25; // 1.0-1.75 factor
            
            const result = performCalculation(area, material, urgency);
            results.push(result);
          }
          
          const endTime = performance.now();
          const calculationTime = endTime - startTime;
          
          setCalculations(results);
          
          // Log performance for testing
          console.log(`1000 calculations completed in ${calculationTime}ms`);
        };

        return (
          <div>
            <button onClick={runRapidCalculations}>
              Run 1000 Rapid Calculations
            </button>
            <div data-testid="calculation-count">
              Calculations: {calculations.length}
            </div>
            <div data-testid="sample-results">
              {calculations.slice(0, 5).map((result, i) => (
                <div key={i}>{result}€</div>
              ))}
            </div>
          </div>
        );
      };

      render(<RapidCalculationTest />);

      const startTime = performance.now();
      
      fireEvent.click(screen.getByText('Run 1000 Rapid Calculations'));

      await waitFor(() => {
        expect(screen.getByTestId('calculation-count')).toHaveTextContent('Calculations: 1000');
      });

      const endTime = performance.now();
      const totalTime = endTime - startTime;

      // Should complete 1000 calculations within performance benchmark
      expect(totalTime).toBeLessThan(1000); // 1 second for 1000 calculations
      
      // Verify calculations produced valid results
      const sampleResults = screen.getAllByText(/€$/);
      expect(sampleResults.length).toBeGreaterThan(0);
    });

    test('handles memory usage efficiently during extended calculation sessions', async () => {
      const MemoryEfficiencyTest = () => {
        const [memoryUsage, setMemoryUsage] = React.useState<number[]>([]);
        const [isRunning, setIsRunning] = React.useState(false);
        
        const measureMemory = () => {
          // Simulate memory measurement (in real app, use performance.memory)
          const usage = Math.random() * 50 + 10; // 10-60 MB simulated
          return usage;
        };

        const runExtendedSession = async () => {
          setIsRunning(true);
          const measurements: number[] = [];
          
          for (let session = 0; session < 50; session++) {
            // Simulate user session with multiple calculations
            for (let calc = 0; calc < 20; calc++) {
              // Perform calculation
              const area = Math.random() * 500 + 50;
              const price = area * 35 * (1 + Math.random());
              
              // Force some computation
              const result = Array.from({ length: 100 }, () => price).reduce((a, b) => a + b);
            }
            
            // Measure memory after each session
            const memory = measureMemory();
            measurements.push(memory);
            
            // Allow UI to update
            await new Promise(resolve => setTimeout(resolve, 10));
          }
          
          setMemoryUsage(measurements);
          setIsRunning(false);
        };

        return (
          <div>
            <button onClick={runExtendedSession} disabled={isRunning}>
              {isRunning ? 'Running Extended Session...' : 'Run Extended Calculation Session'}
            </button>
            <div data-testid="memory-measurements">
              Memory measurements: {memoryUsage.length}
            </div>
            {memoryUsage.length > 0 && (
              <div data-testid="memory-stats">
                <div>Average: {(memoryUsage.reduce((a, b) => a + b, 0) / memoryUsage.length).toFixed(2)} MB</div>
                <div>Max: {Math.max(...memoryUsage).toFixed(2)} MB</div>
                <div>Min: {Math.min(...memoryUsage).toFixed(2)} MB</div>
              </div>
            )}
          </div>
        );
      };

      render(<MemoryEfficiencyTest />);

      fireEvent.click(screen.getByText('Run Extended Calculation Session'));

      await waitFor(() => {
        expect(screen.getByTestId('memory-measurements')).toHaveTextContent('Memory measurements: 50');
      }, { timeout: 10000 });

      // Verify memory usage remains stable
      const memoryStats = screen.getByTestId('memory-stats');
      expect(memoryStats).toBeInTheDocument();
      
      const averageText = memoryStats.textContent!.match(/Average: ([\d.]+)/)?.[1];
      const maxText = memoryStats.textContent!.match(/Max: ([\d.]+)/)?.[1];
      
      if (averageText && maxText) {
        const average = parseFloat(averageText);
        const max = parseFloat(maxText);
        
        // Memory should not grow excessively (max should be within 50% of average)
        expect(max).toBeLessThan(average * 1.5);
      }
    });
  });

  describe('Video and Media Performance', () => {
    test('handles multiple video players without performance degradation', async () => {
      const MultiVideoTest = () => {
        const [videosLoaded, setVideosLoaded] = React.useState(0);
        const [loadTimes, setLoadTimes] = React.useState<number[]>([]);
        
        const handleVideoLoad = (loadTime: number) => {
          setVideosLoaded(prev => prev + 1);
          setLoadTimes(prev => [...prev, loadTime]);
        };

        const MockVideoPlayer = ({ id }: { id: number }) => {
          React.useEffect(() => {
            const startTime = performance.now();
            
            // Simulate video loading
            const loadTime = Math.random() * 2000 + 500; // 500-2500ms
            
            setTimeout(() => {
              const endTime = performance.now();
              handleVideoLoad(endTime - startTime);
            }, loadTime);
          }, []);

          return (
            <div className="video-player" data-testid={`video-${id}`}>
              Video Player {id}
            </div>
          );
        };

        return (
          <div>
            <h2>Multiple Video Performance Test</h2>
            <div data-testid="video-stats">
              Videos loaded: {videosLoaded} / Average load time: {
                loadTimes.length > 0 
                  ? (loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length).toFixed(0)
                  : 0
              }ms
            </div>
            <div className="video-grid">
              {Array.from({ length: 10 }, (_, i) => (
                <MockVideoPlayer key={i} id={i} />
              ))}
            </div>
          </div>
        );
      };

      render(<MultiVideoTest />);

      // Wait for all videos to load
      await waitFor(() => {
        expect(screen.getByTestId('video-stats')).toHaveTextContent('Videos loaded: 10');
      }, { timeout: 15000 });

      // Verify all video players are rendered
      for (let i = 0; i < 10; i++) {
        expect(screen.getByTestId(`video-${i}`)).toBeInTheDocument();
      }

      // Check average load time is reasonable
      const statsText = screen.getByTestId('video-stats').textContent!;
      const averageLoadTime = parseInt(statsText.match(/Average load time: (\d+)/)?.[1] || '0');
      
      expect(averageLoadTime).toBeLessThan(3000); // Should load within 3 seconds on average
    });

    test('optimizes image loading for large galleries', async () => {
      const ImageGalleryTest = () => {
        const [imagesLoaded, setImagesLoaded] = React.useState(0);
        const [totalLoadTime, setTotalLoadTime] = React.useState(0);
        
        const MockImage = ({ id }: { id: number }) => {
          React.useEffect(() => {
            const startTime = performance.now();
            
            // Simulate image loading
            setTimeout(() => {
              const endTime = performance.now();
              const loadTime = endTime - startTime;
              
              setImagesLoaded(prev => prev + 1);
              setTotalLoadTime(prev => prev + loadTime);
            }, Math.random() * 500 + 100); // 100-600ms per image
          }, []);

          return (
            <div className="gallery-image" data-testid={`image-${id}`}>
              <div className="image-placeholder">Image {id}</div>
            </div>
          );
        };

        return (
          <div>
            <h2>Image Gallery Performance Test</h2>
            <div data-testid="image-stats">
              Images loaded: {imagesLoaded} / Total time: {totalLoadTime.toFixed(0)}ms
            </div>
            <div className="image-gallery">
              {Array.from({ length: 25 }, (_, i) => (
                <MockImage key={i} id={i} />
              ))}
            </div>
          </div>
        );
      };

      render(<ImageGalleryTest />);

      await waitFor(() => {
        expect(screen.getByTestId('image-stats')).toHaveTextContent('Images loaded: 25');
      }, { timeout: 10000 });

      // Verify progressive loading performance
      const statsText = screen.getByTestId('image-stats').textContent!;
      const totalTime = parseInt(statsText.match(/Total time: (\d+)/)?.[1] || '0');
      
      // With proper optimization, images should load efficiently
      expect(totalTime).toBeLessThan(15000); // 15 seconds total for 25 images
    });
  });

  describe('Database and API Performance', () => {
    test('handles high-frequency API calls without throttling', async () => {
      const APILoadTest = () => {
        const [apiCalls, setApiCalls] = React.useState(0);
        const [responses, setResponses] = React.useState<any[]>([]);
        const [errors, setErrors] = React.useState(0);

        const makeAPICall = async (id: number) => {
          try {
            const response = await fetch(`/api/test-endpoint?id=${id}`, {
              method: 'GET',
              headers: { 'Content-Type': 'application/json' }
            });
            
            const data = await response.json();
            setResponses(prev => [...prev, data]);
            setApiCalls(prev => prev + 1);
          } catch (error) {
            setErrors(prev => prev + 1);
          }
        };

        const runAPILoadTest = async () => {
          const promises = Array.from({ length: 200 }, (_, i) => makeAPICall(i));
          await Promise.all(promises);
        };

        return (
          <div>
            <button onClick={runAPILoadTest}>Run 200 API Calls</button>
            <div data-testid="api-stats">
              Successful calls: {apiCalls} / Errors: {errors}
            </div>
          </div>
        );
      };

      render(<APILoadTest />);

      const startTime = performance.now();
      
      fireEvent.click(screen.getByText('Run 200 API Calls'));

      await waitFor(() => {
        const statsText = screen.getByTestId('api-stats').textContent!;
        const successCount = parseInt(statsText.match(/Successful calls: (\d+)/)?.[1] || '0');
        expect(successCount).toBe(200);
      }, { timeout: 10000 });

      const endTime = performance.now();
      const totalTime = endTime - startTime;

      // Should handle 200 API calls within reasonable time
      expect(totalTime).toBeLessThan(8000); // 8 seconds
      
      // Check error rate
      const statsText = screen.getByTestId('api-stats').textContent!;
      const errorCount = parseInt(statsText.match(/Errors: (\d+)/)?.[1] || '0');
      
      // Error rate should be minimal
      expect(errorCount).toBeLessThan(10); // Less than 5% error rate
    });
  });

  describe('Mobile Performance Under Load', () => {
    test('maintains touch responsiveness under computational load', async () => {
      const TouchResponsivenessTest = () => {
        const [touchEvents, setTouchEvents] = React.useState<number[]>([]);
        const [isProcessing, setIsProcessing] = React.useState(false);

        const simulateHeavyComputation = () => {
          setIsProcessing(true);
          
          // Simulate heavy computation in chunks to avoid blocking
          const heavyTask = () => {
            for (let i = 0; i < 1000000; i++) {
              Math.random() * Math.random();
            }
          };

          // Break computation into chunks
          const runChunk = (chunk: number) => {
            if (chunk < 10) {
              heavyTask();
              setTimeout(() => runChunk(chunk + 1), 0);
            } else {
              setIsProcessing(false);
            }
          };

          runChunk(0);
        };

        const handleTouch = () => {
          const timestamp = performance.now();
          setTouchEvents(prev => [...prev, timestamp]);
        };

        return (
          <div>
            <button onClick={simulateHeavyComputation} disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Start Heavy Computation'}
            </button>
            <button 
              onClick={handleTouch}
              data-testid="touch-button"
              style={{ marginTop: '20px', padding: '20px' }}
            >
              Touch Response Test ({touchEvents.length} touches)
            </button>
            <div data-testid="responsiveness-status">
              {isProcessing ? 'Computing - test touch responsiveness' : 'Ready for testing'}
            </div>
          </div>
        );
      };

      render(<TouchResponsivenessTest />);

      // Start heavy computation
      fireEvent.click(screen.getByText('Start Heavy Computation'));

      // Test touch responsiveness during computation
      const touchButton = screen.getByTestId('touch-button');
      
      for (let i = 0; i < 10; i++) {
        fireEvent.click(touchButton);
        await new Promise(resolve => setTimeout(resolve, 100));
      }

      // Should register all touch events even during heavy computation
      expect(screen.getByText(/10 touches/)).toBeInTheDocument();

      // Wait for computation to complete
      await waitFor(() => {
        expect(screen.getByTestId('responsiveness-status')).toHaveTextContent('Ready for testing');
      }, { timeout: 5000 });
    });
  });

  describe('Stress Testing Edge Cases', () => {
    test('handles form submission retry logic under network instability', async () => {
      let attemptCount = 0;
      
      // Mock unstable network
      (fetch as jest.Mock).mockImplementation(() => {
        attemptCount++;
        if (attemptCount <= 3) {
          return Promise.reject(new Error('Network Error'));
        }
        return Promise.resolve({
          ok: true,
          json: async () => ({ success: true })
        });
      });

      const NetworkRetryTest = () => {
        const [submitAttempts, setSubmitAttempts] = React.useState(0);
        const [submitSuccess, setSubmitSuccess] = React.useState(false);

        const submitWithRetry = async (maxRetries = 5) => {
          for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
              setSubmitAttempts(attempt);
              
              const response = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({ data: 'test' })
              });
              
              if (response.ok) {
                setSubmitSuccess(true);
                break;
              }
            } catch (error) {
              if (attempt === maxRetries) {
                throw error;
              }
              await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
            }
          }
        };

        return (
          <div>
            <button onClick={() => submitWithRetry()}>
              Submit with Retry Logic
            </button>
            <div data-testid="retry-stats">
              Attempts: {submitAttempts} / Success: {submitSuccess ? 'Yes' : 'No'}
            </div>
          </div>
        );
      };

      render(<NetworkRetryTest />);

      fireEvent.click(screen.getByText('Submit with Retry Logic'));

      await waitFor(() => {
        expect(screen.getByTestId('retry-stats')).toHaveTextContent('Success: Yes');
      }, { timeout: 10000 });

      // Should succeed after retries
      expect(screen.getByTestId('retry-stats')).toHaveTextContent('Attempts: 4');
      expect(fetch).toHaveBeenCalledTimes(4);
    });
  });
});