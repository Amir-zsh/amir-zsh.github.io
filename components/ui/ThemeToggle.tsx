import React from 'react';
import { ThemeName } from '../../theme';

type ThemeToggleProps = {
  currentTheme: ThemeName;
  onToggle: () => void;
};

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="px-3 py-1.5 text-xs rounded-md hover:opacity-80 transition-opacity"
      style={{
        background: 'var(--panel)',
        color: 'var(--text)',
        border: '1px solid var(--tab-active)',
      }}
      title="Toggle theme"
    >
      {currentTheme === 'dracula' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

