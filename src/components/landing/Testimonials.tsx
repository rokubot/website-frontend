

const Testimonials = () => {
  const testimonials = [
    {
      color: '#ec4899', // pink
      user: 'nicc',
      date: '02/04/2021',
      text: (
        <>
          I'ma be real, I had to remove Eli from my server as it was slowing down, and when trying to find an alternative, I stumbled upon <span className="highlight">Roku</span>, and I actually quite fancy it, the features are cool, especially the customization, and it has a ton of potential.
        </>
      )
    },
    {
      color: '#f59e0b', // yellow
      user: 'food is good',
      date: 'Today at 9:30 AM',
      text: (
        <>
          Tari roku is the best bot ever 😢<br/>
          lmao<br/>
          becauuuuuse she is so useful
        </>
      )
    },
    {
      color: '#6366f1', // indigo
      user: 'Cygnus',
      date: 'Today at 7:55 PM',
      text: (
        <>
          roku is an underrated bot it deserves more attention<br/>
          yayaya<br/>
          i like the bot so far (●'◡'●)<br/>
          has many good features
        </>
      )
    },
    {
      color: '#10b981', // green
      user: 'Nina ﾐ☆',
      date: '02/10/2021',
      text: (
        <>
          Hello, thank you so much!<br/><br/>
          While eli is shutting down/shut down, I'm beginning to use <span className="highlight">Roku</span> for some things in my server 👻
        </>
      )
    }
  ];

  return (
    <section className="testimonials pattern-bg">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2>Loved by the Community</h2>
          <p>Don't just take our word for it. Here is what server owners are saying about switching to Roku.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonials__card" style={{borderLeftColor: t.color}}>
              <div className="testimonials__card-content">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.user}`} 
                  alt="User" 
                  className="testimonials__card-avatar" 
                />
                <div className="testimonials__card-info">
                  <div className="testimonials__card-header">
                    <span className="testimonials__card-name" style={{color: index === 1 ? '#facc15' : index === 2 ? '#f472b6' : 'white'}}>{t.user}</span>
                    <span className="testimonials__card-date">{t.date}</span>
                  </div>
                  <p className="testimonials__card-text">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
