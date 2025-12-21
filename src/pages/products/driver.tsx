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

export default function Driver() {
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
      <div
        className="bg-black text-white selection:bg-sky-400 font-sans"
        style={{
          fontFamily:
            'InterVariable, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
        }}
      >
        {/* HERO — IMAGE ONLY, NO CROP (fix zoom) */}
        <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden border-b border-white/10 bg-black">
          {/* contain = never zoom/crop. black fills the rest */}
          <img
            src="/products/driver-hero.png"
            alt="8Robotics Motor Driver Board"
            className="absolute inset-0 w-full h-full object-contain object-center"
          />

          {/* soft vignette only (optional) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.75)_95%)] opacity-30" />
        </section>

        {/* BODY */}
        <div className="bg-white text-black">
          {/* Title + Intro */}
          <section className="py-20 md:py-24 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                Products
              </div>

              <h1 className="mt-6 font-sans font-medium leading-[1.05] tracking-[-0.02em] text-[clamp(2.2rem,4.2vw,4.2rem)]">
                8Robotics <span className={ACCENT}>Motor Driver</span>
              </h1>

              <p className="mt-6 text-[17px] md:text-[18px] leading-[1.75] text-black/70 max-w-4xl">
                The 8Robotics Motor Driver Board is a compact and intelligent control module designed to bring out the full
                performance of modern robotic actuators. Built for demanding motion-control applications, it delivers stable
                operation, fast response, and flexible communication options suitable for both hobby users and advanced robotics
                developers.
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

          {/* Accuracy */}
          <section className="py-20 md:py-24 px-8 md:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                Control
              </div>

              <h2 className="mt-6 text-[clamp(1.8rem,2.8vw,2.5rem)] font-semibold tracking-tight">
                Accuracy
              </h2>

              <p className="mt-6 text-[17px] leading-[1.75] text-black/70 max-w-4xl">
                The 8Robotics Motor Driver Board delivers high control accuracy with its integrated absolute encoder interface
                and fast feedback processing. Fine-resolution position sensing and rapid control updates enable smooth motion,
                precise positioning, and stable speed control. This level of precision makes it suitable for tasks requiring
                exact movement, such as manipulation, locmotion, or multi-axis coordination.
              </p>

              <div className="mt-14 h-px bg-black/10" />
            </div>
          </section>

          {/* Design & Materials — match expected layout (no crop, no zoom) */}
          <section className="border-t border-black/10">
            <div className="grid lg:grid-cols-2">
              {/* Left text block */}
              <div className="bg-black text-white px-8 md:px-16 py-20 flex items-center">
                <div className="max-w-xl">
                  <div className="text-xs tracking-[0.32em] uppercase text-white/55 font-medium">
                    Hardware
                  </div>

                  <h3 className="mt-6 text-[clamp(1.7rem,2.8vw,2.4rem)] font-semibold tracking-tight">
                    Design and Materials
                  </h3>

                  <p className="mt-6 text-[16px] md:text-[17px] leading-[1.85] text-white/70">
                    Industrial-grade components and PCB materials ensure consistent performance even under high load.
                    The board uses heat-resistant substrates, reinforced copper layers, and reliable connectors to maintain
                    signal quality and reduce electrical noise. These choices improve durability, prevent overheating, and
                    extend the operational lifespan in demanding environments.
                  </p>
                </div>
              </div>

              {/* Right image: keep full board visible */}
              <div className="relative bg-black min-h-[360px] lg:min-h-[520px] overflow-hidden">
                {/* contain keeps the full subject (no zoom crop) */}
                <img
                  src="/products/driver-dark.jpg"
                  alt="Driver PCB close-up"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  loading="lazy"
                />

                {/* subtle gradient to blend edges (optional, not a curtain) */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-black/35 pointer-events-none" />
              </div>
            </div>
          </section>

          {/* Data sheet + specs table (no crop) */}
          <section className="py-24 px-8 md:px-24 border-t border-black/10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.95fr] gap-14 items-start">
              {/* left */}
              <div className="min-w-0">
                <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                  Documentation
                </div>

                <h3 className="mt-6 text-[clamp(1.7rem,2.6vw,2.2rem)] font-semibold tracking-tight">
                  Data sheet
                </h3>

                <p className="mt-6 text-[17px] leading-[1.75] text-black/70 max-w-3xl">
                  The data sheet for the 8Robotics Motor Driver Board includes detailed electrical and mechanical specifications,
                  such as rated voltage, allowable voltage range, maximum continuous current, peak power output, and board dimensions.
                </p>

                <div className="mt-12 border-t border-black/10 pt-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-lg font-semibold tracking-tight">Packaging Contents</h4>
                      <ul className="mt-5 space-y-2 text-[16px] leading-[1.9] text-black/70">
                        <li>• Motor Driver Board × 1</li>
                        <li>• Matching Cable Harness × 1</li>
                        <li>• Certificate of Conformance × 1</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold tracking-tight">Related Accessories</h4>
                      <ul className="mt-5 space-y-2 text-[16px] leading-[1.9] text-black/70">
                        <li>• V2.0 Cable Kit</li>
                        <li>• V3.0 Cable Kit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* right specs image card */}
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="rounded-3xl overflow-hidden border border-black/10 shadow-sm bg-black">
                  {/* contain so table never crops */}
                  <img
                    src="/products/driver-specs.jpg"
                    alt="Motor Driver specifications table"
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
              {/* left form */}
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
                        placeholder="Tell us your requirements (voltage, current, encoder, quantity, timeline)..."
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

              {/* right info */}
              <aside className="lg:sticky lg:top-24 h-fit">
                <div className="border-l border-black/10 pl-6">
                  <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                    Quick notes
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="pb-6 border-b border-black/10">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">Use cases</div>
                      <div className={`mt-2 text-[15px] ${ACCENT}`}>Precision motion control</div>
                      <div className="mt-1 text-[13px] text-black/55">manipulation • locmotion • All BLDC brushless control  </div>
                    </div>

                    <div className="pb-6 border-b border-black/10">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">Accessories</div>
                      <div className={`mt-2 text-[15px] ${ACCENT}`}>Cable kits available</div>
                      <div className="mt-1 text-[13px] text-black/55">V2.0 • V3.0</div>
                    </div>

                    <div className="mt-8 border rounded-xl p-6 border-sky-400 bg-sky-400/5">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">Next step</div>
                      <h4 className={`mt-3 font-medium ${ACCENT}`}>Request a quote</h4>
                      <p className="mt-3 text-[14px] leading-[1.7] text-black/60">
                        Send quantity + timeline + requirements and we’ll respond with pricing and lead time.
                      </p>

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
