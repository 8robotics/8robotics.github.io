import React, { useEffect, useMemo, useState } from "react";
import Layout from "@/Layout";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import { ChevronDown } from "lucide-react";

const BRAND_BLUE_SOLID = "text-sky-500";

const SECTIONS = [
  { id: "about", label: "ABOUT US", number: "01" },
  { id: "first-step", label: "FIRST STEP", number: "02" },
  { id: "solution", label: "SOLUTION", number: "03" },
  { id: "team", label: "OUR TEAM", number: "04" },
];

function useScrollSpy(sectionIds: string[], offsetPx = 140) {
  const [activeId, setActiveId] = useState(sectionIds?.[0] ?? "");

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: `-${offsetPx}px 0px -60% 0px`,
        threshold: [0.01, 0.1, 0.2],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sectionIds, offsetPx]);

  return activeId;
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [show, setShow] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [node]);

  return (
    <div
      ref={setNode}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function ScrollNav({
  activeId,
  onJump,
}: {
  activeId: string;
  onJump: (id: string) => void;
}) {
  return (
    <aside className="hidden lg:block sticky top-24 h-[calc(100vh-6rem)]">
      <div className="border-l border-black/10 pl-6">
        <ul className="space-y-4">
          {SECTIONS.map((s) => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id}>
                <button type="button" onClick={() => onJump(s.id)} className="w-full text-left group">
                  <div className="flex items-center gap-4">
                    <span
                      className={[
                        "text-xs tracking-[0.2em] transition-colors w-8",
                        isActive ? BRAND_BLUE_SOLID : "text-black/35",
                      ].join(" ")}
                    >
                      {s.number}
                    </span>

                    <span
                      className={[
                        "text-xs tracking-[0.22em] uppercase transition-colors",
                        isActive ? "text-black" : "text-black/70",
                      ].join(" ")}
                    >
                      {s.label}
                    </span>
                  </div>

                  <div className="mt-3 h-px bg-black/10 w-full group-hover:bg-black/20 transition-colors relative overflow-hidden">
                    <div
                      className={[
                        "absolute left-0 top-0 h-px w-full transition-transform duration-300 bg-sky-400/80",
                        isActive ? "translate-x-0" : "-translate-x-full",
                      ].join(" ")}
                    />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-xs tracking-[0.22em] text-black/35 uppercase">
          About Index
        </div>
      </div>
    </aside>
  );
}

function MobileSectionJump({
  activeId,
  onJump,
}: {
  activeId: string;
  onJump: (id: string) => void;
}) {
  return (
    <div className="lg:hidden sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="text-xs tracking-[0.22em] uppercase text-black/60">Section</div>

        <div className="relative">
          <select
            value={activeId}
            onChange={(e) => onJump(e.target.value)}
            className="appearance-none text-xs tracking-[0.22em] uppercase bg-white border border-black/15 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-4 ring-sky-400/20"
          >
            {SECTIONS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.number} {s.label}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-black/50 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

function Eyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-xs tracking-[0.28em] text-black/35">{number}</span>
      <span className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">{label}</span>
    </div>
  );
}

function SectionTitle({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizes =
    size === "lg"
      ? "text-[clamp(1.9rem,3.5vw,2.75rem)]"
      : size === "sm"
      ? "text-[clamp(1.6rem,2.7vw,2.25rem)]"
      : "text-[clamp(1.8rem,3.1vw,2.5rem)]";

  return (
    <h3
      className={[
        "font-sans font-medium text-black max-w-3xl",
        "leading-[1.18] tracking-[-0.01em]",
        sizes,
      ].join(" ")}
    >
      {children}
    </h3>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return <p className="mt-6 text-[17px] leading-[1.7] text-black/70 max-w-3xl">{children}</p>;
}

export default function About() {
  const sectionIds = useMemo(() => SECTIONS.map((s) => s.id), []);
  const activeId = useScrollSpy(sectionIds, 140);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout noMainPadding>
      <div
        className="bg-black text-white selection:bg-sky-400 font-sans"
        style={{
          fontFamily:
            'InterVariable, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
        }}
      >
        {/* HERO — unchanged */}
        <section
          className="relative h-screen w-full flex items-center overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/aboutus.png")' }}
        >
          <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
            <ShaderAnimation />
          </div>
        </section>

        <div className="bg-white text-black">
          <MobileSectionJump activeId={activeId} onJump={jumpTo} />

          <section className="py-32 px-8 md:px-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12">
              <main className="min-w-0">
                {/* ABOUT */}
                <div id="about" className="scroll-mt-28">
                  <Reveal>
                    <Eyebrow number="01" label="ABOUT US" />
                    <SectionTitle size="lg">About Us</SectionTitle>
                    <BodyText>
                      At 8 Robotics, our mission is bold: to transform Ilia into a superhuman. A superhuman knows everything,
                      goes everywhere, and does everything. This is a long-term vision—one that will take years of innovation—
                      but every great achievement begins with a first step.
                    </BodyText>
                    <div className="mt-14 h-px bg-black/10" />
                  </Reveal>
                </div>

                {/* FIRST STEP */}
                <div id="first-step" className="scroll-mt-28 mt-20">
                  <Reveal>
                    <Eyebrow number="02" label="OUR FIRST STEP" />
                    <SectionTitle size="lg">Our First Step: Autonomous Delivery</SectionTitle>
                    <BodyText>
                      Ilia’s first mission is to become a fully autonomous delivery robot—a 24/7 motor-bike-like courier that is
                      fast, safe, reliable, and unstoppable in any weather. Rain, heat, or midnight hours—Ilia delivers. No need
                      for oversized cars to transport a single falafel sandwich.
                    </BodyText>
                    <div className="mt-14 h-px bg-black/10" />
                  </Reveal>
                </div>

                {/* SOLUTION */}
                <div id="solution" className="scroll-mt-28 mt-20">
                  <Reveal>
                    <Eyebrow number="03" label="OUR SOLUTION" />
                    <SectionTitle>Our solution is:</SectionTitle>

                    <div className="mt-8 max-w-3xl">
                      <ul className="space-y-3 text-[17px] leading-[1.7] text-black/70">
                        <li>• Sustainable, with zero CO₂ emissions</li>
                        <li>• Efficient, reducing traffic and congestion</li>
                        <li>• Reliable, minimizing human error</li>
                        <li>• Always available, even for urgent late-night deliveries, including medicine from pharmacies</li>
                      </ul>
                    </div>

                    <div className="mt-14 h-px bg-black/10" />
                  </Reveal>
                </div>

                {/* TEAM */}
                <div id="team" className="scroll-mt-28 mt-20">
                  <Reveal>
                    <Eyebrow number="04" label="OUR TEAM" />
                    <SectionTitle size="sm">Optimistic and Realistic</SectionTitle>
                    <BodyText>
                      With over 10 years of experience in robotics and AI, our team built the first humanoid robot in West Asia.
                      We pursue one of humanity’s greatest engineering challenges, but we do it thoughtfully—step by step,
                      grounded in real applications and real impact. That’s why we move one meaningful step at a time, starting
                      with autonomous delivery everywhere, anytime.
                    </BodyText>

                    <SectionTitle size="sm" className="mt-12">
                      Lightweight and Agile
                    </SectionTitle>
                    <BodyText>
                      A world-changing dream cannot be built with slow, conventional structures. We operate as a lightweight,
                      agile team, keeping inertia low and momentum high. This lets us build faster, learn quicker. This philosophy
                      shapes not just our culture, but the mechanical engineering of Ilia itself: fast, minimal, elegant, and
                      efficient.
                    </BodyText>

                    <SectionTitle size="sm" className="mt-12">
                      Holistic Engineering
                    </SectionTitle>
                    <BodyText>
                      Robotics is not just hardware or just software—it is the harmony between both. Focusing on only one creates
                      caricatures. That’s why our team unites deep expertise in mechanics, control, AI, and software, allowing
                      Ilia to become not only intelligent, but also physically capable of navigating environments where most
                      robots fail.
                    </BodyText>
                  </Reveal>
                </div>
              </main>

              <ScrollNav activeId={activeId} onJump={jumpTo} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
