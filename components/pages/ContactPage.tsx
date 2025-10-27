import React from 'react';
import { about } from '../../data';

export const ContactPage: React.FC = () => (
  <div className="p-6">
    <h2 className="text-xl mb-4" style={{ color: 'var(--text)' }}>Contact</h2>
    <div className="text-sm space-y-2" style={{ color: 'var(--muted)' }}>
      <div>Email: <a className="underline" style={{ color: 'var(--link)' }} href={`mailto:${about.email}`}>{about.email}</a></div>
      <div>GitHub: <a className="underline" style={{ color: 'var(--link)' }} target="_blank" rel="noreferrer" href={about.github}>{about.github}</a></div>
      <div>Affiliation: {about.affiliation}</div>
      <div>Location: {about.location}</div>
    </div>
  </div>
);

