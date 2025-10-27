import React from 'react';
import { Publication } from '../../types';
import { Pill } from './Pill';
import { tagColorFor } from '../../lib/utils';

type PubCardProps = {
  p: Publication;
};

export const PubCard: React.FC<PubCardProps> = ({ p }) => {
  // Bold "Amir Ziashahabi" in the authors string
  const formatAuthors = (authors: string) => {
    const parts = authors.split('Amir Ziashahabi');
    if (parts.length === 1) return <>{authors}</>;
    
    return (
      <>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && <strong style={{ color: 'var(--text)' }}>Amir Ziashahabi</strong>}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div className="rounded-2xl overflow-hidden border grid md:grid-cols-[320px_1fr]" style={{ borderColor: 'var(--tab-active)', background: 'var(--panel)' }}>
      <div className="bg-black/30 h-[200px] md:h-full flex items-center justify-center">
        {p.figureSrc ? (
          <img src={p.figureSrc} alt={p.title} className="object-contain h-full w-full" />
        ) : (
          <div className="text-center text-xs px-3" style={{ color: 'var(--muted)' }}>
            Add a figure image at <code>/public/figures</code>
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-base sm:text-lg" style={{ color: 'var(--text)' }}>{p.title}</h3>
          <span className="text-[10px] uppercase tracking-wide rounded px-1.5 py-0.5 border whitespace-nowrap"
          style={{
            color: p.status === 'accepted' ? 'var(--accent-2)' : p.status === 'published' ? 'var(--accent-blue)' : 'var(--accent)',
            borderColor: 'var(--tab-active)'
          }}>{p.status}</span>
        </div>
        <div className="text-xs sm:text-sm mb-1" style={{ color: 'var(--muted)' }}>{formatAuthors(p.authors)}</div>
      <div className="text-xs sm:text-sm mb-2" style={{ color: 'var(--muted)' }}>
        <span className="font-medium" style={{ color: 'var(--text)' }}>{p.venue}</span> · {p.year}
      </div>
      <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
        {p.links?.pdf && <a href={p.links?.pdf} target="_blank" rel="noreferrer" className="underline flex items-center gap-1.5 hover:opacity-80" style={{ color: 'var(--link)' }}>
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
          PDF
        </a>}
        {p.links?.code && <a href={p.links?.code} target="_blank" rel="noreferrer" className="underline flex items-center gap-1.5 hover:opacity-80" style={{ color: 'var(--link)' }}>
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Code
        </a>}
      </div>
      </div>
    </div>
  );
};

