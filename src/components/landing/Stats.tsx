

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__item">
        <span className="stats__value">8K+</span>
        <span className="stats__label">Servers</span>
      </div>
      <div className="stats__item">
        <span className="stats__value">260K+</span>
        <span className="stats__label">Users</span>
      </div>
      <div className="stats__item">
        <span className="stats__value">71+</span>
        <span className="stats__label">Commands</span>
      </div>
      <div className="stats__item">
        <span className="stats__value stats__value--green">99.99%</span>
        <span className="stats__label">Uptime</span>
      </div>
    </div>
  );
};

export default Stats;
