import React from 'react';
import { experience } from '../../data';

export const ExperiencePage: React.FC = () => (
  <div className="p-4 md:p-6">
    <h2 className="text-lg sm:text-xl mb-4" style={{ color: 'var(--text)' }}>Experience</h2>
    <div className="grid gap-3">
      {experience.map((x, idx) => (
        <div key={idx} className="rounded-xl p-3 sm:p-4 border" style={{ background: 'var(--panel)', borderColor: 'var(--project)' }}>
          <div className="text-sm sm:text-base" style={{ color: 'var(--text)' }}>{x.role} — {x.org}</div>
          <div className="text-xs mb-2" style={{ color: 'var(--muted)' }}>{x.time} · {x.place}</div>
          <ul className="list-disc pl-5 space-y-1">
            {x.bullets.map((b, i) => <li key={i} className="text-xs sm:text-sm" style={{ color: 'var(--muted)' }}>{b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

