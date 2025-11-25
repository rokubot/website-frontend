import Stats from './Stats.tsx';
import avatarImage from '../../assets/avatar.png';

const Hero = () => {
  return (
    <header className="hero">
      <h1 className="hero__title">Roku Bot</h1>

      <div className="hero__avatar">
        <img src={avatarImage} alt="Roku Avatar" />
      </div>

      <p className="hero__description">
        A Multipurpose Discord Bot that keeps your server safe, entertained, and active.
      </p>

      <Stats />

      <div className="hero__buttons">
        <a href="#" className="hero__btn hero__btn--primary">
          Invite Roku to Server
        </a>
        <a href="https://discord.gg/pkn6TzW" className="hero__btn hero__btn--secondary">
          Join the Community
        </a>
      </div>
    </header>
  );
};

export default Hero;
