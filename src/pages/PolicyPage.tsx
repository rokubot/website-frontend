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
          This Privacy Policy describes our policies and procedures on the collection, use, and
          disclosure of your information when you use the Service — including the Roku Discord bot
          and this website — and tells you about your privacy rights and how the law protects you.
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
            We do <strong>not</strong> store message content, voice activity, server member lists,
            or any data beyond what is explicitly required by a command you invoke.
          </p>
        </div>

        <h4>Presence &amp; Spotify Data</h4>
        <div className="notice-card notice-card--blue">
          <i className="fas fa-user-clock" />
          <div>
            <strong>Presence data is temporary</strong>
            <p>
              Commands such as <code>remindonline</code> require Roku to temporarily monitor a
              user&apos;s online status. Presence data is held <em>only</em> for the duration of
              that task — the moment Roku completes the action, the data is immediately and
              permanently deleted from memory and is never written to a database.
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
            We request only the OAuth2 scopes needed for the feature in use. We do{' '}
            <strong>not</strong> request access to read your messages, join servers on your behalf,
            or perform any actions without your explicit interaction.
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
            <strong>For business transfers:</strong> we may use your information to evaluate or
            conduct a merger, divestiture, restructuring, or other sale or transfer of our assets.
          </li>
          <li>
            <strong>For other purposes</strong> such as data analysis, identifying usage trends,
            and evaluating the effectiveness of our Service.
          </li>
        </ul>
        <p>We may share your personal information in the following situations:</p>
        <ul>
          <li>
            <strong>With Service Providers</strong> to monitor and analyse the use of our Service.
          </li>
          <li>
            <strong>For business transfers</strong> in connection with any merger, sale of Company
            assets, or acquisition.
          </li>
          <li>
            <strong>With Affiliates</strong> who are required to honour this Privacy Policy.
          </li>
          <li>
            <strong>With business partners</strong> to offer you certain products, services or
            promotions.
          </li>
          <li>
            <strong>With your consent</strong> for any other purpose.
          </li>
        </ul>
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
          The Company will retain your Personal Data only for as long as is necessary for the
          purposes set out in this Privacy Policy — to comply with our legal obligations, resolve
          disputes, and enforce our legal agreements and policies.
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
    id: 'transfer',
    title: 'Transfer of Your Personal Data',
    icon: 'fas fa-exchange-alt',
    content: (
      <>
        <p>
          Your information, including Personal Data, is processed at the Company&apos;s operating
          offices and in any other places where the parties involved in the processing are located.
          This means information may be transferred to — and maintained on — computers located
          outside of your state, province, country or other governmental jurisdiction where data
          protection laws may differ.
        </p>
        <p>
          Your consent to this Privacy Policy followed by your submission of such information
          represents your agreement to that transfer. The Company will take all steps reasonably
          necessary to ensure your data is treated securely and in accordance with this Policy.
          No transfer of your Personal Data will take place to an organisation or country unless
          adequate controls are in place.
        </p>
      </>
    ),
  },
  {
    id: 'disclosure',
    title: 'Disclosure of Your Personal Data',
    icon: 'fas fa-gavel',
    content: (
      <>
        <h3>Business Transactions</h3>
        <p>
          If the Company is involved in a merger, acquisition or asset sale, your Personal Data may
          be transferred. We will provide notice before your data becomes subject to a different
          Privacy Policy.
        </p>
        <h3>Law Enforcement</h3>
        <p>
          Under certain circumstances, the Company may be required to disclose your Personal Data
          if required to do so by law or in response to valid requests by public authorities (e.g.
          a court or a government agency).
        </p>
        <h3>Other Legal Requirements</h3>
        <p>
          The Company may disclose your Personal Data in the good faith belief that such action is
          necessary to:
        </p>
        <ul>
          <li>Comply with a legal obligation</li>
          <li>Protect and defend the rights or property of the Company</li>
          <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
          <li>Protect the personal safety of Users of the Service or the public</li>
          <li>Protect against legal liability</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security of Your Personal Data',
    icon: 'fas fa-lock',
    content: (
      <p>
        The security of your Personal Data is important to us. While we strive to use commercially
        acceptable means to protect your data — including access controls and encryption where
        applicable — no method of transmission over the Internet or method of electronic storage is
        100% secure, and we cannot guarantee its absolute security. If you discover a security
        issue, please report it through our Discord support server.
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
          Our Service may contain links to other websites not operated by us — including Discord,
          Spotify, and other third-party services. If you click a third-party link, you will be
          directed to that site. We strongly advise you to review the Privacy Policy of every site
          you visit.
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
              <i className="fas fa-calendar-alt" /> Last updated: May 13, 2023
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
