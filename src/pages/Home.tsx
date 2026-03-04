import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Section, SectionLabel, SectionTitle, SectionDescription } from "@/components/Section";
import {
  ArrowRight, Users, Globe, Cpu, BarChart3, Shield, Cloud,
  Building2, Heart, ShoppingCart, Factory, Landmark,
  CheckCircle2, TrendingUp, Zap, Award, Bot, Settings
} from "lucide-react";

/* ── Data ─────────────────────────────────────────────────────── */
const services = [
  { icon: Cpu,      title: "Solution Delivery",    desc: "End-to-end digital transformation with consulting, cloud integration, AI-driven automation, and cybersecurity.", href: "/services/solution-delivery" },
  { icon: Users,    title: "Talent Solutions",     desc: "Contract, contract-to-hire, and permanent placement with 48-hour turnaround for high-demand skill sets.", href: "/services/talent-solutions" },
  { icon: Globe,    title: "Offshore Solutions",   desc: "Access qualified global professionals to drive innovation through onshore and offshore delivery models.", href: "/services/offshore-solutions" },
  { icon: BarChart3,title: "Consulting Services",  desc: "Strategic planning, operations, M&A advisory, and technology consulting to streamline your business.", href: "/services/consulting" },
  { icon: Shield,   title: "Data Analytics",       desc: "Transform raw data into actionable insights with cutting-edge analytics tools and expert data scientists.", href: "/services/data-analytics" },
  { icon: Cloud,    title: "SAP Services",         desc: "SAP implementation, migration, and optimization to modernize your enterprise resource planning.", href: "/services/sap" },
  { icon: Settings, title: "Cloud & Infrastructure",desc: "Cloud strategy, migration, and managed services across AWS, Azure, and GCP.", href: "/services/cloud-infrastructure" },
  { icon: Bot,      title: "AI & Automation",      desc: "Harness AI and intelligent automation to optimize processes and unlock new revenue streams.", href: "/services/ai-automation" },
];

const stats = [
  { value: "200+", label: "Clients Served",    icon: Users },
  { value: "4",    label: "Global Offices",    icon: Globe },
  { value: "500+", label: "Professionals",     icon: Award },
  { value: "98%",  label: "Client Retention",  icon: TrendingUp },
];

const industries = [
  { icon: Building2,    name: "Financial Services" },
  { icon: Heart,        name: "Healthcare" },
  { icon: ShoppingCart, name: "Retail & E-Commerce" },
  { icon: Factory,      name: "Manufacturing" },
  { icon: Landmark,     name: "Government" },
];

const whyUs = [
  "M&A pre-deal planning and post-deal integration expertise",
  "Onshore & offshore delivery capabilities",
  "48-hour turnaround for high-demand talent",
  "Industry-specific strategies for finance, healthcare, retail & more",
  "End-to-end solution architecture and delivery",
];

/* ── Animated counter ─────────────────────────────────────────── */
function Counter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const numStr = target.match(/\d+/)?.[0];
        if (!numStr) { setDisplay(target); return; }
        const num = parseInt(numStr);
        const suffix = target.replace(/\d+/, "");
        const frames = 60;
        let f = 0;
        const id = setInterval(() => {
          f++;
          const val = Math.round((f / frames) * num);
          setDisplay(`${val}${suffix}`);
          if (f >= frames) { setDisplay(target); clearInterval(id); }
        }, 1400 / frames);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{display}</div>;
}

/* ── Cursor glow component ────────────────────────────────────── */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (
      e.clientX >= rect.left && e.clientX <= rect.right &&
      e.clientY >= rect.top  && e.clientY <= rect.bottom
    ) {
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  return (
    <div ref={heroRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{ x: pos.x - 180, y: pos.y - 180, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 28, mass: 0.6 }}
        className="absolute w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(180 60% 55% / 0.22) 0%, hsl(180 60% 45% / 0.10) 40%, transparent 70%)",
        }}
      />
      {/* Trailing dot cursor */}
      <motion.div
        animate={{ x: pos.x - 6, y: pos.y - 6, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.3 }}
        className="absolute w-3 h-3 rounded-full bg-teal-300/80 pointer-events-none mix-blend-screen"
      />
      <motion.div
        animate={{ x: pos.x - 20, y: pos.y - 20, opacity: visible ? 0.5 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 28, mass: 0.5 }}
        className="absolute w-10 h-10 rounded-full border border-teal-300/40 pointer-events-none"
      />
    </div>
  );
}

/* ── Typewriter words ─────────────────────────────────────────── */
const heroWords = ["Innovate", "Transform", "Accelerate", "Elevate"];
function TypewriterWord() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing"|"pause"|"erasing">("typing");
  const [text, setText] = useState("");
  const word = heroWords[idx];

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("erasing"), 500);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 50);
      } else {
        setIdx((i) => (i + 1) % heroWords.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [text, phase, word]);

  return (
    <span className="relative inline-block">
      <span className="text-gradient">{text}</span>
      <span className="inline-block w-[3px] h-[0.85em] bg-teal-300 ml-1 align-middle animate-pulse rounded-sm" />
    </span>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <Layout>

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative gradient-hero overflow-hidden min-h-screen flex items-center pt-16 lg:pt-20">

        {/* Cursor glow */}
        <CursorGlow />

        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-[8%]  left-[2%]  w-[480px] h-[480px] rounded-full bg-teal-500/18  blur-[130px] animate-float-slow" />
          <div className="absolute bottom-[10%] right-[4%] w-[560px] h-[560px] rounded-full bg-blue-600/14 blur-[150px] animate-float-medium" />
          <div className="absolute top-[45%] left-[38%] w-[320px] h-[320px] rounded-full bg-cyan-400/10  blur-[90px]  animate-float-slow" style={{ animationDelay: "4s" }} />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

        {/* Animated rings — top right */}
        <div className="absolute top-[12%] right-[8%] pointer-events-none hidden lg:block">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 border border-teal-400/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-6 border border-white/10  rounded-full animate-spin-slow" style={{ animationDirection:"reverse", animationDuration:"16s" }} />
            <div className="absolute inset-12 border border-teal-300/15 rounded-full animate-spin-slow" style={{ animationDuration:"24s" }} />
            {/* Orbiting dot */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal-300/80 shadow-[0_0_10px_2px_hsl(180_60%_55%/0.5)]" />
            </div>
          </div>
        </div>

        {/* Diagonal accent line */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden h-32">
          <svg viewBox="0 0 1440 128" fill="none" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0 128 L1440 80 L1440 128 Z" fill="hsl(210 20% 98%)" fillOpacity="0.07" />
            <path d="M0 128 L1440 60 L1440 128 Z" fill="hsl(210 20% 98%)" fillOpacity="0.05" />
          </svg>
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 relative z-10 py-36 lg:py-0"
        >
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-px bg-teal-300" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
                Insightful Solutions, Infinite Impact
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-display font-extrabold text-white leading-[1.04] mb-8"
            >
              <TypewriterWord />{" "}
              <span className="block mt-2 text-white/90 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                with Meta Resources Group
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-lg lg:text-xl text-white/60 max-w-lg leading-relaxed mb-12"
            >
              Expert delivery teams, solutions architecture, and IT staffing to navigate your most complex business and technology initiatives.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/services"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg gradient-accent text-white font-bold text-sm hover:opacity-90 transition-opacity group shadow-[0_4px_24px_hsl(180_55%_40%/0.4)]"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-white/25 text-white font-bold text-sm hover:bg-white/10 hover:border-white/45 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>

          </div>

          {/* Floating stat cards — desktop */}
          <div className="hidden lg:flex flex-col gap-3 absolute right-6 xl:right-12 top-1/2 -translate-y-1/2">
            {[
              { num: "200+", label: "Global Clients",     icon: Users,      delay: 1.0 },
              { num: "98%",  label: "Retention Rate",     icon: TrendingUp, delay: 1.15 },
              { num: "500+", label: "Expert Professionals",icon: Zap,        delay: 1.3 },
              { num: "4",    label: "Office Locations",   icon: Globe,      delay: 1.45 },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay, duration: 0.55 }}
                whileHover={{ x: -4 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3.5 cursor-default"
              >
                <div className="w-9 h-9 rounded-lg gradient-accent/80 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-lg font-display font-extrabold text-white leading-none">{item.num}</div>
                  <div className="text-[11px] text-white/55 mt-0.5">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full block" preserveAspectRatio="none">
            <path d="M0 80H1440V40C1200 0 960 60 720 40C480 20 240 70 0 40V80Z" fill="hsl(210 20% 98%)" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════ */}
      <section className="relative z-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border rounded-2xl overflow-hidden shadow-strong border border-border -mt-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card p-8 lg:p-10 text-center group hover:bg-accent hover:text-white transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-accent group-hover:text-white/80 mx-auto mb-3 transition-colors" />
                <div className="text-3xl lg:text-4xl font-display font-extrabold text-accent group-hover:text-white transition-colors">
                  <Counter target={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-white/75 mt-1 font-medium transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════ */}
      <Section>
        <SectionLabel>What We Do</SectionLabel>
        <SectionTitle>Comprehensive Technology Solutions</SectionTitle>
        <SectionDescription>
          From digital transformation to talent acquisition, we provide end-to-end services
          that drive measurable business outcomes.
        </SectionDescription>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={service.href}
                className="group flex flex-col bg-card rounded-2xl p-7 shadow-soft hover:shadow-strong border border-border hover:border-accent/40 transition-all duration-300 h-full relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-accent mt-4 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-accent text-white font-bold text-sm hover:opacity-90 transition-opacity group shadow-[0_4px_20px_hsl(180_55%_40%/0.3)]">
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════
          WHY MRG
      ═══════════════════════════════════════════════════ */}
      <Section className="bg-muted relative overflow-hidden">
        <div className="absolute -right-16 top-0 bottom-0 w-96 gradient-hero opacity-5 pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionLabel>Why Meta Resources Group</SectionLabel>
            <SectionTitle>A Trusted Partner for Digital Excellence</SectionTitle>
            <SectionDescription>
              We combine cutting-edge digital solutions with customized delivery processes to help you expand market share, grow revenue, and minimize costs.
            </SectionDescription>
            <ul className="mt-8 space-y-4">
              {whyUs.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full gradient-accent flex items-center justify-center shrink-0 mt-0.5 shadow-soft">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <Link to="/about" className="inline-flex items-center gap-2 text-accent font-bold text-sm group hover:gap-3 transition-all">
                Learn our story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Visual panel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="aspect-square rounded-3xl gradient-hero overflow-hidden relative shadow-strong"
            >
              <div className="absolute inset-0 dot-grid opacity-25" />
              {/* Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  <div className="absolute inset-0   border border-teal-400/30 rounded-full animate-spin-slow" />
                  <div className="absolute inset-5   border border-white/10   rounded-full animate-spin-slow" style={{ animationDirection:"reverse", animationDuration:"14s" }} />
                  <div className="absolute inset-10  border border-teal-300/20 rounded-full animate-spin-slow" style={{ animationDuration:"20s" }} />
                  {/* Orbiting dot */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal-300 shadow-[0_0_12px_3px_hsl(180_60%_55%/0.6)]" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                      <div className="text-5xl font-display font-extrabold mb-1">MRG</div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-white/45">Since Inception</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 -left-5 bg-card rounded-2xl p-4 shadow-strong border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center animate-pulse-ring shadow-soft flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-display font-extrabold text-foreground">48-Hour Turnaround</div>
                  <div className="text-xs text-muted-foreground">For high-demand talent</div>
                </div>
              </div>
            </motion.div>

            {/* Second badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className="absolute -top-5 -right-5 bg-card rounded-2xl p-4 shadow-strong border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-display font-extrabold text-foreground">4 Global Offices</div>
                  <div className="text-xs text-muted-foreground">NY · LA · Karachi · Manila</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════
          INDUSTRIES
      ═══════════════════════════════════════════════════ */}
      <Section>
        <SectionLabel>Industries</SectionLabel>
        <SectionTitle>Serving Diverse Sectors</SectionTitle>
        <SectionDescription>
          We deliver tailored solutions across industries, leveraging deep domain expertise.
        </SectionDescription>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.88, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -5, scale: 1.04 }}
              className="flex items-center gap-3 bg-card rounded-xl px-7 py-4 shadow-soft border border-border hover:border-accent/50 hover:shadow-medium transition-all cursor-default group"
            >
              <div className="w-10 h-10 rounded-lg gradient-accent/10 border border-accent/20 flex items-center justify-center group-hover:gradient-accent transition-all">
                <ind.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-bold text-foreground">{ind.name}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/industries" className="flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-dashed border-accent/35 text-accent text-sm font-bold hover:border-accent hover:bg-accent/5 transition-all group">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════ */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4  w-72 h-72 rounded-full bg-teal-400/20 blur-[100px] animate-float-medium" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-400/15 blur-[120px] animate-float-slow" />
          <div className="absolute inset-0 dot-grid opacity-20" />
        </div>
        <div className="container mx-auto px-6 py-24 lg:py-32 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-teal-300 mb-6">
              <span className="w-6 h-px bg-teal-300" />
              Let's Build Together
              <span className="w-6 h-px bg-teal-300" />
            </span>
            <h2 className="text-4xl lg:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
              Ready to Transform<br className="hidden sm:block" /> Your Business?
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              Partner with Meta Resources Group and turn innovation into your competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg gradient-accent text-white font-bold hover:opacity-90 transition-opacity group shadow-[0_4px_24px_hsl(180_55%_40%/0.4)]"
              >
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://metaresourcesgroup.zohorecruit.com/jobs/Careers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg border-2 border-white/25 text-white font-bold hover:bg-white/10 hover:border-white/45 transition-all"
              >
                View Job Openings
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
