'use client';
import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

interface ChatMessage {
  id: number;
  sender: 'user' | 'agent';
  message: string;
  timestamp: Date;
  isTyping?: boolean;
}

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedResponses = [
    {
      keywords: ['hallo', 'hi', 'guten tag'],
      response: 'Hallo! Ich bin Max, Ihr Asbestsanierung-Experte. Wie kann ich Ihnen heute helfen? 🏠'
    },
    {
      keywords: ['preis', 'kosten', 'kostet'],
      response: 'Gerne erstelle ich Ihnen ein Angebot! Asbestsanierung beginnt bei 35€/m². Für ein präzises Angebot benötige ich: 📏 Fläche in m², 🏗️ Art des Materials, ⏰ Zeitrahmen. Möchten Sie unseren Sofort-Rechner verwenden?'
    },
    {
      keywords: ['notfall', 'dringend', 'sofort'],
      response: '🚨 NOTFALL verstanden! Wir haben einen 24/7-Service. Rufen Sie sofort an: 0800 0060970 oder ich verbinde Sie direkt mit unserem Notfall-Team. Wo befindet sich das Problem?'
    },
    {
      keywords: ['asbest', 'gefährlich', 'gesundheit'],
      response: 'Asbest ist sehr gefährlich und sollte nur von Profis entfernt werden! ⚠️ NIEMALS selbst entfernen! Wir sind TRGS 519 zertifiziert und haben über 5000 Projekte erfolgreich abgeschlossen. Benötigen Sie eine Sofort-Analyse?'
    },
    {
      keywords: ['bielefeld', 'owl', 'ostwestfalen'],
      response: 'Perfekt! Bielefeld ist unser Hauptstandort. 🏢 Wir sind in 30-45 Min bei Ihnen vor Ort. Unser Team kennt alle Bielefelder Stadtteile bestens. In welchem Stadtteil befinden Sie sich?'
    }
  ];

  useEffect(() => {
    // Show notification after 30 seconds
    const notificationTimer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
        setUnreadCount(1);
      }
    }, 30000);

    return () => clearTimeout(notificationTimer);
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const findResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    for (const response of predefinedResponses) {
      if (response.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return response.response;
      }
    }
    return 'Vielen Dank für Ihre Nachricht! Ein Experte wird Ihnen in Kürze antworten. Für sofortige Hilfe rufen Sie gerne an: 0800 0060970 📞';
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsAgentTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: ChatMessage = {
        id: Date.now() + 1,
        sender: 'agent',
        message: findResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, agentResponse]);
      setIsAgentTyping(false);
    }, 1500);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
    setShowNotification(false);
    
    if (messages.length === 0) {
      // Welcome message
      const welcomeMessage: ChatMessage = {
        id: 1,
        sender: 'agent',
        message: 'Willkommen! 👋 Ich bin Max von der Asbestsanierung-Beratung. Haben Sie Fragen zu Asbestsanierung, Preisen oder benötigen Sie Soforthilfe?',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="user" size={20} />
              </div>
              <div>
                <h3 className="font-bold">Max - Asbestexperte</h3>
                <p className="text-xs opacity-90">🟢 Online • Antwortet sofort</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <Icon name="x" size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-[#0066CC] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString('de-DE', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isAgentTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-3 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-gray-100">
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setInputMessage('Was kostet eine Asbestsanierung?')}
                className="bg-gray-100 text-xs px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
              >
                💰 Preise
              </button>
              <button
                onClick={() => setInputMessage('Ich habe einen Notfall!')}
                className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full hover:bg-red-200 transition-colors"
              >
                🚨 Notfall
              </button>
              <button
                onClick={() => setInputMessage('Standort Bielefeld')}
                className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full hover:bg-blue-200 transition-colors"
              >
                📍 Bielefeld
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Nachricht eingeben..."
                className="flex-1 px-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[#0066CC] text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#0066CC] text-white p-2 rounded-full hover:bg-[#0052A3] transition-colors"
              >
                <Icon name="send" size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Notification */}
        {showNotification && !isOpen && (
          <div className="absolute -top-16 -left-32 bg-white rounded-xl shadow-2xl border border-gray-200 p-3 animate-bounce">
            <div className="flex items-center gap-2">
              <Icon name="message" size={16} className="text-[#0066CC]" />
              <p className="text-sm font-medium">Haben Sie Fragen?</p>
            </div>
            <p className="text-xs text-gray-600 mt-1">Starten Sie einen Chat!</p>
          </div>
        )}

        <button
          onClick={handleOpen}
          className="relative w-16 h-16 bg-gradient-to-r from-[#0066CC] to-[#0052A3] text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        >
          <Icon name="message" size={28} />
          
          {unreadCount > 0 && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
              {unreadCount}
            </div>
          )}
          
          {/* Online indicator */}
          <div className="absolute top-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
        </button>
      </div>
    </>
  );
}