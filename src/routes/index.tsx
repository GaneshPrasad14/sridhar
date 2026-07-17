import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Award,
  HardHat,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Users,
  Target,
  Lightbulb,
  Clock,
  MessageSquare,
  Trophy,
  GraduationCap,
  BadgeCheck,
  Briefcase,
  Compass,
  Layers,
  Ruler,
  Hammer,
  QrCode,
  Instagram,
  Linkedin,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import heroImg from "@/assets/founder.jpeg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Education" },
  { id: "contact", label: "Contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Portfolio() {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(24px);transition:opacity .9s ease,transform .9s ease}
        [data-reveal="drop"]{transform:translateY(-30px)}
        [data-reveal="slide-left"]{transform:translateX(40px)}
        [data-reveal="slide-right"]{transform:translateX(-40px)}
        [data-reveal="zoom"]{transform:scale(0.85)}
        [data-reveal].reveal-in{opacity:1;transform:none}
        [data-reveal-delay="1"]{transition-delay:.1s}
        [data-reveal-delay="2"]{transition-delay:.2s}
        [data-reveal-delay="3"]{transition-delay:.3s}
        [data-reveal-delay="4"]{transition-delay:.4s}
        [data-reveal-delay="5"]{transition-delay:.5s}
        [data-reveal-delay="6"]{transition-delay:.6s}
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`glass-panel flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6 ${scrolled ? "shadow-[0_10px_40px_-10px_rgba(0,0,0,.5)]" : ""}`}
        >
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <span className="block text-xl font-bold tracking-wide">
              Sridhar Marimuthu
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
          >
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-foreground/90 hover:bg-white/5 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="glass-panel mt-2 rounded-2xl p-3 md:hidden">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Hire Me <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="blob left-[-10%] top-20 h-[420px] w-[420px] bg-primary/25" />
      <div
        className="blob right-[-8%] top-40 h-[360px] w-[360px] bg-amber-600/20"
        style={{ animationDelay: "3s" }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7" data-reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Civil Engineer · Site Engineer
          </div>
          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            SRIDHAR
            <br />
            <span className="text-gradient-gold">MARIMUTHU</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Managing Director at{" "}
            <span className="font-semibold text-foreground">
              LAAMARIX INFRA Construction & Builders
            </span>
            .
          </p>
          <blockquote className="mt-6 max-w-xl border-l-2 border-primary/60 pl-4 italic text-muted-foreground">
            &ldquo;Building Tomorrow with Precision &amp; Passion.&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.82_0.14_85_/_0.6)] transition-transform hover:scale-105"
            >
              Get In Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
            <div>
              <div className="text-gradient-gold text-3xl font-bold"><AnimatedCounter value={3} suffix="+" /></div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-gradient-gold text-3xl font-bold"><AnimatedCounter value={7} suffix="+" /></div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-gradient-gold text-3xl font-bold"><AnimatedCounter value={5} /></div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Sites in Bengaluru</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5" data-reveal data-reveal-delay="2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface">
              <img
                src={heroImg}
                alt="Sridhar Marimuthu, Civil Engineer and Managing Director"
                width={1024}
                height={1280}
                className="h-[560px] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                    Managing Director
                  </div>
                  <div className="mt-1 text-lg font-semibold">LAAMARIX INFRA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const values = [
    { icon: ShieldCheck, label: "Integrity" },
    { icon: BadgeCheck, label: "Quality" },
    { icon: CheckCircle2, label: "Commitment" },
    { icon: HardHat, label: "Safety" },
    { icon: Users, label: "Teamwork" },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="About" title="Vision Built On Precision" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div
            className="card-glow rounded-3xl border border-white/10 bg-surface/60 p-8 sm:p-10 lg:col-span-7"
            data-reveal
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a <span className="font-medium text-foreground">Civil Engineer</span> and
              construction professional with hands-on experience in site execution, planning, and
              project management. Currently, I serve as the{" "}
              <span className="font-medium text-primary">Managing Director</span> of LAAMARIX INFRA
              Construction & Builders, leading a team dedicated to delivering high-quality,
              innovative, and sustainable construction solutions.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I believe in building not just structures, but strong relationships based on trust,
              quality, and commitment.
            </p>

            <div className="gold-divider mt-8" />

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { k: "Date of Birth", v: "26 November 2002" },
                { k: "Nationality", v: "Indian" },
                { k: "Languages", v: "Tamil · English · Hindi · Kannada" },
              ].map((it) => (
                <div
                  key={it.k}
                  className="rounded-xl border border-white/10 bg-background/40 p-4"
                >
                  <div className="text-[10px] uppercase tracking-widest text-primary">{it.k}</div>
                  <div className="mt-1.5 text-sm font-medium">{it.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5" data-reveal data-reveal-delay="1">
            <VisionCard
              icon={Compass}
              title="Our Vision"
              text="To be a leading construction company known for excellence, innovation, and sustainability."
            />
            <VisionCard
              icon={Target}
              title="Our Mission"
              text="Deliver high-quality construction with integrity, ensure client satisfaction through transparency, and embrace modern technology."
            />
          </div>
        </div>

        <div
          className="mt-10 rounded-3xl border border-white/10 bg-surface/40 p-6 sm:p-8"
          data-reveal
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                Professional Values
              </div>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">What I Build With</h3>
            </div>
            <Layers className="h-6 w-6 text-primary/70" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {values.map((v, i) => (
              <div
                key={v.label}
                data-reveal="drop"
                data-reveal-delay={i + 1}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-background/40 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <v.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{v.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="card-glow relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-background p-7">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

function Experience() {
  const jobs = [
    {
      company: "Ehook Realty",
      role: "Site Engineer",
      period: "June 2025 - July 2026",
      note: "3 Years Total Experience",
      points: [
        "Civil experience in residential projects across Bengaluru (5 sites).",
        "Skilled in site execution, material management, and vendor coordination.",
        "Strong knowledge of structural drawings, BOQ, and IS standards.",
      ],
    },
    {
      company: "MCLamour Construction",
      role: "Site Engineer",
      period: "June 2023 - May 2025",
      note: "Residential & Foundation Work",
      points: [
        "Completed two residential building projects in Coimbatore.",
        "Successfully constructed and erected Pile Foundation in Ooty.",
      ],
    },
  ];

  const internships = [
    {
      company: "Infra Arch Construction",
      date: "Feb 2023",
      text: "Helped in building Canteen Structure, learned site planning.",
      icon: Building2,
    },
    {
      company: "RS Engineers",
      date: "July 2023",
      text: "Determined project feasibility, saved 25% of assigned budget, gained exposure in cost control.",
      icon: Ruler,
    },
  ];

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Experience" title="Field-Tested. Site-Proven." />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute bottom-2 left-2 top-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent" />
              {jobs.map((j, i) => (
                <div
                  key={j.company}
                  className="card-glow relative mb-8 rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-7"
                  data-reveal="slide-right"
                  data-reveal-delay={i + 1}
                >
                  <span className="absolute -left-[26px] top-7 grid h-4 w-4 place-items-center">
                    <span className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
                    <span className="relative h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  </span>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-primary">
                        {j.role}
                      </div>
                      <h4 className="mt-1 text-xl font-bold sm:text-2xl">{j.company}</h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">{j.note}</p>
                    </div>
                    <span className="shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {j.period}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {j.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-background p-7">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                <Briefcase className="h-4 w-4" /> Internships
              </div>
              <h3 className="mt-2 text-2xl font-bold">Early Foundations</h3>
              <div className="mt-6 space-y-4">
                {internships.map((it, i) => (
                  <div
                    key={it.company}
                    data-reveal="slide-left"
                    data-reveal-delay={i + 1}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-background/40 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                      <it.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h5 className="text-base font-semibold">{it.company}</h5>
                        <span className="text-xs text-primary">{it.date}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{it.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const technical = [
    "Site Execution",
    "Project Management",
    "Structural Drawings",
    "Quantity Estimation",
    "Material Management",
    "Quality Control",
    "Site Supervision",
    "BOQ Preparation",
    "Safety Management",
  ];
  const software = ["AutoCAD", "Revit", "MS Excel", "MS Word", "MS PowerPoint"];
  const strengths = [
    { icon: Users, label: "Leadership", text: "Leading site teams with clarity and calm authority." },
    { icon: Lightbulb, label: "Problem Solving", text: "Turning field blockers into structured solutions." },
    { icon: Clock, label: "Time Management", text: "Deadlines held with disciplined planning." },
    { icon: MessageSquare, label: "Communication", text: "Transparent updates for clients & crew." },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Skills" title="Core Strengths & Toolkit" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div
            className="rounded-3xl border border-white/10 bg-surface/60 p-7 sm:p-8"
            data-reveal
          >
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
              <Hammer className="h-4 w-4" /> Technical Skills
            </div>
            <h3 className="mt-2 text-2xl font-bold">On-Site Expertise</h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {technical.map((t) => (
                <span
                  key={t}
                  className="cursor-default rounded-full border border-white/10 bg-background/60 px-4 py-2 text-sm text-foreground/90 transition-all hover:-translate-y-0.5 hover:scale-105 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="gold-divider mt-8" />
            <div className="mt-8">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-primary">
                <Layers className="h-4 w-4" /> Software
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {software.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/25 transition-transform hover:scale-105"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <div
                key={s.label}
                data-reveal="drop"
                data-reveal-delay={i + 1}
                className="card-glow group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-background p-6"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-radial-gold)" }}
                />
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-transform group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-4 text-lg font-bold">{s.label}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Credentials" title="Education, Achievements & Certifications" />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <CredCard
            icon={GraduationCap}
            eyebrow="Education"
            title="Bachelor's in Civil Engineering"
            items={[
              { k: "CSI College Of Engineering, Ketti", v: "2020 — 2024" },
              { k: "HSC · Govt HSS, Kadamalaikundu", v: "2018 — 2020" },
            ]}
            delay={1}
          />
          <CredCard
            icon={Trophy}
            eyebrow="Achievements"
            title="Recognitions"
            items={[
              { k: "Best NCC Cadet", v: "2022" },
              { k: "National Gold Medalist — Kabaddi", v: "2021" },
            ]}
            delay={2}
          />
          <CredCard
            icon={BadgeCheck}
            eyebrow="Certifications"
            title="Trainings & Workshops"
            items={[
              { k: "Survey Camp Participation", v: "Field" },
              { k: "First Aid & Safety Training", v: "Certified" },
              { k: "Advanced Construction Practices", v: "Workshop" },
            ]}
            delay={3}
          />
        </div>
      </div>
    </section>
  );
}

function CredCard({
  icon: Icon,
  eyebrow,
  title,
  items,
  delay = 1,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  items: { k: string; v: string }[];
  delay?: number;
}) {
  return (
    <div
      className="card-glow group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-7"
      data-reveal="zoom"
      data-reveal-delay={delay}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40"
        style={{ background: "var(--gradient-radial-gold)" }}
      />
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
        <Icon className="h-6 w-6" />
      </span>
      <div className="mt-5 text-[10px] uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
      <h4 className="mt-1 text-xl font-bold">{title}</h4>
      <div className="mt-5 space-y-3">
        {items.map((it) => (
          <div
            key={it.k}
            className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-background/40 p-3.5"
          >
            <span className="text-sm text-foreground/90">{it.k}</span>
            <span className="shrink-0 text-xs font-medium text-primary">{it.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-surface via-background to-background p-8 sm:p-14"
          data-reveal
        >
          <div className="blob left-[-6%] top-[-10%] h-[300px] w-[300px] bg-primary/25" />
          <div
            className="blob bottom-[-10%] right-[-6%] h-[280px] w-[280px] bg-amber-600/20"
            style={{ animationDelay: "2s" }}
          />

          <div className="relative mx-auto max-w-4xl">
            <div>
              <div className="text-[10px] uppercase tracking-[0.35em] text-primary">
                Get In Touch
              </div>
              <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                LET&rsquo;S BUILD
                <br />
                <span className="text-gradient-gold">SOMETHING GREAT</span>
              </h2>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Have a project, plot, or partnership in mind? Reach out — every great structure
                starts with a conversation.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <ContactItem
                  icon={Phone}
                  label="Phone"
                  value="+91 97865 88466"
                  href="tel:+919786588466"
                />
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value="sridharmarimuthu0603@gmail.com"
                  href="mailto:sridharmarimuthu0603@gmail.com"
                />
                <div className="sm:col-span-2">
                  <ContactItem
                    icon={MapPin}
                    label="Location"
                    value="Coimbatore"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:sridharmarimuthu0603@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.82_0.14_85_/_0.6)] transition-transform hover:scale-105"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919786588466"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Call Directly
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 py-8 text-xs text-muted-foreground sm:flex-row">
          <div>
            © {new Date().getFullYear()} Sridhar Marimuthu · LAAMARIX INFRA. All rights reserved.
          </div>
        </footer>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const className =
    "group flex items-start gap-4 rounded-2xl border border-white/10 bg-background/40 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5";
  const inner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{label}</div>
        <div className="mt-0.5 truncate text-sm font-medium">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl" data-reveal>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-primary/60" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const easeProgress = progress * (2 - progress);
          setCount(Math.floor(easeProgress * value));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        };
        window.requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={counterRef}>{count}{suffix}</span>;
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-3 text-primary-foreground shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  ) : null;
}
