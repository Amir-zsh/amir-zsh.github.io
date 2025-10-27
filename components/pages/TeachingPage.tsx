import React from 'react';
import { teaching } from '../../data';

export const TeachingPage: React.FC = () => (
  <div className="p-4 md:p-6">
    <h2 className="text-lg sm:text-xl mb-4" style={{ color: 'var(--text)' }}>Teaching & Community</h2>
    <ul className="list-disc pl-5 space-y-1">
      {teaching.map((t, i) => <li key={i} className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{t}</li>)}
    </ul>
  </div>
);

