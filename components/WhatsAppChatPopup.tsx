'use client';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { isQuoteEmbedPath } from '@/lib/isQuoteEmbedPath';
import { X, Send } from 'lucide-react';
import logo from '@/assets/wow-gutter-logo2.png';
import { colors } from '@/constants/colors';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
};

export default function WhatsAppChatPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showQuoteButton, setShowQuoteButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const phoneNumber = '447421433910';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  };

  const addBotMessage = (text: string, delay = 1000) => {
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now(),
        text,
        sender: 'bot',
        time: getCurrentTime(),
      };
      setMessages(prev => [...prev, newMessage]);
    }, delay);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      time: getCurrentTime(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Bot responses based on message count
    if (messages.length === 0) {
      // First user message
      addBotMessage('Hello 👋 Yes, we specialise in gutter cleaning at WOW Gutters. How can we assist you today?');
    } else if (messages.length === 2) {
      // Second user message (after first bot response)
      addBotMessage('Great question! Our pricing depends on the property size and condition. Would you like to get a personalized quote?', 1000);
      setTimeout(() => {
        setShowQuoteButton(true);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleGetQuote = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  if (isQuoteEmbedPath(pathname)) {
    return null;
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 h-14 w-14 rounded-2xl shadow-xl transition-all duration-300 flex items-center justify-center group border border-white/25 ${
          isOpen ? 'scale-95' : 'hover:scale-105'
        }`}
        style={{ background: 'linear-gradient(135deg, #25D366 0%, #19C58B 100%)' }}
        aria-label="Open WhatsApp Chat"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        {!isOpen && <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-white/95 ring-2 ring-[#22C55E]" />}
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: '600px' }}>
          {/* Header - Brand Navy */}
          <div className="px-6 py-4 flex items-center gap-3" style={{ background: colors.navy }}>
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
              <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-bold text-lg">WOW Gutters</h3>
              <p className="text-white/90 text-sm">Typically replies instantly</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X size={18} className="text-white" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4" style={{ background: colors.lightGray }}>
            {messages.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto mb-4">
                  <Image
                    src={logo}
                    alt="WOW Gutters"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <h2 className="font-bold text-xl mb-2" style={{ color: colors.text }}>
                  Chat with WOW Gutters
                </h2>
                <p className="text-sm" style={{ color: colors.textLight }}>
                  Send us a message and we'll respond right away!
                </p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === 'bot' ? 'justify-end' : ''
                  }`}
                >
                  {message.sender === 'user' && (
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center shadow-md" style={{ background: colors.textLight }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className={`flex-1 ${message.sender === 'bot' ? 'flex justify-end' : ''}`}>
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-md inline-block max-w-[85%] ${
                        message.sender === 'bot'
                          ? 'rounded-tr-md'
                          : 'bg-white rounded-tl-md'
                      }`}
                      style={message.sender === 'bot' ? { background: colors.primary } : {}}
                    >
                      <p className={`text-base ${message.sender === 'bot' ? 'text-white' : ''}`} style={message.sender === 'user' ? { color: colors.text } : {}}>
                        {message.text}
                      </p>
                    </div>
                    <span className={`text-xs mt-1 block ${message.sender === 'bot' ? 'text-right mr-2' : 'ml-2'}`} style={{ color: colors.textLight }}>
                      {message.time}
                    </span>
                  </div>
                  {message.sender === 'bot' && index === messages.length - 1 && (
                    <div className="w-10 h-10 flex-shrink-0">
                      <Image
                        src={logo}
                        alt="WOW Gutters"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>
                  )}
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quote Button - Shows after 2 messages */}
          {showQuoteButton ? (
            <div className="bg-white px-6 py-4 border-t space-y-3" style={{ borderColor: colors.lightGray }}>
              <button
                onClick={handleGetQuote}
                className="w-full text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 group"
                style={{ background: colors.cta }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Get Quote on WhatsApp
              </button>
              <p className="text-center text-xs" style={{ color: colors.textLight }}>
                Continue the conversation on WhatsApp for instant quotes
              </p>
            </div>
          ) : (
            /* Input Area - Hidden after quote button shows */
            <div className="bg-white px-4 py-3 border-t" style={{ borderColor: colors.lightGray }}>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 transition-all"
                  style={{ 
                    background: colors.lightGray,
                    color: colors.text,
                    borderColor: colors.primary
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all disabled:opacity-40 hover:scale-105 shadow-md"
                  style={{ background: colors.primary }}
                  aria-label="Send message"
                >
                  <Send size={20} className="text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="py-4 px-6" style={{ background: colors.navy }}>
            <a 
              href="tel:07421433910"
              className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl transition-all hover:scale-[1.02] group"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: colors.cta }}>
                <svg className="w-5 h-5" fill="white" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-white/80 text-xs font-medium">Call us directly</span>
                <span className="text-white font-bold text-lg tracking-wide">07421 433910</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </>
  );
}