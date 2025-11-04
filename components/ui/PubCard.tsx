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
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-6 4h6m-6-8h3" />
          </svg>
          Paper
        </a>}
        {p.links?.code && <a href={p.links?.code} target="_blank" rel="noreferrer" className="underline flex items-center gap-1.5 hover:opacity-80" style={{ color: 'var(--link)' }}>
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          Code
        </a>}
      </div>
      </div>
    </div>
  );
};

