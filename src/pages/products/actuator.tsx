import React, { useState } from "react";
import Layout from "@/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ACCENT = "text-sky-500";
const ACCENT_RING = "ring-sky-400/25";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Actuator() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout noMainPadding>
      {/* Typography override (match Contact/About style) */}
      <div
        className="bg-black text-white selection:bg-sky-400 font-sans"
        style={{
          fontFamily:
            'InterVariable, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
        }}
      >
        {/* HERO — IMAGE ONLY (no text) */}
        <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden border-b border-white/10 bg-black">
          <img
            src="/products/actuator-hero-exploded.jpg"
            alt="8Robotics Actuator exploded view"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* subtle vignette only (keeps it premium, not a curtain) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_95%)] opacity-35" />
        </section>

        {/* BODY */}
        <div className="bg-white text-black">
          {/* Title + Intro (moved below hero) */}
          <section className="py-20 md:py-24 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                Products
              </div>

              <h1 className="mt-6 font-sans font-medium leading-[1.05] tracking-[-0.02em] text-[clamp(2.2rem,4.2vw,4.2rem)]">
                8Robotics <span className={ACCENT}>Actuator</span>
              </h1>

              <p className="mt-6 text-[17px] md:text-[18px] leading-[1.75] text-black/70 max-w-4xl">
                The 8Robotics <span className="italic">A Series</span> is a highly integrated, modular power core designed to
                simplify the development of advanced robotic systems. By combining a high-efficiency brushless motor,
                a 6:1 planetary gearbox, and an intelligent driver into a single unit, we have eliminated the complexity
                of sourcing and assembling separate components.
              </p>

              <div className="mt-10">
                <button
                  type="button"
                  onClick={() => scrollToId("order")}
                  className={[
                    "inline-flex items-center justify-center rounded-full px-7 py-3.5",
                    "text-sm font-semibold text-white",
                    "bg-sky-500 hover:bg-sky-400 transition-colors",
                    "focus:outline-none focus:ring-4",
                    ACCENT_RING,
                  ].join(" ")}
                >
                  Contact us to order
                </button>
              </div>

              <div className="mt-14 h-px bg-black/10" />
            </div>
          </section>

          {/* Highly Integrated Power Module + Front/Back Image */}
          <section className="py-20 md:py-24 px-8 md:px-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
              {/* Left */}
              <div className="min-w-0">
                <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                  Highly Integrated Power Module
                </div>

                <h2 className="mt-6 text-[clamp(1.8rem,2.8vw,2.5rem)] font-semibold tracking-tight">
                  Highly Integrated Power Module
                </h2>

                <p className="mt-6 text-[17px] leading-[1.75] text-black/70 max-w-3xl">
                  Instead of sourcing and mounting a separate motor, gearbox, encoder set, driver board, and all accompanying
                  fixtures, the 8Robotics Actuator provides a single modular power core.
                </p>

                <p className="mt-6 text-[17px] leading-[1.75] text-black/70">
                  Its integrated construction offers multiple benefits:
                </p>

                <ul className="mt-6 space-y-2 text-[16px] leading-[1.9] text-black/70">
                  <li>• High torque density</li>
                  <li>• Faster mechanical assembly with minimal alignment issues</li>
                  <li>• Improved reliability and repeatability</li>
                  <li>• Compact, lightweight form factor</li>
                  <li>• Lower development time for robots and automation systems</li>
                </ul>

                <div className="mt-10 border-t border-black/10 pt-10">
                  <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                    Internals
                  </div>
                  <p className="mt-5 text-[17px] leading-[1.75] text-black/70">
                    Internally, the module combines:
                  </p>
                  <ul className="mt-4 space-y-2 text-[16px] leading-[1.9] text-black/70">
                    <li>• High-efficiency brushless DC motor</li>
                    <li>• 6:1 planetary gear reducer</li>
                    <li>• Embedded FOC driver</li>
                  </ul>
                </div>
              </div>

              {/* Right image card — improved */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="rounded-3xl border border-black/10 bg-white shadow-sm overflow-hidden">
                  <div className="p-6">
                    <img
                      src="/products/actuator-front-back.jpg"
                      alt="Actuator front and back view"
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Better caption */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-xs tracking-[0.28em] uppercase text-black/40">
                    Front / Back View
                  </div>
                  <div className="text-xs text-black/35">A Series</div>
                </div>
              </div>
            </div>

            <div className="mt-20 h-px bg-black/10 max-w-6xl mx-auto" />
          </section>

          {/* High Torque Performance */}
          <section className="py-20 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                Performance
              </div>

              <h3 className="mt-6 text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold tracking-tight">
                High Torque Performance
              </h3>

              <p className="mt-6 text-[17px] leading-[1.75] text-black/70 max-w-4xl">
                The actuator delivers impressive torque relative to size and weight:
              </p>

              <ul className="mt-6 space-y-2 text-[16px] leading-[1.9] text-black/70">
                <li>
                  • Rated Torque: <span className="font-medium text-black">18 Nm</span> (continuous, thermally safe operation)
                </li>
                <li>
                  • Peak Torque: <span className="font-medium text-black">53 Nm</span> (short-duration dynamic loads, impacts, and rapid maneuvers)
                </li>
              </ul>

              <p className="mt-8 text-[17px] leading-[1.75] text-black/70 max-w-4xl">
                This torque range provides the force necessary for heavy-duty robotic joints while preventing overheating
                during sustained operation.
              </p>
            </div>

            <div className="mt-20 h-px bg-black/10 max-w-6xl mx-auto" />
          </section>

          {/* Neon image + FOC section */}
          <section className="border-t border-black/10">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[360px] lg:min-h-[520px] bg-black">
                <img
                  src="/products/actuator-neon.jpg"
                  alt="Actuator FOC neon illustration"
                  className="absolute inset-0 w-full h-full object-cover opacity-95"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="bg-black text-white px-8 md:px-16 py-20">
                <div className="text-xs tracking-[0.32em] uppercase text-white/50 font-medium">
                  Control
                </div>

                <h3 className="mt-6 text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold tracking-tight">
                  Efficient FOC Drive With Built-in Protection
                </h3>

                <p className="mt-6 text-[16px] md:text-[17px] leading-[1.8] text-white/70 max-w-2xl">
                  The internal driver uses Field-Oriented Control (FOC) for:
                </p>

                <ul className="mt-6 space-y-2 text-[15px] md:text-[16px] leading-[1.9] text-white/70">
                  <li>• Smooth torque output</li>
                  <li>• High low-speed performance</li>
                  <li>• Reduced noise and vibration</li>
                  <li>• Strong efficiency and thermal stability</li>
                </ul>

                <div className="mt-10 border-t border-white/10 pt-10">
                  <p className="text-[16px] md:text-[17px] leading-[1.8] text-white/70 max-w-2xl">
                    Integrated protections include:
                  </p>
                  <ul className="mt-5 space-y-2 text-[15px] md:text-[16px] leading-[1.9] text-white/70">
                    <li>• Overcurrent protection</li>
                    <li>• Overvoltage / undervoltage protection</li>
                    <li>• Overtemperature protection</li>
                  </ul>

                  <p className="mt-8 text-[16px] md:text-[17px] leading-[1.8] text-white/70 max-w-2xl">
                    These safeguards maintain continuous, reliable operation even under demanding load conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Supports Customization */}
          <section className="py-20 px-8 md:px-24 border-t border-black/10">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-2xl border border-sky-400 bg-sky-400/5 p-8 md:p-10">
                <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                  Customization
                </div>

                <h3 className={`mt-4 text-[clamp(1.5rem,2.2vw,2rem)] font-semibold tracking-tight ${ACCENT}`}>
                  Supports Customization
                </h3>

                <p className="mt-4 text-[16px] md:text-[17px] leading-[1.85] text-black/70 max-w-4xl">
                  8Robotics offers configurable parameters, interface options, and tailored hardware adjustments to meet
                  specific research, industrial, or robotic application needs.
                </p>
              </div>
            </div>
          </section>

          {/* Interface + Specs image */}
          <section className="py-24 px-8 md:px-24 border-t border-black/10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.95fr] gap-14 items-start">
              <div className="min-w-0">
                <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                  Interfaces
                </div>

                <h3 className="mt-6 text-[clamp(1.7rem,2.6vw,2.2rem)] font-semibold tracking-tight">
                  Flexible Interface Design
                </h3>

                <p className="mt-6 text-[17px] leading-[1.75] text-black/70 max-w-3xl">
                  The actuator features a clean, practical connector layout:
                </p>

                <ul className="mt-6 space-y-2 text-[16px] leading-[1.9] text-black/70">
                  <li>• XT60PW-M + XT60PW-F: power</li>
                  <li>• GH Connector: communication</li>
                </ul>

                <p className="mt-8 text-[17px] leading-[1.75] text-black/70 max-w-3xl">
                  This design reduces cabling complexity while making configuration more accessible.
                </p>

                <div className="mt-12 border-t border-black/10 pt-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-lg font-semibold tracking-tight">Packaging Contents</h4>
                      <ul className="mt-5 space-y-2 text-[16px] leading-[1.9] text-black/70">
                        <li>• 8Robotics Actuator (with built-in driver) ×1</li>
                        <li>• Power/CAN Cable ×1</li>
                        <li>• Serial Cable ×1</li>
                        <li>• Certificate of Conformance ×1</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold tracking-tight">Related Accessories</h4>
                      <ul className="mt-5 space-y-2 text-[16px] leading-[1.9] text-black/70">
                        <li>• R-Link V3.0</li>
                        <li>• Driver Board V3.0 (Large)</li>
                        <li>• Wiring Package V3.0</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs image */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-black">
                  <img
                    src="/products/actuator-specs.jpg"
                    alt="Actuator specifications"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 text-xs tracking-[0.28em] uppercase text-black/40">
                  Specifications
                </div>
              </div>
            </div>
          </section>

          {/* Contact to order */}
          <section id="order" className="py-24 md:py-28 px-8 md:px-24 border-t border-black/10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12">
              {/* Left form */}
              <div className="min-w-0 scroll-mt-24">
                <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                  Contact
                </div>

                <h3 className="mt-6 font-sans font-medium text-black leading-[1.18] tracking-[-0.01em] text-[clamp(1.9rem,3.2vw,2.6rem)]">
                  Contact us to order
                </h3>

                <div className="mt-10 border-t border-black/10 pt-10">
                  <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs tracking-[0.22em] uppercase text-black/50 mb-2">
                          Name
                        </label>
                        <Input
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 border-black/15 focus-visible:ring-4 focus-visible:ring-sky-400/25"
                        />
                      </div>

                      <div>
                        <label className="block text-xs tracking-[0.22em] uppercase text-black/50 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12 border-black/15 focus-visible:ring-4 focus-visible:ring-sky-400/25"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs tracking-[0.22em] uppercase text-black/50 mb-2">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us what you’re building and the actuator specs you need..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="border-black/15 focus-visible:ring-4 focus-visible:ring-sky-400/25"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Button type="submit" className="h-12 rounded-full px-7 bg-black text-white hover:bg-black/90">
                        Send message
                      </Button>

                      <span className="text-xs tracking-[0.22em] uppercase text-black/35">
                        We reply within 1 business day
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right info */}
              <aside className="lg:sticky lg:top-24 h-fit">
                <div className="border-l border-black/10 pl-6">
                  <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                    Summary
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="pb-6 border-b border-black/10">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">
                        Rated torque
                      </div>
                      <div className={`mt-2 text-[15px] ${ACCENT}`}>18 Nm</div>
                      <div className="mt-1 text-[13px] text-black/55">continuous</div>
                    </div>

                    <div className="pb-6 border-b border-black/10">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">
                        Peak torque
                      </div>
                      <div className={`mt-2 text-[15px] ${ACCENT}`}>53 Nm</div>
                      <div className="mt-1 text-[13px] text-black/55">short duration</div>
                    </div>

                    <div className="pb-6 border-b border-black/10">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">
                        Gear ratio
                      </div>
                      <div className={`mt-2 text-[15px] ${ACCENT}`}>6 : 1</div>
                    </div>

                    <div className="mt-8 border rounded-xl p-6 border-sky-400 bg-sky-400/5">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">
                        Accessories
                      </div>
                      <h4 className={`mt-3 font-medium ${ACCENT}`}>Optional add-ons</h4>
                      <ul className="mt-4 text-[14px] leading-[1.9] text-black/65">
                        <li>• R-Link V3.0</li>
                        <li>• Driver Board V3.0 (Large)</li>
                        <li>• Wiring Package V3.0</li>
                      </ul>

                      <button
                        type="button"
                        onClick={() => scrollToId("order")}
                        className={[
                          "mt-6 inline-flex items-center justify-center rounded-full px-6 py-3",
                          "text-xs font-semibold uppercase tracking-[0.3em]",
                          "bg-black text-white hover:bg-black/90 transition-colors",
                          "focus:outline-none focus:ring-4",
                          ACCENT_RING,
                        ].join(" ")}
                      >
                        Request quote →
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
