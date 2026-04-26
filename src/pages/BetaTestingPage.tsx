import React, { useState, useEffect, useRef, useMemo } from 'react';

interface DiscordUser {
  id: string;
  username: string;
  global_name?: string;
  avatar: string | null;
}

interface Server {
  id: string;
  name: string;
  icon: string | null;
}

const API_BASE = import.meta.env.VITE_API_BASE as string;


// Discord CDN helpers
function userAvatarUrl(user: DiscordUser): string {
  if (user.avatar) {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`;
  }
  // Default Discord avatar
  return `https://cdn.discordapp.com/embed/avatars/${Number(user.id) % 5}.png`;
}

function guildIconUrl(server: Server): string {
  if (server.icon) {
    const ext = server.icon.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.${ext}?size=64`;
  }
  return `https://api.dicebear.com/7.x/identicon/svg?seed=${server.id}`;
}

type AuthState = 'loading' | 'unauthenticated' | 'authenticated';

export default function BetaTestingPage() {
  // ── Auth ──────────────────────────────────────────────────────────────────
  const [authState, setAuthState] = useState<AuthState>('loading');
  const [currentUser, setCurrentUser] = useState<DiscordUser | null>(null);

  // ── Form state ────────────────────────────────────────────────────────────
  const [isWilling, setIsWilling] = useState<boolean | null>(null);

  const [servers, setServers] = useState<Server[]>([]);
  const [loadingServers, setLoadingServers] = useState(false);
  const [serversFetched, setServersFetched] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string>('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // ── On mount: check if user is logged in ──────────────────────────────────
  useEffect(() => {
    fetch(`${API_BASE}/auth/me`, { credentials: 'include' })
      .then(async (res) => {
        if (res.status === 401) {
          setAuthState('unauthenticated');
          return;
        }
        if (!res.ok) throw new Error('Auth check failed');
        const user: DiscordUser = await res.json();
        setCurrentUser(user);
        setAuthState('authenticated');
      })
      .catch(() => setAuthState('unauthenticated'));
  }, []);

  // ── Close dropdown on outside click ──────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ── Focus search when dropdown opens ─────────────────────────────────────
  useEffect(() => {
    if (isDropdownOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isDropdownOpen]);

  // ── Fetch guilds from backend (uses session access_token server-side) ─────
  const fetchServers = async () => {
    if (serversFetched || loadingServers) return;
    setLoadingServers(true);
    setFetchError(false);
    try {
      const res = await fetch(`${API_BASE}/servers/managed`, { credentials: 'include' });
      if (!res.ok) throw new Error('Failed to fetch guilds');
      const data: Server[] = await res.json();
      setServers(data);
      setServersFetched(true);
    } catch (err) {
      console.error('Failed to fetch servers:', err);
      setFetchError(true);
    } finally {
      setLoadingServers(false);
    }
  };

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
    fetchServers();
  };

  // ── Filter servers – show ALL results (no cap) ────────────────────────────
  const filteredServers = useMemo(() => {
    if (!searchQuery.trim()) return servers;
    const lowerQuery = searchQuery.toLowerCase();
    return servers.filter(
      (s) =>
        s.name.toLowerCase().includes(lowerQuery) ||
        s.id.toLowerCase().includes(lowerQuery)
    );
  }, [servers, searchQuery]);

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Only enroll if they said YES — no-op on NO
    if (isWilling !== true || !selectedServer) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitError('');
    try {
      const res = await fetch(`${API_BASE}/beta/enroll`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          server_id: selectedServer.id,
        }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? 'Server error');
      }
      setSubmitStatus('success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      console.error('Submit failed:', message);
      setSubmitError(message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render helpers ────────────────────────────────────────────────────────
  const displayName = currentUser
    ? currentUser.global_name ?? currentUser.username
    : '';

  return (
    <div className="beta-page">
      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav className="beta-page__nav">
        <div className="beta-page__nav-inner">
          <div className="beta-page__brand">
            Roku
            <span className="beta-page__brand-badge">BETA</span>
          </div>
          {authState === 'authenticated' && currentUser && (
            <div className="beta-page__nav-user">
              <img
                src={userAvatarUrl(currentUser)}
                alt={displayName}
              />
              <span>{displayName}</span>
            </div>
          )}
        </div>
      </nav>

      {/* ── Main ───────────────────────────────────────────────────────────── */}
      <main className="beta-page__main">
        <div className="beta-page__bg-pattern" />
        <div className="beta-page__bg-glow" />
        <div className="beta-page__bg-glow beta-page__bg-glow--right" />

        {/* ─ Auth Loading ──────────────────────────────────────────────────── */}
        {authState === 'loading' && (
          <div className="beta-page__auth-loading">
            <i className="fas fa-circle-notch fa-spin" />
            <span>Checking authentication…</span>
          </div>
        )}

        {/* ─ Login Gate ────────────────────────────────────────────────────── */}
        {authState === 'unauthenticated' && (
          <div className="beta-page__login-card">
            <div className="beta-page__login-icon">
              <i className="fab fa-discord" />
            </div>
            <h1 className="beta-page__login-title">Sign in to continue</h1>
            <p className="beta-page__login-sub">
              You need to connect your Discord account so we can see which servers you manage.
            </p>
            <a
              href={`${API_BASE}/auth/login?return_to=/beta`}
              className="beta-page__login-btn"
            >
              <i className="fab fa-discord" />
              Login with Discord
            </a>
            <p className="beta-page__login-note">
              We only request <strong>read</strong> access to your account and server list.
            </p>
          </div>
        )}

        {/* ─ The actual form ───────────────────────────────────────────────── */}
        {authState === 'authenticated' && (
          <div className="beta-page__card">
            <div className="beta-page__card-header">
              <h1 className="beta-page__card-title">Beta Tester Program</h1>
              <p className="beta-page__card-subtitle">
                Join our exclusive beta group and help shape upcoming Roku game features by testing them on your server first.
              </p>
            </div>

            <form className="beta-page__form" onSubmit={handleSubmit}>
              {/* ─ Q1: Willing? ──────────────────────────────────────────── */}
              <div>
                <label className="beta-page__field-label">
                  Are you willing to be a beta tester for the game?
                </label>
                <div className="beta-page__yn-group">
                  <button
                    id="beta-yes"
                    type="button"
                    onClick={() => setIsWilling(true)}
                    className={`beta-page__yn-btn beta-page__yn-btn--yes${isWilling === true ? ' active' : ''}`}
                  >
                    <span className="beta-page__yn-icon">
                      <i className="fas fa-check" />
                    </span>
                    YES
                  </button>
                  <button
                    id="beta-no"
                    type="button"
                    onClick={() => setIsWilling(false)}
                    className={`beta-page__yn-btn beta-page__yn-btn--no${isWilling === false ? ' active' : ''}`}
                  >
                    <span className="beta-page__yn-icon">
                      <i className="fas fa-times" />
                    </span>
                    NO
                  </button>
                </div>
              </div>

              {/* ─ Q2: Server ────────────────────────────────────────────── */}
              <div ref={dropdownRef} className="beta-page__dropdown">
                <label className="beta-page__field-label">Select your server</label>

                <div
                  id="beta-server-trigger"
                  role="button"
                  tabIndex={0}
                  onClick={handleDropdownOpen}
                  onKeyDown={(e) => e.key === 'Enter' && handleDropdownOpen()}
                  className={`beta-page__dropdown-trigger${isDropdownOpen ? ' open' : ''}`}
                >
                  {selectedServer ? (
                    <div className="beta-page__dropdown-selected">
                      <img
                        src={guildIconUrl(selectedServer)}
                        alt={selectedServer.name}
                        className="beta-page__selected-icon"
                      />
                      <div className="beta-page__selected-info">
                        <div className="beta-page__selected-name">{selectedServer.name}</div>
                        <div className="beta-page__selected-id">{selectedServer.id}</div>
                      </div>
                    </div>
                  ) : (
                    <div className="beta-page__dropdown-placeholder">
                      <i className="fas fa-server" />
                      <span>Choose a server to enroll…</span>
                    </div>
                  )}
                  <i className={`fas fa-chevron-down beta-page__dropdown-chevron${isDropdownOpen ? ' open' : ''}`} />
                </div>

                {isDropdownOpen && (
                  <div className="beta-page__dropdown-menu">
                    {/* Search */}
                    <div className="beta-page__search-box">
                      <i className="fas fa-search" />
                      <input
                        ref={searchInputRef}
                        id="beta-server-search"
                        type="text"
                        placeholder="Search by name or ID…"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="beta-page__search-input"
                      />
                    </div>

                    {/* List */}
                    <div className="beta-page__server-list">
                      {loadingServers ? (
                        <div className="beta-page__list-state">
                          <i className="fas fa-circle-notch beta-page__spinner" />
                          <span className="beta-page__list-state-title">Loading servers…</span>
                          <span className="beta-page__list-state-sub">Fetching your Discord servers</span>
                        </div>
                      ) : fetchError ? (
                        <div className="beta-page__list-state">
                          <i
                            className="fas fa-exclamation-triangle beta-page__list-state-icon"
                            style={{ color: 'var(--color-red)' }}
                          />
                          <span className="beta-page__list-state-title">Could not load servers</span>
                          <span className="beta-page__list-state-sub">
                            Make sure the API is reachable at localhost:8311
                          </span>
                        </div>
                      ) : filteredServers.length > 0 ? (
                        <ul>
                          {filteredServers.map((server) => (
                            <li
                              key={server.id}
                              className="beta-page__server-item"
                              onClick={() => {
                                setSelectedServer(server);
                                setIsDropdownOpen(false);
                                setSearchQuery('');
                              }}
                            >
                              <img
                                src={guildIconUrl(server)}
                                alt={server.name}
                                className="beta-page__server-icon"
                              />
                              <div className="beta-page__server-info">
                                <div className="beta-page__server-name">{server.name}</div>
                                <div className="beta-page__server-id">{server.id}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="beta-page__list-state">
                          <i className="fas fa-ghost beta-page__list-state-icon" />
                          <span className="beta-page__list-state-title">No servers found</span>
                          <span className="beta-page__list-state-sub">Try a different name or ID</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* ─ Submit ────────────────────────────────────────────────── */}
              <div className="beta-page__submit-area">
                <button
                  id="beta-submit"
                  type="submit"
                  disabled={isSubmitting || isWilling === null || !selectedServer}
                  className="beta-page__submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-circle-notch fa-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" />
                      Submit Application
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="beta-page__status beta-page__status--success">
                    <div className="beta-page__status-icon">
                      <i className="fas fa-check" />
                    </div>
                    <div className="beta-page__status-text">
                      <strong>Application Submitted!</strong>
                      <span>We've received your request to join the beta.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="beta-page__status beta-page__status--error">
                    <div className="beta-page__status-icon">
                      <i className="fas fa-exclamation-triangle" />
                    </div>
                    <div className="beta-page__status-text">
                      <strong>Submission Failed</strong>
                      <span>{submitError || 'Something went wrong. Please try again.'}</span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
