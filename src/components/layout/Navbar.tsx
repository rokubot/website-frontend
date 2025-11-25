
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [theme, setTheme] = useState('dark');

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
          <span>Roku</span>
        </div>

        <div className="navbar__links">
          <a href="#" className="active">
            <i className="fas fa-home"></i> Home
          </a>
          <a href="#">
            <i className="fas fa-terminal"></i> Commands
          </a>
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
