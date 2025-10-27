import React from 'react';
import { projects, otherProjects } from '../../data';
import { Pill } from '../ui/Pill';
import { tagColorFor } from '../../lib/utils';

export const ProjectsPage: React.FC = () => (
  <div className="p-4 md:p-6">
    <h2 className="text-lg sm:text-xl mb-4" style={{ color: 'var(--text)' }}>Selected Projects</h2>
    <div className="grid sm:grid-cols-2 gap-4">
      {projects.map((p, i) => (
        <div key={i} className="rounded-2xl p-3 sm:p-4 border" style={{ background: 'var(--panel)', borderColor: 'var(--project)' }}>
          <div className="h-1 w-full rounded-full mb-3" style={{ background: 'var(--project)' }} />
          <div className="text-sm sm:text-base mb-1" style={{ color: 'var(--text)' }}>{p.name}</div>
          <div className="text-xs sm:text-sm mb-2" style={{ color: 'var(--muted)' }}>{p.desc}</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {p.stack.map(s => <Pill key={s} color={tagColorFor(s)}>{s}</Pill>)}
          </div>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-xs sm:text-sm underline flex items-center gap-1.5 hover:opacity-80" style={{ color: 'var(--link)' }}>
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Repository
          </a>}
        </div>
      ))}
    </div>

    <h3 className="text-base sm:text-lg mt-8 mb-3" style={{ color: 'var(--text)' }}>More Projects</h3>
    <div className="grid sm:grid-cols-2 gap-4">
      {otherProjects.map((p, i) => (
        <div key={i} className="rounded-2xl p-3 sm:p-4 border" style={{ background: 'var(--panel)', borderColor: 'var(--project)' }}>
          <div className="h-1 w-full rounded-full mb-3" style={{ background: 'var(--project)' }} />
          <div className="text-sm sm:text-base mb-1" style={{ color: 'var(--text)' }}>{p.name}</div>
          <div className="text-xs sm:text-sm mb-2" style={{ color: 'var(--muted)' }}>{p.desc}</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {p.stack.map(s => <Pill key={s} color={tagColorFor(s)}>{s}</Pill>)}
          </div>
          {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-xs sm:text-sm underline flex items-center gap-1.5 hover:opacity-80" style={{ color: 'var(--link)' }}>
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            More
          </a>}
        </div>
      ))}
    </div>
  </div>
);

