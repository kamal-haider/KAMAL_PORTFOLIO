'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface NavigationAction {
  action: string;
  target: string;
}

const MAX_TOKENS = 10;
const STORAGE_KEY = 'cipher-tokens';

function getTokens(): number {
  if (typeof window === 'undefined') return MAX_TOKENS;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return MAX_TOKENS;
  try {
    const { tokens, expiry } = JSON.parse(stored);
    if (Date.now() > expiry) {
      localStorage.removeItem(STORAGE_KEY);
      return MAX_TOKENS;
    }
    return tokens;
  } catch {
    return MAX_TOKENS;
  }
}

function setTokens(tokens: number) {
  const expiry = Date.now() + 24 * 60 * 60 * 1000; // 24h
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ tokens, expiry }));
}

function TokenBar({ tokens }: { tokens: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-[10px] text-text-tertiary tracking-wider">
        TOKENS
      </span>
      <div className="flex gap-0.5">
        {Array.from({ length: MAX_TOKENS }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-3 transition-all duration-300 ${
              i < tokens
                ? 'bg-neural shadow-[0_0_4px_rgba(0,240,255,0.4)]'
                : 'bg-border'
            }`}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] text-neural tabular-nums">
        {tokens}/{MAX_TOKENS}
      </span>
    </div>
  );
}

export default function CipherChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tokens, setTokenCount] = useState(MAX_TOKENS);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { play } = useSound();

  useEffect(() => {
    setTokenCount(getTokens());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const dispatchNavigation = useCallback((nav: NavigationAction) => {
    window.dispatchEvent(
      new CustomEvent('cipher:navigate', { detail: nav })
    );
  }, []);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || isLoading || tokens <= 0) return;

    const userMessage: Message = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);
    play('click');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Request failed');
      }

      const data = await res.json();

      // Handle navigation actions
      if (data.navigations?.length > 0) {
        data.navigations.forEach((nav: NavigationAction) => {
          dispatchNavigation(nav);
        });
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.text,
      };
      setMessages([...newMessages, assistantMessage]);

      // Consume a token
      const newTokens = tokens - 1;
      setTokenCount(newTokens);
      setTokens(newTokens);

      play('nav');
    } catch {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Neural link disrupted. Try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, tokens, messages, play, dispatchNavigation]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.3 }}
            onClick={() => {
              setIsOpen(true);
              play('click');
            }}
            className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-surface border border-neural/50 flex items-center justify-center transition-all duration-300 hover:border-neural hover:shadow-glow-neural group"
          >
            <div className="relative">
              <svg
                className="w-6 h-6 text-neural"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              {/* Pulse indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neural opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neural" />
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[60] w-[380px] max-h-[600px] flex flex-col border border-neural/30 bg-void/95 backdrop-blur-xl shadow-glow-neural overflow-hidden sm:bottom-6 sm:right-6"
            style={{ maxHeight: 'calc(100dvh - 48px)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 border border-neural/50 flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-neural">
                      C
                    </span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-neural rounded-full" />
                </div>
                <div>
                  <div className="font-mono text-xs tracking-[0.2em] text-text-primary">
                    CIPHER
                  </div>
                  <div className="font-mono text-[10px] text-text-tertiary">
                    NEURAL AGENT v1.0
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TokenBar tokens={tokens} />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    play('click');
                  }}
                  className="w-6 h-6 flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {/* Welcome message */}
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 shrink-0 border border-neural/30 flex items-center justify-center mt-0.5">
                      <span className="font-mono text-[10px] text-neural">
                        C
                      </span>
                    </div>
                    <div className="font-mono text-sm text-text-secondary leading-relaxed">
                      <span className="text-neural">{'>'}</span> Neural link
                      established. I&apos;m CIPHER — Kamal&apos;s portfolio agent.
                      <br />
                      <br />
                      Ask me about his projects, skills, or experience. I can
                      also navigate the site for you.
                      <br />
                      <br />
                      <span className="text-text-tertiary text-xs">
                        Try: &quot;What AI projects has he built?&quot; or &quot;Show me the
                        mobile apps&quot;
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Message list */}
              {messages.map((msg, i) => (
                <div key={i} className="flex gap-3">
                  {msg.role === 'assistant' ? (
                    <div className="w-6 h-6 shrink-0 border border-neural/30 flex items-center justify-center mt-0.5">
                      <span className="font-mono text-[10px] text-neural">
                        C
                      </span>
                    </div>
                  ) : (
                    <div className="w-6 h-6 shrink-0 border border-amber/30 flex items-center justify-center mt-0.5">
                      <span className="font-mono text-[10px] text-amber">
                        U
                      </span>
                    </div>
                  )}
                  <div
                    className={`font-mono text-sm leading-relaxed ${
                      msg.role === 'assistant'
                        ? 'text-text-secondary'
                        : 'text-text-primary'
                    }`}
                  >
                    {msg.role === 'assistant' && (
                      <span className="text-neural">{'>'} </span>
                    )}
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-6 h-6 shrink-0 border border-neural/30 flex items-center justify-center mt-0.5">
                    <span className="font-mono text-[10px] text-neural">
                      C
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-neural rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-neural rounded-full animate-pulse [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-neural rounded-full animate-pulse [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              {/* Depleted state */}
              {tokens <= 0 && !isLoading && (
                <div className="border border-signal/30 bg-signal/5 p-3">
                  <div className="font-mono text-xs text-signal mb-2">
                    NEURAL LINK DEPLETED
                  </div>
                  <div className="font-mono text-xs text-text-secondary">
                    Token allocation exhausted. Use the{' '}
                    <button
                      onClick={() => {
                        dispatchNavigation({
                          action: 'scrollTo',
                          target: 'contact',
                        });
                        setIsOpen(false);
                      }}
                      className="text-neural underline hover:text-neural/80"
                    >
                      contact terminal
                    </button>{' '}
                    to continue the conversation directly.
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="border-t border-border bg-surface/30 p-3">
              <div className="flex gap-2">
                <div className="flex-1 flex items-center border border-border bg-void/50 focus-within:border-neural/50 transition-colors">
                  <span className="pl-3 font-mono text-xs text-neural">
                    $
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading || tokens <= 0}
                    placeholder={
                      tokens <= 0
                        ? 'Tokens depleted'
                        : 'Query CIPHER...'
                    }
                    className="flex-1 bg-transparent px-2 py-2.5 font-mono text-sm text-text-primary placeholder:text-text-muted outline-none disabled:opacity-50"
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={isLoading || tokens <= 0 || !input.trim()}
                  className="px-3 border border-neural/30 text-neural font-mono text-xs tracking-wider transition-all duration-200 hover:bg-neural/10 hover:border-neural disabled:opacity-30 disabled:hover:bg-transparent"
                >
                  TX
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-mono text-[10px] text-text-muted">
                  ENTER to transmit
                </span>
                <span className="font-mono text-[10px] text-text-muted">
                  Powered by Claude
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
