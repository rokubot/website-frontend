
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <Link to="/"><span>Roku</span></Link>
        </div>

        <div className="navbar__links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/commands" className={location.pathname === '/commands' ? 'active' : ''}>
            <i className="fas fa-terminal"></i> Commands
          </Link>
          <a href="https://status.rokubot.com">
            <i className="fas fa-check-circle"></i> Status
          </a>
          <a href="https://discord.gg/pkn6TzW">
            <i className="fab fa-discord"></i> Community
          </a>
        </div>

        <div className="navbar__actions">
          <div className="navbar__theme-toggle" onClick={toggleTheme}>
            <div className={`navbar__theme-toggle-icon ${theme === 'light' ? 'light' : ''}`}>
              {theme === 'dark' ? '🌙' : '☀️'}
            </div>
          </div>
          <a href="#" className="navbar__invite-btn">
            <i className="fas fa-plus"></i> Invite Roku
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
