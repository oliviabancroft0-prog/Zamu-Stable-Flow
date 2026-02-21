import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, 
  Shield, 
  Globe, 
  Zap, 
  CreditCard, 
  RefreshCw, 
  Lock, 
  ChevronRight,
  Menu,
  X,
  Activity,
  Database,
  Cpu
} from 'lucide-react';
import { cn } from './lib/utils';

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-all duration-500",
      isScrolled ? "top-4" : "top-8"
    )}>
      <div className={cn(
        "flex items-center justify-between px-6 py-3 rounded-[2.5rem] transition-all duration-500",
        isScrolled ? "glass-yellow shadow-[0_0_30px_rgba(250,204,21,0.1)]" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent-yellow rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-vault-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">STABLE<span className="text-accent-yellow">FLOW</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-text">
          <a href="#features" className="hover:text-accent-yellow transition-colors">Infrastructure</a>
          <a href="#protocol" className="hover:text-accent-yellow transition-colors">Protocol</a>
          <a href="#access" className="hover:text-accent-yellow transition-colors">Access</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-accent-yellow hover:text-white transition-colors">
            Login
          </button>
          <button className="px-5 py-2.5 bg-accent-yellow text-vault-black rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            Get Virtual Account
          </button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });
      gsap.from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
      });
      gsap.from(".hero-cta", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: 1.2,
        ease: "back.out(1.7)"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-20 grayscale"
          alt="Digital Flow"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vault-black via-transparent to-vault-black" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-yellow/5 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-yellow mb-8 animate-pulse">
          <div className="w-2 h-2 rounded-full bg-accent-yellow" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-accent-yellow">Network Status: Operational</span>
        </div>

        <h1 className="hero-title flex flex-col items-center text-6xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter leading-[0.9]">
          <span className="block overflow-hidden">
            <span className="block uppercase">Zamu X</span>
          </span>
          <span className="block overflow-hidden text-accent-yellow italic font-serif font-normal tracking-normal py-2">
            <span className="block text-glow-yellow">Stable Flow</span>
          </span>
        </h1>

        <p className="hero-sub max-w-2xl mx-auto mt-8 text-lg md:text-xl text-secondary-text font-medium leading-relaxed">
          Virtual GBP & USD accounts. Instant fiat-to-stablecoin conversion. 
          <span className="text-pure"> Borderless payments, institutional-grade security.</span>
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button className="group relative px-8 py-4 bg-accent-yellow text-vault-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(250,204,21,0.4)]">
            <span className="relative z-10 flex items-center gap-2">
              Apply for Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 glass text-pure rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            View API Docs
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-accent-yellow to-transparent" />
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, subtitle, metrics, color = "yellow" }: any) => {
  return (
    <div className={cn(
      "group relative p-8 rounded-[2.5rem] transition-all duration-500 overflow-hidden",
      color === "yellow" ? "glass-yellow hover:border-accent-yellow/40" : "glass-gold hover:border-gold-ledger/40"
    )}>
      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-32 h-32" />
      </div>
      
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center mb-6",
        color === "yellow" ? "bg-accent-yellow/10 text-accent-yellow" : "bg-gold-ledger/10 text-gold-ledger"
      )}>
        <Icon className="w-6 h-6" />
      </div>

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-secondary-text text-sm mb-8 leading-relaxed">{subtitle}</p>

      <div className="space-y-4">
        {metrics.map((m: any, i: number) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
            <span className="text-xs font-mono text-secondary-text uppercase tracking-wider">{m.label}</span>
            <span className={cn(
              "text-sm font-mono font-bold",
              color === "yellow" ? "text-accent-yellow" : "text-gold-ledger"
            )}>{m.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
        Launch Module <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight mb-6">
              Institutional <span className="text-accent-yellow">Intelligence.</span>
            </h2>
            <p className="text-lg text-secondary-text">
              Precision-engineered infrastructure for the modern treasury. 
              Real-time settlement, multi-currency virtual accounts, and automated liquidity rails.
            </p>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-secondary-text">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              GBP FASTER PAYMENTS
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              USD ACH/WIRE
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Database}
            title="Virtual Account Oracle"
            subtitle="Instant issuance of local GBP and USD accounts with full IBAN/Routing support."
            metrics={[
              { label: "GBP Balance", value: "£1,240,500.00" },
              { label: "USD Balance", value: "$892,120.45" },
              { label: "Active Rails", value: "FPS • ACH • SWIFT" }
            ]}
          />
          <FeatureCard 
            icon={RefreshCw}
            title="Conversion Protocol"
            subtitle="Automated fiat-to-stablecoin bridge with sub-second execution and zero slippage."
            metrics={[
              { label: "USDC Minted", value: "4.2M" },
              { label: "Avg Settlement", value: "8.4s" },
              { label: "Slippage", value: "0.00%" }
            ]}
            color="gold"
          />
          <FeatureCard 
            icon={Activity}
            title="Transaction Telemetry"
            subtitle="Real-time audit trails and compliance monitoring for every movement of capital."
            metrics={[
              { label: "TX Hash", value: "0x7f...e2a" },
              { label: "Status", value: "VERIFIED" },
              { label: "Compliance", value: "SOC2 • AML" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const Protocol = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      cards.forEach((card: any, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(card, {
              scale: 1 - progress * 0.05,
              opacity: 1 - progress * 0.5,
              filter: `blur(${progress * 10}px)`
            });
          }
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={sectionRef} className="relative">
      <div className="protocol-card min-h-screen flex items-center justify-center bg-vault-black border-t border-white/5">
        <div className="container px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent-yellow font-mono text-sm tracking-widest uppercase mb-4 block">Module 01</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8">
              Global <span className="text-glow-yellow">Reach.</span>
            </h2>
            <p className="text-xl text-secondary-text leading-relaxed mb-12">
              Access the world's most robust financial networks through a single interface. 
              From London to New York, your capital moves at the speed of light.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <Globe className="w-8 h-8 text-accent-yellow mb-4" />
                <h4 className="font-bold mb-2">180+ Countries</h4>
                <p className="text-sm text-secondary-text">Seamless cross-border settlement.</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                <Zap className="w-8 h-8 text-accent-yellow mb-4" />
                <h4 className="font-bold mb-2">Instant Rails</h4>
                <p className="text-sm text-secondary-text">Direct integration with local RTGS.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden glass-yellow p-1">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[2.8rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Global Network"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 p-6 glass-yellow rounded-3xl animate-float">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-accent-yellow" />
                </div>
                <div>
                  <div className="text-[10px] text-secondary-text uppercase font-mono">Live Throughput</div>
                  <div className="text-lg font-bold font-mono">$12.4B / Day</div>
                </div>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent-yellow w-[70%] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="protocol-card min-h-screen flex items-center justify-center bg-charcoal-silk border-t border-white/5">
        <div className="container px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-[3rem] overflow-hidden glass-gold p-1">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover rounded-[2.8rem] opacity-60 grayscale"
                alt="Security Vault"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-gold-ledger font-mono text-sm tracking-widest uppercase mb-4 block">Module 02</span>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter mb-8">
              Vault <span className="text-gold-ledger">Security.</span>
            </h2>
            <p className="text-xl text-secondary-text leading-relaxed mb-12">
              Institutional-grade custody meets blockchain transparency. 
              Your assets are protected by multi-sig protocols and real-time monitoring.
            </p>
            <ul className="space-y-6">
              {[
                "MPC Multi-Signature Custody",
                "Real-time AML/KYC Screening",
                "Full Reserve Transparency",
                "24/7 Security Operations Center"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium">
                  <div className="w-6 h-6 rounded-full bg-gold-ledger/20 flex items-center justify-center">
                    <Lock className="w-3 h-3 text-gold-ledger" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Access = () => {
  return (
    <section id="access" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container px-6 text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
          Choose your <span className="text-accent-yellow">Tier.</span>
        </h2>
        <p className="text-lg text-secondary-text max-w-2xl mx-auto">
          From individual freelancers to global enterprises, we have a bridge built for your scale.
        </p>
      </div>

      <div className="container px-6 grid md:grid-cols-3 gap-8">
        <div className="p-10 rounded-[3rem] glass hover:bg-white/5 transition-all">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <div className="text-4xl font-display font-extrabold mb-6">$0 <span className="text-sm text-secondary-text font-normal">/ mo</span></div>
          <ul className="space-y-4 mb-10 text-secondary-text text-sm">
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent-yellow" /> Virtual GBP Account</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent-yellow" /> $10k Monthly Limit</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent-yellow" /> Standard Support</li>
          </ul>
          <button className="w-full py-4 rounded-full border border-white/10 font-bold hover:bg-white/5 transition-all">Get Started</button>
        </div>

        <div className="p-10 rounded-[3rem] glass-yellow bg-accent-yellow/5 relative scale-105 shadow-[0_0_50px_rgba(250,204,21,0.1)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-yellow text-vault-black text-[10px] font-bold uppercase tracking-widest rounded-full">Most Popular</div>
          <h3 className="text-xl font-bold mb-2">Business</h3>
          <div className="text-4xl font-display font-extrabold mb-6 text-accent-yellow">$499 <span className="text-sm text-secondary-text font-normal">/ mo</span></div>
          <ul className="space-y-4 mb-10 text-pure text-sm">
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent-yellow" /> GBP & USD Accounts</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent-yellow" /> $1M Monthly Limit</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent-yellow" /> Priority 24/7 Support</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-accent-yellow" /> API Access</li>
          </ul>
          <button className="w-full py-4 rounded-full bg-accent-yellow text-vault-black font-bold shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105 transition-all">Apply Now</button>
        </div>

        <div className="p-10 rounded-[3rem] glass-gold bg-gold-ledger/5">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <div className="text-4xl font-display font-extrabold mb-6 text-gold-ledger">Custom</div>
          <ul className="space-y-4 mb-10 text-secondary-text text-sm">
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-gold-ledger" /> Unlimited Accounts</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-gold-ledger" /> Custom Limits</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-gold-ledger" /> Dedicated Manager</li>
            <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-gold-ledger" /> Custom Compliance</li>
          </ul>
          <button className="w-full py-4 rounded-full border border-gold-ledger/20 text-gold-ledger font-bold hover:bg-gold-ledger/5 transition-all">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-12 rounded-t-[5rem] border-t border-white/5">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-accent-yellow rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-vault-black" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">STABLE<span className="text-accent-yellow">FLOW</span></span>
            </div>
            <p className="text-secondary-text max-w-sm leading-relaxed">
              The institutional-grade bridge for global capital. 
              Seamlessly moving value between traditional rails and the digital future.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent-yellow">Platform</h4>
            <ul className="space-y-4 text-secondary-text text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Accounts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bridge Protocol</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-accent-yellow">Company</h4>
            <ul className="space-y-4 text-secondary-text text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 text-[10px] font-mono text-secondary-text uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Uptime: 99.99%
            </div>
            <span>© 2026 ZAMU STABLEFLOW</span>
          </div>
          <div className="flex gap-8 text-xs text-secondary-text">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <main className="font-sans selection:bg-accent-yellow/30">
      <Navbar />
      <Hero />
      <Features />
      <Protocol />
      <Access />
      <Footer />
      
      {/* Custom Cursor Effect (Optional but Premium) */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-50 hidden lg:block">
        <div 
          id="custom-cursor" 
          className="w-8 h-8 rounded-full border border-accent-yellow/30 bg-accent-yellow/5 blur-sm"
          style={{ position: 'fixed', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('mousemove', (e) => {
          const cursor = document.getElementById('custom-cursor');
          if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
          }
        });
      `}} />
    </main>
  );
}
