import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

interface PolicySection {
  id: string;
  title: string;
  icon: string;
  content: React.ReactNode;
}

const sections: PolicySection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: 'fas fa-shield-alt',
    content: (
      <>
        <p>
          This Privacy Policy explains how we collect and use your information when you use our
          Service, including the Roku Discord bot and this website. It also explains your
          privacy rights and how the law protects you.
        </p>
        <p>
          We use your personal data only to provide and improve the Service. By using the Service,
          you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'data-collected',
    title: 'Collecting and Using Your Personal Data',
    icon: 'fas fa-database',
    content: (
      <>
        <h3>Types of Data Collected</h3>

        <h4>Bot Data</h4>
        <p>
          When you interact with Roku in a Discord server, the following data may be stored:
        </p>
        <ul className="data-list">
          <li>
            <i className="fas fa-id-badge" />
            <div>
              <strong>User ID</strong>
              <span>
                Your Discord User ID is stored to associate your preferences and configurations
                with you across servers.
              </span>
            </div>
          </li>
          <li>
            <i className="fas fa-server" />
            <div>
              <strong>Guild (Server) ID</strong>
              <span>
                The Discord Server ID is stored to manage per-server settings such as welcome
                messages, moderation rules, and other bot preferences.
              </span>
            </div>
          </li>
          <li>
            <i className="fas fa-terminal" />
            <div>
              <strong>Command Arguments</strong>
              <span>
                Certain command inputs are saved as part of your configuration. For example,{' '}
                <code>/welcomemessage Hello!</code> saves that message so Roku can use it whenever
                a new member joins. Only the arguments needed for the feature are stored.
              </span>
            </div>
          </li>
        </ul>

        <div className="policy-callout policy-callout--info">
          <i className="fas fa-info-circle" />
          <p>
            Roku does <strong>not</strong> store message content, voice activity, or server member
            lists. Some features temporarily process member or message data as described below.
            When logging is enabled, Roku can post relevant event details to a channel chosen by the
            server admins. Those posts are part of the server&apos;s Discord history, not data
            stored by Roku.
          </p>
        </div>

        <h4>Member &amp; Message Data</h4>
        <div className="notice-card notice-card--blue">
          <i className="fas fa-users" />
          <div>
            <strong>Member data is not stored</strong>
            <p>
              Roku uses the <strong>Server Members Intent</strong> to process join and leave events
              for <code>welcome</code> and <code>goodbye</code> messages, and for logging when
              enabled by server admins. This data is processed to provide those features and is
              not stored by Roku. Admins configure these features and the logging channel. To opt
              out, contact the server admins or leave the server.
            </p>
          </div>
        </div>
        <div className="notice-card notice-card--green">
          <i className="fas fa-comments" />
          <div>
            <strong>Message data is not stored</strong>
            <p>
              Roku uses the <strong>Message Content Intent</strong> only for logging features
              enabled by server admins. When enabled, Roku temporarily processes relevant message
              data for events such as message deletion or edits, then posts the details to the
              logging channel configured by the admins. Roku does not store this data in its own
              database. Log posts may remain in the server&apos;s Discord history. Admins control
              whether logging is enabled and where logs are sent. To opt out, contact the server
              admins or leave the server.
            </p>
          </div>
        </div>

        <h4>Presence &amp; Spotify Data</h4>
        <div className="notice-card notice-card--blue">
          <i className="fas fa-user-clock" />
          <div>
            <strong>Presence data is temporary</strong>
            <p>
              Commands such as <code>remindonline</code> require Roku to temporarily monitor a
              user&apos;s online status. We keep this data only while the task is running. As soon
              as Roku completes the action, it is deleted from memory and is never written to a
              database.
            </p>
          </div>
        </div>
        <div className="notice-card notice-card--green">
          <i className="fab fa-spotify" />
          <div>
            <strong>Spotify data is never stored</strong>
            <p>
              The <code>spotify</code> command reads your current Spotify activity directly from
              Discord&apos;s presence API at the moment you run it. This data is fetched
              on-demand only and is <em>never</em> saved to any database or persistent storage.
            </p>
          </div>
        </div>

        <h4>Website &amp; Discord OAuth2 Data</h4>
        <p>
          This website uses <strong>Discord OAuth2</strong> to authenticate users. When you log in,
          Discord provides us with:
        </p>
        <ul className="data-list">
          <li>
            <i className="fas fa-id-card" />
            <div>
              <strong>Discord Username &amp; Avatar</strong>
              <span>
                Displayed in the website UI to identify your session. Not stored on our servers
                beyond your active session.
              </span>
            </div>
          </li>
          <li>
            <i className="fas fa-id-badge" />
            <div>
              <strong>Discord User ID</strong>
              <span>
                Used to verify your identity and match you with any existing bot configurations
                or beta access records.
              </span>
            </div>
          </li>
          <li>
            <i className="fas fa-server" />
            <div>
              <strong>Server List (Guilds)</strong>
              <span>
                When required (e.g. the Beta Testing page), we request your server list so you can
                select which server to enrol. This list is fetched in real-time and is{' '}
                <em>not</em> stored on our servers.
              </span>
            </div>
          </li>
        </ul>
        <div className="policy-callout policy-callout--info">
          <i className="fas fa-info-circle" />
          <p>
            The website requests only the Discord OAuth2 scopes needed for the feature in use. It
            does <strong>not</strong> request access to read your messages or join servers on your
            behalf. The bot&apos;s privileged intents are separate and are used only for the
            features described above.
          </p>
        </div>

        <h4>Usage Data</h4>
        <p>Usage Data is collected automatically when using the Service.</p>
        <p>
          Usage Data may include information such as your device&apos;s Internet Protocol address
          (e.g. IP address), browser type, browser version, the pages of our Service that you
          visit, the time and date of your visit, the time spent on those pages, unique device
          identifiers and other diagnostic data.
        </p>
        <p>
          When you access the Service through a mobile device, we may collect certain information
          automatically, including the type of mobile device you use, your mobile device unique ID,
          the IP address of your mobile device, your mobile operating system, the type of mobile
          Internet browser you use, and unique device identifiers.
        </p>

        <h4>Tracking Technologies and Cookies</h4>
        <p>
          We use Cookies and similar tracking technologies to track activity on our Service and
          store certain information. Technologies used include beacons, tags, and scripts to collect
          and track information and to improve and analyse our Service.
        </p>
        <ul>
          <li>
            <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on your
            device. You can instruct your browser to refuse all Cookies or indicate when a Cookie
            is being sent. If you do not accept Cookies, some parts of our Service may not function.
          </li>
          <li>
            <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain
            small electronic files known as web beacons that permit us to count users who have
            visited those pages or opened an email and for other related website statistics.
          </li>
        </ul>
        <p>
          Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. We use both for
          the following purposes:
        </p>
        <ul className="cookie-list">
          <li>
            <strong>Necessary / Essential Cookies</strong>
            <span className="cookie-meta">Type: Session Cookies &bull; Administered by: Us</span>
            <p>
              Essential to provide services available through the Website and to enable you to use
              its features. They help authenticate users and prevent fraudulent use of accounts.
            </p>
          </li>
          <li>
            <strong>Cookies Policy / Notice Acceptance Cookies</strong>
            <span className="cookie-meta">Type: Persistent Cookies &bull; Administered by: Us</span>
            <p>These Cookies identify if users have accepted the use of cookies on the Website.</p>
          </li>
          <li>
            <strong>Functionality Cookies</strong>
            <span className="cookie-meta">Type: Persistent Cookies &bull; Administered by: Us</span>
            <p>
              Allow us to remember choices you make when you use the Website, such as remembering
              your login details or language preference.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'use-of-data',
    title: 'Use of Your Personal Data',
    icon: 'fas fa-cogs',
    content: (
      <>
        <p>The Company may use Personal Data for the following purposes:</p>
        <ul>
          <li>
            <strong>To provide and maintain our Service,</strong> including the Roku bot features
            and this website, and to monitor usage.
          </li>
          <li>
            <strong>To manage your Account:</strong> to manage your registration as a user of the
            Service and give you access to its functionalities.
          </li>
          <li>
            <strong>For the performance of a contract:</strong> the development, compliance and
            undertaking of a purchase contract or any other contract with us through the Service.
          </li>
          <li>
            <strong>To contact you</strong> via email or equivalent electronic communication
            regarding updates, security notices, or informative communications related to the
            Service.
          </li>
          <li>
            <strong>To manage your requests:</strong> to attend and manage your requests to us.
          </li>
          <li>
            <strong>For other purposes</strong> such as data analysis, identifying usage trends,
            and evaluating the effectiveness of our Service.
          </li>
        </ul>
        <p>
          We do not sell or rent your personal data, or share it with third parties for their own
          purposes. Our Service is hosted on a virtual private server (VPS) provided by Microsoft
          Azure. Data stored by the Service is hosted on Azure infrastructure so we can operate the
          bot and website.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Retention of Your Personal Data',
    icon: 'fas fa-clock',
    content: (
      <>
        <p>
          We keep your personal data only for as long as needed for the purposes described in this
          Privacy Policy, including meeting legal obligations, resolving disputes, and enforcing
          our agreements and policies.
        </p>
        <p>
          Specifically for Roku&apos;s bot data: configuration data (User ID, Guild ID, command
          arguments) is retained until you or a server administrator removes the configuration, or
          until Roku is removed from the server. Temporary data such as presence tracking is deleted
          immediately after the triggering command completes.
        </p>
        <p>
          Usage Data is generally retained for a shorter period, except when used to strengthen
          security, improve functionality, or when we are legally obligated to retain it longer.
        </p>
      </>
    ),
  },
  {
    id: 'disclosure',
    title: 'Legal Disclosures',
    icon: 'fas fa-gavel',
    content: (
      <>
        <p>
          Apart from hosting on Microsoft Azure infrastructure as described above, we do not
          disclose your personal data. We may disclose it if we are legally required to do so, such
          as in response to a valid court order.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security of Your Personal Data',
    icon: 'fas fa-lock',
    content: (
      <p>
        Your personal data matters to us. We use reasonable safeguards, such as access controls and
        encryption where appropriate, to protect it. However, no method of sending or storing data
        online is completely secure, so we cannot guarantee absolute security. If you find a
        security issue, please report it through our Discord support server.
      </p>
    ),
  },
  {
    id: 'children',
    title: "Children's Privacy",
    icon: 'fas fa-child',
    content: (
      <>
        <p>
          Our Service does not address anyone under the age of 13. We do not knowingly collect
          personally identifiable information from anyone under 13. If you are a parent or guardian
          and believe your child has provided us with Personal Data, please contact us. If we
          become aware we have collected such data without verification of parental consent, we will
          take steps to remove it from our servers.
        </p>
        <p>
          If we need to rely on consent as a legal basis for processing your information and your
          country requires consent from a parent, we may require your parent&apos;s consent before
          we collect and use that information.
        </p>
      </>
    ),
  },
  {
    id: 'links',
    title: 'Links to Other Websites',
    icon: 'fas fa-external-link-alt',
    content: (
      <>
        <p>
          Our Service may link to websites we do not operate, including Discord, Spotify, and other
          third-party services. If you follow one of these links, you will be taken to that
          website. We recommend reviewing the Privacy Policy of every site you visit.
        </p>
        <p>
          We have no control over and assume no responsibility for the content, privacy policies or
          practices of any third-party sites or services.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Privacy Policy',
    icon: 'fas fa-file-alt',
    content: (
      <>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date
          at the top. We will also announce changes in our Discord support server.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically. Changes are effective when
          posted on this page.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Us',
    icon: 'fas fa-envelope',
    content: (
      <>
        <p>
          If you have any questions, concerns, or data deletion requests regarding this Privacy
          Policy, please reach out:
        </p>
        <ul className="data-list">
          <li>
            <i className="fab fa-discord" />
            <div>
              <strong>Discord Support Server</strong>
              <span>
                The fastest way to reach us.{' '}
                <a href="https://discord.gg/pkn6TzW" target="_blank" rel="noopener noreferrer">
                  Join our server ↗
                </a>
              </span>
            </div>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PolicyPage() {
  return (
    <div className="policy-page">
      <Navbar />

      <main className="policy-main">
        {/* Hero */}
        <div className="policy-hero">
          <div className="policy-hero__inner">
            <div className="policy-hero__badge">
              <i className="fas fa-shield-alt" />
              Privacy Policy
            </div>
            <h1 className="policy-hero__title">Your Privacy Matters</h1>
            <p className="policy-hero__meta">
              <i className="fas fa-calendar-alt" /> Last updated: Oct 29, 2026
            </p>
            <p className="policy-hero__desc">
              Roku is a Discord bot. We collect only the minimum data needed to make the bot work.
              Here&apos;s exactly what we store, why, and how.
            </p>
            <div className="policy-hero__pills">
              <span><i className="fas fa-check" /> No ads</span>
              <span><i className="fas fa-check" /> No data selling</span>
              <span><i className="fas fa-check" /> Minimal collection</span>
              <span><i className="fas fa-check" /> Discord OAuth only</span>
            </div>
          </div>
        </div>

        <div className="policy-body">
          {/* Sidebar TOC */}
          <aside className="policy-toc">
            <p className="policy-toc__heading">On this page</p>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    <i className={s.icon} />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <article className="policy-content">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="policy-section">
                <h2><i className={s.icon} />{s.title}</h2>
                {s.content}
              </section>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
