'use client';

import { useState } from 'react';

// ── Accordion item ──────────────────────────────────────────────────────────
export default function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: 12,
        marginBottom: 12,
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: open ? '0 4px 16px rgba(0,0,0,0.08)' : undefined,
        transition: 'box-shadow 0.2s ease',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '20px 24px',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#0f172a',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          userSelect: 'none',
        }}
      >
        <span>{question}</span>
        <span
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: open ? '#0f172a' : '#0E7F5A',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            lineHeight: 1,
            fontWeight: 400,
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.25s ease, background 0.2s ease',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          style={{
            padding: '0 24px 20px',
            color: '#475569',
            lineHeight: 1.75,
            borderTop: '1px solid #f1f5f9',
          }}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}

