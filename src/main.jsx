import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowRight,
  Building2,
  Cable,
  Camera,
  ChevronDown,
  Globe2,
  Headphones,
  Landmark,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
  Wifi,
  Zap,
  Handshake,
  Menu,
  X
} from "lucide-react";
import "./styles.css";

const solutions = [
  { icon: Network, title: "Enterprise Networking", text: "Secure, high-performance networks across offices, branches and data centres." },
  { icon: Smartphone, title: "Telecommunications", text: "IP telephony, VoIP, unified communications and contact centre solutions." },
  { icon: Globe2, title: "Connectivity", text: "Fibre, wireless, MPLS and dedicated connectivity built for performance." },
  { icon: Camera, title: "CCTV & Video Surveillance", text: "Modern surveillance solutions for visibility, safety and operational control." },
  { icon: LockKeyhole, title: "Electronic Security", text: "Access control, biometrics, intrusion detection and security systems." },
  { icon: ShieldCheck, title: "Network Security", text: "Protect your network, users and critical business systems." },
  { icon: Server, title: "Data Centre & Infrastructure", text: "Reliable and scalable infrastructure for business continuity and growth." },
  { icon: Headphones, title: "Managed Services", text: "Monitoring, maintenance and support to keep your infrastructure running." }
];

const industries = [
  { icon: Landmark, title: "Financial Services", text: "Secure, compliant and resilient technology infrastructure for banks, financial institutions and fintechs.", featured: true },
  { icon: Smartphone, title: "Fintech & Payments", text: "Scalable, high-availability infrastructure built for fintechs, payment platforms and digital financial services." },
  { icon: Cable, title: "Telecommunications", text: "Network infrastructure, connectivity and telecom solutions for operators and service providers." },
  { icon: Building2, title: "Government", text: "Secure, reliable and scalable technology solutions for government and public-sector organizations." },
  { icon: Zap, title: "Oil & Gas", text: "Connectivity and infrastructure solutions for remote, offshore and operationally critical environments." },
  { icon: Globe2, title: "Maritime & Logistics", text: "Technology infrastructure supporting ports, logistics, shipping and distributed operations." }
];

const strengths = [
  { icon: Target, title: "Business-Focused Solutions", text: "We start with the business requirement and design technology around it." },
  { icon: Users, title: "End-to-End Delivery", text: "From assessment and design through implementation, integration and support." },
  { icon: ShieldCheck, title: "Security by Design", text: "Security considerations are incorporated across the technology environment." },
  { icon: Zap, title: "Scalable Infrastructure", text: "We build technology solutions that grow with your organization." },
  { icon: Headphones, title: "Responsive Support", text: "Our support model is designed to minimize downtime and operational disruption." },
  { icon: Handshake, title: "Trusted Partnership", text: "We work as an extension of your team to deliver long-term value." }
];

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="app">
      <header className="header">
        <a href="#home" className="brand">
          <img src="/triumph-logo.jpeg" alt="Triumph Technology Solutions Ltd" />
        </a>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <nav className={mobileOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
          <a href="#solutions" onClick={() => setMobileOpen(false)}>Solutions <ChevronDown size={14}/></a>
          <a href="#industries" onClick={() => setMobileOpen(false)}>Industries <ChevronDown size={14}/></a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services <ChevronDown size={14}/></a>
          <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#partners" onClick={() => setMobileOpen(false)}>Partners</a>
          <a href="#insights" onClick={() => setMobileOpen(false)}>Insights</a>
          <a className="nav-cta" href="#contact" onClick={() => setMobileOpen(false)}>Contact Us</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Network, Telecommunications, Security & Digital Infrastructure</p>
            <h1>Connecting Businesses.<br/>Securing Operations.<br/>Enabling Digital Transformation.</h1>
            <p className="hero-copy">
              Triumph Technology Solutions delivers secure, reliable and scalable network,
              telecommunications, CCTV, electronic security and digital infrastructure solutions
              that help organizations connect, communicate, protect their operations and grow.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button primary">Talk to an Expert <ArrowRight size={18}/></a>
              <a href="#solutions" className="button secondary">Explore Our Solutions <ArrowRight size={18}/></a>
            </div>
          </div>
        </section>

        <section className="industries-section" id="industries">
          <div className="section-heading centered">
            <p className="mini-title">INDUSTRIES WE SERVE</p>
            <h2>Solutions Built for Industries That Keep the World Moving</h2>
          </div>

          <div className="industry-grid">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <article className={item.featured ? "industry-card featured" : "industry-card"} key={item.title}>
                  <Icon size={28}/>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#contact">Explore Solutions <ArrowRight size={15}/></a>
                </article>
              );
            })}
            <article className="industry-card">
              <div className="more-icon">+</div>
              <h3>More Industries</h3>
              <p>Manufacturing, Healthcare, Enterprise & Commercial and more.</p>
              <a href="#contact">View All Industries <ArrowRight size={15}/></a>
            </article>
          </div>
        </section>

        <section className="solutions-section" id="solutions">
          <div className="section-heading centered light">
            <p className="mini-title">OUR CORE SOLUTIONS</p>
          </div>
          <div className="solution-grid">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <article className="solution-card" key={item.title}>
                  <Icon size={32}/>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#contact">Learn More <ArrowRight size={15}/></a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="strength-section" id="about">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <article className="strength" key={item.title}>
                <Icon size={40}/>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="about-section">
          <div>
            <p className="mini-title">WHO WE ARE</p>
            <h2>Technology Infrastructure Built for Modern Business</h2>
          </div>
          <div className="about-copy">
            <p>
              Triumph Technology Solutions is a technology infrastructure and telecommunications
              company focused on helping organizations design, deploy, secure and manage the
              infrastructure that powers modern business.
            </p>
            <p>
              Our capabilities span enterprise networking, telecommunications, internet and
              connectivity, CCTV and video surveillance, electronic security, network security,
              data centre infrastructure, structured cabling and managed technology services.
            </p>
            <a href="#contact" className="text-link">Learn More About Triumph <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="process-section" id="services">
          <div className="section-heading centered">
            <p className="mini-title">OUR DELIVERY APPROACH</p>
            <h2>From Technology Requirements to Delivered Solutions</h2>
          </div>
          <div className="process-grid">
            {["DISCOVER","ASSESS","DESIGN","DEPLOY","SECURE","MANAGE","OPTIMISE"].map((step, i) => (
              <div className="process-step" key={step}>
                <span>0{i + 1}</span>
                <h3>{step}</h3>
                <p>
                  {[
                    "Understand your business and operational requirements.",
                    "Identify infrastructure, connectivity and security gaps.",
                    "Develop the appropriate technical architecture.",
                    "Implement, configure and integrate the solution.",
                    "Apply appropriate security and operational controls.",
                    "Monitor, maintain and support the environment.",
                    "Continuously improve performance and scalability."
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <p className="mini-title">LET'S WORK TOGETHER</p>
            <h2>Let's Build a More Connected and Secure Business</h2>
            <p>
              Whether you are deploying a new network, expanding connectivity, securing your
              facilities, upgrading telecommunications infrastructure or looking for ongoing
              technical support, Triumph Technology Solutions can help.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button primary" href="mailto:info@triumphtechnologysolutions.com">Request a Consultation <ArrowRight size={18}/></a>
            <a className="button secondary" href="mailto:info@triumphtechnologysolutions.com">Speak With Our Team <ArrowRight size={18}/></a>
          </div>
        </section>
      </main>

      <footer className="footer" id="projects">
        <div>
          <div className="footer-brand">TRIUMPH <span>TECHNOLOGY SOLUTIONS</span></div>
          <p>Network, Telecommunications, Security & Digital Infrastructure.</p>
        </div>
        <div>
          <h4>Solutions</h4>
          <a href="#solutions">Enterprise Networking</a>
          <a href="#solutions">CCTV & Security</a>
          <a href="#solutions">Network Security</a>
          <a href="#solutions">Managed Services</a>
        </div>
        <div id="partners">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#partners">Partners</a>
          <a href="#insights">Insights</a>
        </div>
        <div id="insights">
          <h4>Contact</h4>
          <a href="mailto:info@triumphtechnologysolutions.com">Email Us</a>
          <a href="#contact">Request Consultation</a>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);