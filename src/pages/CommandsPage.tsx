import { useState, useEffect, useMemo, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Command {
  name: string;
  aliases: string[];
  description: string;
  usage: string;
}

interface Category {
  name: string;
  emoji: string;
  description: string;
  commands: Command[];
}

interface CommandsResponse {
  categories: Category[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const API_BASE = import.meta.env.VITE_BOT_BASE as string;

/** Deduplicate categories by name (API returns each category twice). */
function deduplicateCategories(categories: Category[]): Category[] {
  const seen = new Set<string>();
  return categories.filter((cat) => {
    if (seen.has(cat.name)) return false;
    seen.add(cat.name);
    return true;
  });
}

/** Convert newlines + markdown bold to HTML for description rendering. */
function formatDescription(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\n/g, '<br/>');
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function CommandsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedCmd, setExpandedCmd] = useState<string | null>(null);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const searchInputRef = useRef<HTMLInputElement>(null);


  // ── Fetch ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    fetch(`${API_BASE}/commands`, {
      headers: {
        'Authorization': import.meta.env.VITE_CLUSTER_SECRET as string
      }
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Failed to fetch commands');
        const data: CommandsResponse = await res.json();
        const deduped = deduplicateCategories(data.categories);
        setCategories(deduped);
        if (deduped.length > 0) setActiveCategory(deduped[0].name);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // ── Filter ─────────────────────────────────────────────────────────────────
  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const q = search.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        commands: cat.commands.filter(
          (cmd) =>
            cmd.name.toLowerCase().includes(q) ||
            cmd.description.toLowerCase().includes(q) ||
            cmd.aliases.some((a) => a.toLowerCase().includes(q)) ||
            cmd.usage.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.commands.length > 0);
  }, [categories, search]);

  const totalCommands = useMemo(
    () => categories.reduce((acc, c) => acc + c.commands.length, 0),
    [categories]
  );

  const filteredTotal = useMemo(
    () => filteredCategories.reduce((acc, c) => acc + c.commands.length, 0),
    [filteredCategories]
  );

  // ── Scroll spy ────────────────────────────────────────────────────────────
  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    const el = sectionRefs.current[name];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ── Keyboard shortcut: Ctrl+K / Cmd+K to focus search ────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="commands-page">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="commands-page__hero">
        <div className="commands-page__hero-bg-glow" />
        <div className="commands-page__hero-bg-glow commands-page__hero-bg-glow--right" />
        <div className="commands-page__hero-content">
          <div className="commands-page__hero-badge">
            <i className="fas fa-terminal" />
            Command Reference
          </div>
          <h1 className="commands-page__hero-title">
            Everything Roku can do
          </h1>
          <p className="commands-page__hero-subtitle">
            Browse{' '}
            {loading ? '…' : <strong>{totalCommands}</strong>}{' '}
            commands across{' '}
            {loading ? '…' : <strong>{categories.length}</strong>}{' '}
            categories. Use the search or sidebar to jump to what you need.
          </p>

          {/* Search */}
          <div className="commands-page__search-wrap">
            <i className="fas fa-search commands-page__search-icon" />
            <input
              ref={searchInputRef}
              id="commands-search"
              type="text"
              placeholder="Search commands, aliases, descriptions…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="commands-page__search-input"
              autoComplete="off"
            />
            <span className="commands-page__search-kbd">
              <kbd>Ctrl</kbd><kbd>K</kbd>
            </span>
            {search && (
              <button
                className="commands-page__search-clear"
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                <i className="fas fa-times" />
              </button>
            )}
          </div>

          {search && (
            <p className="commands-page__search-results-meta">
              {filteredTotal === 0
                ? 'No commands matched your search.'
                : `Showing ${filteredTotal} command${filteredTotal !== 1 ? 's' : ''} across ${filteredCategories.length} categor${filteredCategories.length !== 1 ? 'ies' : 'y'}`}
            </p>
          )}
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <div className="commands-page__body">
        {loading && (
          <div className="commands-page__state">
            <div className="commands-page__state-spinner">
              <i className="fas fa-circle-notch" />
            </div>
            <p className="commands-page__state-title">Loading commands…</p>
            <p className="commands-page__state-sub">Fetching from the API</p>
          </div>
        )}

        {error && (
          <div className="commands-page__state">
            <div className="commands-page__state-icon commands-page__state-icon--error">
              <i className="fas fa-exclamation-triangle" />
            </div>
            <p className="commands-page__state-title">Failed to load commands</p>
            <p className="commands-page__state-sub">Make sure the API is reachable and try again.</p>
            <button
              className="commands-page__retry-btn"
              onClick={() => window.location.reload()}
            >
              <i className="fas fa-redo" /> Retry
            </button>
          </div>
        )}

        {!loading && !error && filteredCategories.length === 0 && (
          <div className="commands-page__state">
            <div className="commands-page__state-icon">
              <i className="fas fa-ghost" />
            </div>
            <p className="commands-page__state-title">No commands found</p>
            <p className="commands-page__state-sub">Try a different search term.</p>
          </div>
        )}

        {!loading && !error && filteredCategories.length > 0 && (
          <div className="commands-page__layout">

            {/* ── Sidebar ─────────────────────────────────────────────────── */}
            <aside className="commands-page__sidebar">
              <div className="commands-page__sidebar-inner">
                <p className="commands-page__sidebar-label">Categories</p>
                <nav className="commands-page__sidebar-nav">
                  {filteredCategories.map((cat) => (
                    <button
                      key={cat.name}
                      className={`commands-page__sidebar-item${activeCategory === cat.name ? ' active' : ''}`}
                      onClick={() => handleCategoryClick(cat.name)}
                    >
                      <span className="commands-page__sidebar-emoji">{cat.emoji}</span>
                      <span className="commands-page__sidebar-name">{cat.name}</span>
                      <span className="commands-page__sidebar-count">{cat.commands.length}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* ── Content ─────────────────────────────────────────────────── */}
            <main className="commands-page__content">
              {filteredCategories.map((cat) => (
                <section
                  key={cat.name}
                  id={`cat-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="commands-page__category"
                  ref={(el) => { sectionRefs.current[cat.name] = el; }}
                >
                  {/* Category header */}
                  <div className="commands-page__cat-header">
                    <div className="commands-page__cat-emoji-wrap">
                      <span className="commands-page__cat-emoji">{cat.emoji}</span>
                    </div>
                    <div>
                      <h2 className="commands-page__cat-name">{cat.name}</h2>
                      <p className="commands-page__cat-desc">{cat.description}</p>
                    </div>
                    <span className="commands-page__cat-badge">
                      {cat.commands.length} commands
                    </span>
                  </div>

                  {/* Command cards */}
                  <div className="commands-page__cmd-grid">
                    {cat.commands.map((cmd) => {
                      const uid = `${cat.name}::${cmd.name}`;
                      const isOpen = expandedCmd === uid;
                      return (
                        <div
                          key={uid}
                          className={`commands-page__cmd-card${isOpen ? ' expanded' : ''}`}
                          onClick={() => setExpandedCmd(isOpen ? null : uid)}
                        >
                          <div className="commands-page__cmd-top">
                            <div className="commands-page__cmd-meta">
                              <span className="commands-page__cmd-name">
                                <i className="fas fa-chevron-right commands-page__cmd-chevron" />
                                ro {cmd.name}
                              </span>
                              {cmd.aliases.length > 0 && (
                                <div className="commands-page__cmd-aliases">
                                  {cmd.aliases.slice(0, 4).map((a) => (
                                    <span key={a} className="commands-page__cmd-alias">{a}</span>
                                  ))}
                                  {cmd.aliases.length > 4 && (
                                    <span className="commands-page__cmd-alias commands-page__cmd-alias--more">
                                      +{cmd.aliases.length - 4}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                            <span className="commands-page__cmd-usage">
                              <i className="fas fa-terminal" /> {cmd.usage}
                            </span>
                          </div>

                          {/* Collapsed preview */}
                          {!isOpen && (
                            <p className="commands-page__cmd-preview">
                              {cmd.description.split('\n')[0]}
                            </p>
                          )}

                          {/* Expanded full description */}
                          {isOpen && (
                            <div
                              className="commands-page__cmd-desc"
                              dangerouslySetInnerHTML={{ __html: formatDescription(cmd.description) }}
                            />
                          )}

                          <div className="commands-page__cmd-footer">
                            <span className="commands-page__cmd-expand-hint">
                              {isOpen ? (
                                <><i className="fas fa-chevron-up" /> Collapse</>
                              ) : (
                                <><i className="fas fa-chevron-down" /> Expand</>
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </main>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
