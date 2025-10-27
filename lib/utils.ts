export const cls = (...xs: (string | false | undefined)[]) => xs.filter(Boolean).join(' ');

const tagColors = ['var(--accent)', 'var(--accent-2)', 'var(--accent-blue)', 'var(--accent-pink)', 'var(--accent-yellow)'];

export const tagColorFor = (key: string) => 
  tagColors[Math.abs([...key].reduce((a,c)=>a+c.charCodeAt(0),0)) % tagColors.length] || 'var(--accent-yellow)';

