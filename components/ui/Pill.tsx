import React from 'react';

type PillProps = {
  children: React.ReactNode;
  color?: string;
};

export const Pill: React.FC<PillProps> = ({ children, color }) => (
  <span
    className="rounded-full px-2 py-0.5 text-[11px]"
    style={{
      color: '#0b0c10',
      background: (color ?? 'var(--accent-yellow)'),
      border: '1px solid rgba(0,0,0,0.08)'
    }}
  >
    {children}
  </span>
);

