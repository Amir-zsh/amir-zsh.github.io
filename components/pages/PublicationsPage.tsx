import React from 'react';
import { publications } from '../../data';
import { PubCard } from '../ui/PubCard';

export const PublicationsPage: React.FC = () => (
  <div className="p-4 md:p-6">
    <h2 className="text-lg sm:text-xl mb-4" style={{ color: 'var(--text)' }}>Publications</h2>
    <div className="grid gap-4">
      {publications.map((p, i) => <PubCard key={i} p={p} />)}
    </div>
    {/* <div className="text-xs mt-6" style={{ color: 'var(--muted)' }}>
      Tip: add figures to <code>/public/figures</code> and update <code>figureSrc</code> paths above. Keep them ~800×500 for a crisp look.
    </div> */}
  </div>
);

