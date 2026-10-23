import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, BriefcaseBusiness, Code2, Github, Linkedin, Menu, MoveUpRight, Network, ShieldCheck, Sparkles, X } from 'lucide-react';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const navItems = [
    ['Impact', '#impact'],
    ['Ventures', '#ventures'],
    ['Experience', '#experience'],
    ['Work', '#work'],
    ['About', '#about'],
  ];
  const metrics = [
    { value: '220K+', label: 'community members', note: 'grown at Tapbit' },
    { value: '$5M+', label: 'listing revenue', note: 'strategic partnerships' },
    { value: '50+', label: 'strategic partnerships', note: 'at AscendEX' },
    { value: '95%+', label: 'customer satisfaction', note: 'during Hotbit crisis' },
  ];
  const projects = [
    { name: 'Copx AI', category: 'AI · Trading systems', description: 'Built market analysis dashboards, ML trading signals, exchange integrations and DAO governance contracts.', tags: ['Python', 'Machine learning', 'Web3.js'] },
    { name: 'MEXC', category: 'Exchange · Market data', description: 'Developed automated price bots, live market data systems and movement alerts.', tags: ['Python', 'WebSockets', 'APIs'] },
    { name: 'Goose Finance', category: 'DeFi · Yield farming', description: 'Developed yield farming smart contracts, liquidity pools and token economics tooling.', tags: ['Solidity', 'Node.js', 'React'] },
    { name: 'ERA7: Game of Truth', category: 'GameFi · NFT', description: 'Managed development of an NFT trading-card game with auto-battler mechanics and dual-token economy.', tags: ['Project management', 'Solidity', 'GameFi'] },
    { name: 'Kesef Finance', category: 'DeFi · Cross-chain', description: 'Developed yield farming, liquidity provision, staking and multi-signature security features.', tags: ['Solidity', 'Ethereum', 'React'] },
    { name: 'Joker Manor', category: 'GameFi · Launchpad', description: 'Built dApp features for a gaming aggregator, including NFT rewards and DeFi integrations.', tags: ['Solidity', 'React', 'Web3.js'] },
    { name: 'Coinverse', category: 'Creator tools · Social CRM', description: 'Developed creator community tools for audience conversion, monetization and analytics.', tags: ['React', 'Node.js', 'MongoDB'] },
    { name: 'PlutusFi', category: 'SocialFi · Trading', description: 'Led operations and built trading bot infrastructure as the platform scaled from 5K to 50K users.', tags: ['Operations', 'Python ML', 'Solidity'] },
  ];
  const career = [
    { date: '2025 — now', role: 'Founder', org: 'SpudPay', text: 'Building blockchain-based mobile financial services. Active founder focus.' },
    { date: '2025 — 2026', role: 'Business Executive', org: 'AscendEX', text: 'Strategic consulting engagement; developed 50+ crypto partnerships.' },
    { date: '2023 — 2025', role: 'Community & Business Development Manager', org: 'Tapbit', text: 'Grew the community from 50K to 220K+ and generated $5M+ in listing revenue.' },
    { date: '2019 — 2023', role: 'Customer Support Manager', org: 'Hotbit', text: 'Led customer operations through a period of crisis, maintaining 95%+ satisfaction.' },
    { date: '2018 — now', role: 'Founder / Advisor', org: 'SpudBlocks', text: 'Founded a blockchain and cryptocurrency firm; now serving in an advisory capacity.' },
  ];
  const expertise = ['Solidity & smart contracts', 'DeFi protocols', 'Web3.js & wallet integration', 'Python & trading automation', 'Node.js & REST APIs', 'Community growth', 'Strategic partnerships', 'Product and operations'];

  return (
    <main className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ashikur Rahaman home"><img className="brand-logo" src="/ashikur-mark.png" alt="" /><span>Ashikur Rahaman</span></a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <div id="main-content">
        <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .55 }}>
              <span className="status-dot" /> WEB3 FOUNDER · BUILDER · CONNECTOR
            </motion.div>
            <motion.h1 id="hero-title" initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .7, delay: reduceMotion ? 0 : .08 }}>
              Strategy that<br />ships. <span>Technology</span><br />that scales.
            </motion.h1>
            <motion.p className="hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .65, delay: reduceMotion ? 0 : .2 }}>
              I’m Ashikur Rahaman — a Web3 founder and blockchain engineer connecting business vision, hands-on technology, and the communities that move it forward.
            </motion.p>
            <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : .32 }}>
              <a className="button-primary" href="#ventures">Explore my work <ArrowRight size={16} /></a>
              <a className="button-quiet" href="mailto:ashikweb3.o@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
            </motion.div>
            <div className="hero-meta"><span>BASED IN BANGLADESH</span><span className="meta-line" /><span>BUILDING SPUDPAY</span></div>
          </div>
          <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .9, delay: reduceMotion ? 0 : .12 }}>
            <div className="art-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <svg className="network-lines" viewBox="0 0 520 470" aria-hidden="true">
              <path d="M119 239 226 126 353 185 400 315 252 375 119 239Z" />
              <path d="m226 126 26 249m101-190L119 239m234-54L252 375" />
              <path d="m119 239 281 76" />
              <circle cx="119" cy="239" r="5" /><circle cx="226" cy="126" r="5" /><circle cx="353" cy="185" r="5" /><circle cx="400" cy="315" r="5" /><circle cx="252" cy="375" r="5" />
            </svg>
            <div className="hero-core"><span className="core-ring"><Network size={42} strokeWidth={1.1} /></span><span className="core-caption">WEB3, CONNECTED</span></div>
            <div className="floating-label label-strategy"><span className="label-icon"><BriefcaseBusiness size={15} /></span><span><b>Business</b><small>Partnerships & growth</small></span></div>
            <div className="floating-label label-engineering"><span className="label-icon label-icon-lime"><Code2 size={16} /></span><span><b>Engineering</b><small>Build & ship</small></span></div>
            <div className="floating-label label-community"><span className="label-icon label-icon-gold"><Sparkles size={15} /></span><span><b>Community</b><small>Scale with people</small></span></div>
            <div className="art-index">01 <span>/</span> 03</div>
          </motion.div>
          <a className="scroll-cue" href="#impact"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="impact-section" id="impact" aria-labelledby="impact-title">
          <div className="section-wrap impact-inner">
            <div className="section-kicker"><span>01</span><span className="kicker-rule" /> THE WORK, IN NUMBERS</div>
            <motion.div className="impact-heading" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: reduceMotion ? 0 : .55 }}><h2 id="impact-title">Outcomes over<br /><em>noise.</em></h2><p>Across exchanges, protocols, and early-stage ventures, the work is measured in communities built, partnerships formed, and products shipped.</p></motion.div>
            <div className="metric-grid">
              {metrics.map((item, i) => <motion.div className="metric-item" key={item.value} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: reduceMotion ? 0 : .48, delay: reduceMotion ? 0 : i * .08 }}><strong>{item.value}</strong><span className="metric-label">{item.label}</span><small>{item.note}</small></motion.div>)}
            </div>
          </div>
        </section>

        <section className="section-wrap ventures-section" id="ventures" aria-labelledby="ventures-title">
          <div className="section-kicker"><span>02</span><span className="kicker-rule" /> FOUNDER MODE</div>
          <motion.div className="ventures-heading" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: reduceMotion ? 0 : .55 }}><div><h2 id="ventures-title">Building the<br /><em>next chapter.</em></h2></div><p>From founding a blockchain studio to focusing on a new financial product: I build with a long view, and stay close to the details.</p></motion.div>
          <motion.div className="venture-feature" initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: reduceMotion ? 0 : .65 }}>
            <div className="venture-mark"><img className="venture-logo" src="/spudpay-logo.jpg" alt="SpudPay logo" width={58} height={58} loading="lazy" /><span className="mono-label">01 / ACTIVE VENTURE</span></div>
            <div className="venture-info"><div className="venture-topline"><span className="active-pill"><span className="status-dot" /> ACTIVE SINCE 2025</span><span>FOUNDER</span></div><h3>SpudPay</h3><p>Building mobile financial services powered by blockchain technology — with a focus on making digital finance more accessible.</p><a href="#contact" className="text-link">Discuss the venture <ArrowUpRight size={14} /></a></div>
            <div className="venture-side-note"><div className="side-note-line" /><p>“The future of finance is decentralized. Build the infrastructure, partnerships, and communities that bring it closer.”</p><span>ASHIKUR RAHAMAN</span></div>
          </motion.div>
          <motion.div className="venture-secondary" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: reduceMotion ? 0 : .55, delay: reduceMotion ? 0 : .1 }}>
            <img className="secondary-icon secondary-logo" src="/spudblocks-logo.jpg" alt="SpudBlocks logo" width={52} height={52} loading="lazy" />
            <div><span className="mono-label">FOUNDED 2018 · ADVISOR</span><h3>SpudBlocks</h3><p>Blockchain and cryptocurrency company founded to deliver Web3 projects and build a team of technology specialists. Now in an advisory role.</p></div>
            <span className="secondary-tag">FOUNDER / ADVISOR</span>
          </motion.div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-wrap experience-layout">
            <div className="experience-intro"><div className="section-kicker"><span>03</span><span className="kicker-rule" /> OPERATOR’S VIEW</div><h2 id="experience-title">A career built<br />at the <em>intersection.</em></h2><p>Commercial leadership and technical fluency, shaped inside fast-moving crypto companies and founder-led teams.</p><a className="button-outline" href="#contact">Talk about a role <ArrowUpRight size={15} /></a></div>
            <div className="timeline">
              {career.map((job, index) => <motion.article className="timeline-item" key={job.org} initial={reduceMotion ? false : { opacity: 0, x: 12 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: reduceMotion ? 0 : .45, delay: reduceMotion ? 0 : index * .06 }}><div className="timeline-marker"><span /></div><div className="timeline-date">{job.date}</div><div className="timeline-copy"><div className="timeline-title"><h3>{job.org}</h3><span>{job.role}</span></div><p>{job.text}</p></div></motion.article>)}
            </div>
          </div>
        </section>

        <section className="section-wrap work-section" id="work" aria-labelledby="work-title">
          <div className="section-kicker"><span>04</span><span className="kicker-rule" /> SELECTED PROJECTS</div>
          <motion.div className="work-heading" initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: reduceMotion ? 0 : .55 }}><h2 id="work-title">Built with teams<br />moving <em>Web3 forward.</em></h2><p>A selection of development, product, and operations work across the crypto ecosystem.</p></motion.div>
          <div className="project-grid">
            {projects.map((project, index) => <motion.article className={`project-card ${index === 0 ? 'project-featured' : ''}`} key={project.name} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduceMotion ? 0 : .45, delay: reduceMotion ? 0 : (index % 4) * .07 }}><div className="project-card-top"><span>{project.category}</span><span className="project-number">{String(index + 1).padStart(2, '0')}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-arrow" aria-hidden="true"><ArrowDownRight size={17} /></span></motion.article>)}
          </div>
          <div className="work-footnote"><span className="footnote-dot" /> Selected work and contributions; not all projects are currently active.</div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-layout">
            <motion.div className="about-main" initial={reduceMotion ? false : { opacity: 0, x: -18 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: reduceMotion ? 0 : .6 }}><div className="section-kicker"><span>05</span><span className="kicker-rule" /> THE FULL PICTURE</div><h2 id="about-title">Business school.<br /><em>Builder mindset.</em></h2><p className="about-lede">A BBA foundation from East West University, paired with hands-on experience across blockchain engineering, business development, and community operations.</p><div className="education-card"><div className="edu-icon"><ShieldCheck size={21} /></div><div><span className="mono-label">EDUCATION</span><h3>Bachelor of Business Administration</h3><p>East West University · Bangladesh</p></div><ArrowUpRight size={17} className="edu-arrow" /></div></motion.div>
            <motion.div className="about-aside" initial={reduceMotion ? false : { opacity: 0, x: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: reduceMotion ? 0 : .6, delay: reduceMotion ? 0 : .1 }}><span className="mono-label">WHERE I ADD LEVERAGE</span><p>Translate between the boardroom and the build room. Align partners, teams, and technology around a product that can grow.</p><div className="expertise-list">{expertise.map((skill, i) => <span key={skill}><b>{String(i + 1).padStart(2, '0')}</b>{skill}</span>)}</div><a className="text-link" href="https://github.com/Ashikurrahaman287" target="_blank" rel="noreferrer">Explore code on GitHub <ArrowUpRight size={14} /></a></motion.div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-orbit contact-orbit-one" /><div className="contact-orbit contact-orbit-two" />
          <div className="section-wrap contact-inner"><div className="section-kicker"><span>06</span><span className="kicker-rule" /> OPEN TO THE RIGHT CONVERSATION</div><motion.div className="contact-content" initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: reduceMotion ? 0 : .65 }}><div><h2 id="contact-title">Let’s build what<br /><em>comes next.</em></h2><p>For strategic partnerships, founder conversations, and opportunities to make useful things in Web3.</p><a className="contact-email" href="mailto:ashikweb3.o@gmail.com">ashikweb3.o@gmail.com <MoveUpRight size={18} /></a></div><div className="contact-links"><a href="https://www.linkedin.com/in/ashik-the-knight/" target="_blank" rel="noreferrer"><Linkedin size={17} /><span>LinkedIn</span><ArrowUpRight size={14} /></a><a href="https://github.com/Ashikurrahaman287" target="_blank" rel="noreferrer"><Github size={17} /><span>GitHub</span><ArrowUpRight size={14} /></a><a href="https://ashik.spudblocks.com" target="_blank" rel="noreferrer"><Blocks size={17} /><span>Portfolio</span><ArrowUpRight size={14} /></a></div></motion.div><div className="contact-bottom"><span>BASED IN BANGLADESH · GMT+6</span><a href="#top">BACK TO TOP <ArrowUpRight size={13} /></a></div></div>
        </section>
      </div>
      <footer className="site-footer"><a className="wordmark" href="#top" aria-label="Ashikur Rahaman home"><img className="brand-logo" src="/ashikur-mark.png" alt="" /><span>Ashikur Rahaman</span></a><span>© {new Date().getFullYear()} ASHIKUR RAHAMAN</span><span>WEB3 FOUNDER & ENGINEER</span></footer>
    </main>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
