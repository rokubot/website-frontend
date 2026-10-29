

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__brand-name">Roku</span>
            <p className="footer__brand-desc">
              The multipurpose Discord bot that actually listens to its community. Safe, reliable, and cute.
            </p>
            <div className="footer__brand-socials">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-discord"></i></a>
            </div>
          </div>

          <div className="footer__column">
            <h3>Product</h3>
            <ul>
              <li><a href="#">Commands</a></li>
              <li><a href="#">Premium</a></li>
              <li><a href="#">Status Page</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Support Server</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2023 Roku Bot. All rights reserved.</p>
          <p className="footer__bottom-legal">Not affiliated with Discord Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
