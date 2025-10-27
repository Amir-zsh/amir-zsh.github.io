import React from 'react';
import { cls } from '../../lib/utils';

type FileItemProps = {
  label: string;
  depth?: number;
  active?: boolean;
  onClick?: () => void;
};

export const FileItem: React.FC<FileItemProps> = ({ label, depth = 0, active, onClick }) => (
  <div
    onClick={onClick}
    className={cls('cursor-pointer select-none px-3 py-1.5 text-sm rounded-md', active && 'font-medium')}
    style={{
      marginLeft: depth * 12,
      color: active ? 'var(--text)' : 'var(--muted)',
      background: active ? 'var(--tab-active)' : 'transparent',
    }}>
    {label}
  </div>
);

