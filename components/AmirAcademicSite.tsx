import React, { useMemo, useState, useEffect } from 'react';
import { VscodeChrome } from './layout/VscodeChrome';
import { FileItem } from './layout/FileItem';
import { ThemeToggle } from './ui/ThemeToggle';
import { 
  AboutPage, 
  PublicationsPage, 
  ExperiencePage, 
  TeachingPage, 
  ProjectsPage, 
  ContactPage 
} from './pages';
import { themes, ThemeName } from '../theme';
import { about } from '../data';

const files = [
  { id: 'about', label: 'about.md', page: AboutPage },
  { id: 'experience', label: 'experience.md', page: ExperiencePage },
  { id: 'publications', label: 'publications.md', page: PublicationsPage },
  { id: 'projects', label: 'projects.md', page: ProjectsPage },
  { id: 'teaching', label: 'teaching.md', page: TeachingPage },
  // { id: 'contact', label: 'contact.json', page: ContactPage },
];

export default function AmirAcademicSite() {
  const [active, setActive] = useState('about');
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('dracula');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ActivePage = useMemo(() => files.find(f => f.id === active)?.page ?? AboutPage, [active]);
  const theme = themes[currentTheme];

  // Sync active tab with URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && files.some(f => f.id === hash)) {
      setActive(hash);
    }
  }, []);

  const handleTabChange = (id: string) => {
    setActive(id);
    window.history.pushState(null, '', `#${id}`);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'dracula' ? 'blulocoLight' : 'dracula');
  };

  return (
    <div 
      className="min-h-screen" 
      style={{ 
        ...theme.colors as React.CSSProperties, 
        background: 'var(--bg)', 
        color: 'var(--text)', 
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial' 
      }}
    >
      {/* App chrome */}
      <VscodeChrome
        tabs={files.map(f => ({ id: f.id, title: f.label }))}
        active={active}
        onSelect={handleTabChange}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="relative lg:grid" style={{ gridTemplateColumns: '260px 1fr', minHeight: 'calc(100vh - 72px)' }}>
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" 
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar - hidden on mobile, shown on lg+ */}
        <aside 
          className={`${sidebarOpen ? 'fixed left-0 top-0 bottom-0 w-64 z-50' : 'hidden'} lg:block lg:relative border-r pt-4`} 
          style={{ background: 'var(--sidebar)', borderColor: 'var(--panel)' }}
        >
          {/* Mobile close button */}
          {sidebarOpen && (
            <div className="lg:hidden flex items-center justify-between px-3 py-4 border-b" style={{ borderColor: 'var(--panel)' }}>
              <span className="text-sm font-medium">Navigation</span>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-1 hover:opacity-70"
                style={{ color: 'var(--text)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          
          <div className="px-3 pb-2 pt-4 text-xs uppercase tracking-wide" style={{ color: 'var(--muted)' }}>EXPLORER</div>
          <FileItem label="amir-website" />
          <FileItem label="src" depth={1} />
          {files.map(f => (
            <FileItem
              key={f.id}
              label={f.label}
              depth={2}
              active={active === f.id}
              onClick={() => handleTabChange(f.id)}
            />
          ))}
        </aside>

        {/* Editor Pane */}
        <main className="overflow-y-auto w-full" style={{ background: 'var(--bg-alt)' }}>
          <div className="border-b px-4 py-2 text-xs" style={{ borderColor: 'var(--panel)', color: 'var(--muted)' }}>
            {files.find(f => f.id === active)?.label}
          </div>
          <ActivePage />
        </main>
      </div>

      {/* Footer */}
      {/* <footer className="text-center text-xs py-3 border-t" style={{ borderColor: 'var(--panel)', color: 'var(--muted)' }}>
        © {new Date().getFullYear()} {about.name} · {theme.name} theme
      </footer> */}
    </div>
  );
}
