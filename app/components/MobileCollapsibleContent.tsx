'use client';
import React, { useState } from 'react';

interface MobileCollapsibleContentProps {
  children: React.ReactNode;
  previewHeight?: string;
  className?: string;
  showReadMore?: boolean;
  title?: string;
}

export default function MobileCollapsibleContent({
  children,
  previewHeight = '200px',
  className = '',
  showReadMore = true,
  title
}: MobileCollapsibleContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`mobile-collapsible-content ${className}`}>
      {/* Desktop: Always show full content */}
      <div className="hidden lg:block">
        {title && (
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-6">
            {title}
          </h3>
        )}
        {children}
      </div>

      {/* Mobile: Show collapsible content */}
      <div className="block lg:hidden">
        {title && (
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-white mb-4">
            {title}
          </h3>
        )}

        <div className="relative">
          {/* Content container */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? 'max-h-none' : `max-h-[${previewHeight}]`
            }`}
            style={{
              maxHeight: isExpanded ? 'none' : previewHeight
            }}
          >
            {children}
          </div>

          {/* Gradient overlay when collapsed */}
          {!isExpanded && showReadMore && (
            <div
              className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none"
            />
          )}
        </div>

        {/* Read more/less button */}
        {showReadMore && (
          <button
            onClick={toggleExpanded}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-sky-600/80 to-sky-700/80 backdrop-blur-xl text-white text-sm font-semibold rounded-lg border border-sky-400/20 hover:from-sky-500/80 hover:to-sky-600/80 hover:shadow-lg hover:shadow-sky-400/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-expanded={isExpanded}
          >
            <div className="flex items-center gap-2">
              <span>{isExpanded ? 'Weniger anzeigen' : 'Mehr lesen'}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

// Sub-component for collapsible text sections
interface CollapsibleTextSectionProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

export function CollapsibleTextSection({
  title,
  content,
  className = ''
}: CollapsibleTextSectionProps) {
  return (
    <MobileCollapsibleContent
      title={title}
      previewHeight="150px"
      className={className}
    >
      <div className="prose prose-lg max-w-none text-white/90">
        {content}
      </div>
    </MobileCollapsibleContent>
  );
}

// Component for FAQ sections with better mobile handling
interface MobileFAQSectionProps {
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function MobileFAQSection({ title, faqs }: MobileFAQSectionProps) {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
        {title}
      </h2>

      {/* Desktop: Show all FAQs */}
      <div className="hidden lg:block space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl p-6 rounded-xl border border-sky-400/20"
          >
            <h3 className="text-xl font-semibold text-sky-200 mb-3">
              {faq.question}
            </h3>
            <p className="text-white/70">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Mobile: Show first 2 FAQs with expand option */}
      <div className="block lg:hidden">
        <MobileCollapsibleContent
          previewHeight="auto"
          showReadMore={faqs.length > 2}
        >
          <div className="space-y-4">
            {/* Always show first 2 FAQs on mobile */}
            {faqs.slice(0, 2).map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl p-4 rounded-xl border border-sky-400/20"
              >
                <h3 className="text-lg font-semibold text-sky-200 mb-2">
                  {faq.question}
                </h3>
                <p className="text-white/70 text-sm">{faq.answer}</p>
              </div>
            ))}

            {/* Show remaining FAQs when expanded */}
            {faqs.length > 2 && (
              <div className="space-y-4 mt-4">
                {faqs.slice(2).map((faq, index) => (
                  <div
                    key={index + 2}
                    className="bg-gradient-to-r from-sky-900/30 to-slate-800/30 backdrop-blur-xl p-4 rounded-xl border border-sky-400/20"
                  >
                    <h3 className="text-lg font-semibold text-sky-200 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-white/70 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </MobileCollapsibleContent>
      </div>
    </div>
  );
}