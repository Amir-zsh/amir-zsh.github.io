import React from 'react';
import { cls } from '../../lib/utils';

type VscodeChromeProps = {
  tabs: { id: string; title: string; dirty?: boolean }[];
  active: string;
  onSelect: (id: string) => void;
  onMenuClick?: () => void;
};

// File extension to icon mapping
const getFileIcon = (filename: string) => {
  if (filename.endsWith('.md')) return '📄';
  if (filename.endsWith('.ts') || filename.endsWith('.tsx')) return '🔷';
  if (filename.endsWith('.json')) return '📋';
  return '📄';
};

export const VscodeChrome: React.FC<VscodeChromeProps> = ({ tabs, active, onSelect, onMenuClick }) => {
  return (
    <div className="w-full" style={{ background: 'var(--bg)' }}>
      <div className="flex items-center gap-2 px-3 py-2" style={{ background: 'var(--tab)' }}>
        {/* Hamburger menu for mobile */}
        {onMenuClick && (
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-1 hover:opacity-70"
            style={{ color: 'var(--text)' }}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
        
        {/* traffic lights */}
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full" style={{ background: '#ff5f56' }} />
          <span className="h-3 w-3 rounded-full" style={{ background: '#ffbd2e' }} />
          <span className="h-3 w-3 rounded-full" style={{ background: '#27c93f' }} />
        </div>
        
        {/* Logo */}
        <button 
          onClick={() => onSelect('/')}
          className="ml-2 flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Go to home"
        >
          <img src="/logo.svg" alt="A-Z Logo" className="h-8 w-auto" />
        </button>
        
        {/* Name */}
        <div className="text-sm ml-2 truncate" style={{ color: 'var(--muted)' }}> Amir Ziashahabi</div>
      </div>
      {/* Tabs */}
      <div className="flex items-stretch overflow-x-auto" style={{ background: 'var(--tab)', borderBottom: '1px solid var(--panel)' }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={cls('px-3 md:px-4 py-2 text-xs md:text-sm whitespace-nowrap border-r flex items-center gap-2', active === t.id && 'font-medium')}
            style={{
              color: active === t.id ? 'var(--text)' : 'var(--muted)',
              background: active === t.id ? 'var(--tab-active)' : 'transparent',
              borderColor: 'var(--panel)',
              borderBottom: active === t.id ? '2px solid var(--accent-blue)' : '2px solid transparent',
            }}>
            <span className="text-xs">{getFileIcon(t.title)}</span>
            {t.title}{t.dirty ? '*' : ''}
          </button>
        ))}
        <div className="flex-1" style={{ background: 'var(--tab)' }} />
      </div>
    </div>
  );
};

