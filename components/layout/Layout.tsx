import { VscodeChrome } from './VscodeChrome'
import { FileItem } from './FileItem'
import { useState, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { themes } from '../../theme'

type LayoutProps = {
  children: ReactNode
  currentPage: string
  pageTitle: string
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, pageTitle }) => {
  const router = useRouter()
  const [currentTheme] = useState<'dracula' | 'blulocoLight'>('dracula')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const theme = themes[currentTheme]

  const files = [
    { id: '/', label: 'about.md' },
    { id: '/experience', label: 'experience.md' },
    { id: '/publications', label: 'publications.md' },
    { id: '/projects', label: 'projects.md' },
    { id: '/teaching', label: 'teaching.md' },
  ]

  const handleNavigation = (id: string) => {
    router.push(id)
    setSidebarOpen(false)
  }

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
      <VscodeChrome
        tabs={files.map(f => ({ id: f.id, title: f.label }))}
        active={currentPage}
        onSelect={handleNavigation}
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
        
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'fixed left-0 top-0 bottom-0 w-64 z-50' : 'hidden'} lg:block lg:relative border-r pt-4`} style={{ background: 'var(--sidebar)', borderColor: 'var(--panel)' }}>
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
              active={router.pathname === f.id}
              onClick={() => handleNavigation(f.id)}
            />
          ))}
        </aside>

        {/* Main content */}
        <main className="overflow-y-auto w-full" style={{ background: 'var(--bg-alt)' }}>
          <div className="border-b px-4 py-2 text-xs" style={{ borderColor: 'var(--panel)', color: 'var(--muted)' }}>
            {pageTitle}
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}
