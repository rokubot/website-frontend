



const Features = () => {
  const features = [
    {
      icon: 'fas fa-gavel',
      color: 'pink',
      title: 'Moderation',
      desc: 'Powerful actions for moderation. Includes mass cleaning messages, temporary bans, and advanced logging.'
    },
    {
      icon: 'fas fa-robot',
      color: 'blue',
      title: 'Automation',
      desc: 'Automatically assign roles on join, send welcome messages, and handle custom server booster notifications.'
    },
    {
      icon: 'fas fa-fingerprint',
      color: 'yellow',
      title: 'Reaction Roles',
      desc: 'Let users pick their own roles (colors, interests, hobbies) simply by clicking an emoji reaction.'
    },
    {
      icon: 'fas fa-cog',
      color: 'purple',
      title: 'Settings',
      desc: 'Fully customize Roku for your server with over 40 configurable settings to match your community needs.'
    },
    {
      icon: 'fas fa-toolbox',
      color: 'green',
      title: 'Utility',
      desc: 'Useful commands like creating fancy embeds, finding user info, or managing server assets.'
    },
    {
      icon: 'fas fa-arrow-up',
      color: 'cyan',
      title: 'Leveling',
      desc: 'Reward activity with XP and levels. Unlock special roles as users climb the leaderboard.'
    },
    {
      icon: 'fas fa-chart-bar',
      color: 'indigo',
      title: 'Statistics',
      desc: 'Create visible counters for members or channels. Get deep insights into your server\'s growth.'
    },
    {
      icon: 'fas fa-gift',
      color: 'red',
      title: 'Giveaways',
      desc: 'Create beautiful giveaways with requirements, multipliers, and automated winner picking.'
    },
    {
      icon: 'fas fa-clock',
      color: 'orange',
      title: 'Reminders',
      desc: 'Set personal or server-wide reminders. Great for game nights or meeting announcements.'
    },
    {
      icon: 'fas fa-star',
      color: 'yellow',
      title: 'Starboard',
      desc: 'Highlight the funniest or best messages in your server by letting users vote with stars.'
    },
    {
      icon: 'fas fa-search',
      color: 'blue',
      title: 'Search',
      desc: 'Search for anime, definitions, or songs directly from Discord without opening a browser.'
    },
    {
      icon: 'fas fa-film',
      color: 'pink',
      title: 'Gifs',
      desc: 'Roleplay commands! Hug, cry, slap, or poke your friends with a massive library of reaction GIFs.'
    }
  ];

  return (
    <section className="features pattern-bg">
      <div className="features__container">
        
        {/* Highlight Section */}
        <div className="features__highlight">
          <div className="features__highlight-visual">
            <div className="mock-chat">
              <div className="mock-chat__message">
                <div className="mock-chat__avatar mock-chat__avatar--blue"></div>
                <div className="mock-chat__content">
                  <div className="mock-chat__header">
                    <span className="mock-chat__username">Tari</span>
                    <span className="mock-chat__timestamp">Today at 6:39 PM</span>
                  </div>
                  <p className="mock-chat__text">roku warn <span style={{backgroundColor: '#4f545c4d', color: '#7289da', padding: '0 4px', borderRadius: '4px'}}>@Spammer</span> spamming chat</p>
                </div>
              </div>

              <div className="mock-chat__message">
                <div className="mock-chat__avatar mock-chat__avatar--pink">R</div>
                <div className="mock-chat__content">
                  <div className="mock-chat__header">
                    <span className="mock-chat__username">Roku</span>
                    <span className="mock-chat__bot-tag">Bot</span>
                    <span className="mock-chat__timestamp">Today at 6:39 PM</span>
                  </div>
                  <p className="mock-chat__text">Tari has warned <strong>Spammer#0836</strong> in the server</p>
                  <p className="mock-chat__text" style={{borderLeft: '2px solid #ef4444', paddingLeft: '8px', marginTop: '4px', fontSize: '0.875rem', color: '#9ca3af'}}>Reason: "spamming chat"</p>
                </div>
              </div>

              <div className="mock-chat__message">
                <div className="mock-chat__avatar mock-chat__avatar--blue"></div>
                <div className="mock-chat__content">
                  <div className="mock-chat__header">
                    <span className="mock-chat__username">Tari</span>
                    <span className="mock-chat__timestamp">Today at 6:39 PM</span>
                  </div>
                  <p className="mock-chat__text">roku purge <span style={{backgroundColor: '#4f545c4d', color: '#7289da', padding: '0 4px', borderRadius: '4px'}}>@Spammer</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="features__highlight-content">
            <h2>Moderation</h2>
            <p>
              Roku has simple yet powerful moderation commands to keep your server in check while not giving your staff too much power.
            </p>
            <p>
              With the proper setup, you can see all executed moderation commands and force your staff to moderate through Roku instead of default Discord perms. This allows you to easily spot abuse.
            </p>
            <div className="info-box">
              <p>
                <i className="fas fa-info-circle" style={{color: '#60a5fa'}}></i>
                Features range from kicking and warning to mass deleting spam and temporarily muting/banning members.
              </p>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="features__grid-header">
          <h2>All Sections</h2>
          <p>
            Roku has way more than that! Click any of the sections below to see all commands on the <a href="#">Commands Page</a>.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="features__card" style={{borderColor: `var(--color-${feature.color}, #374151)`}}>
              <div className="features__card-icon" style={{backgroundColor: `color-mix(in srgb, var(--color-${feature.color}), transparent 90%)`, color: `var(--color-${feature.color})`}}>
                <i className={feature.icon as string}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Features;
