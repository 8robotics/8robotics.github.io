import React, { useState } from "react";
import Layout from "@/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const ACCENT = "text-sky-500";
const ACCENT_RING = "ring-sky-400/25";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout noMainPadding>
      {/* Page-only typography override (match About/Culture) */}
      <div
        className="bg-black text-white selection:bg-sky-400 font-sans"
        style={{
          fontFamily:
            'InterVariable, Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
        }}
      >
        {/* HERO (use your robot head banner) */}
        <section
          className="relative h-[78vh] min-h-[560px] w-full overflow-hidden border-b border-white/10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/contact-hero.png")' }}
        >
          {/* subtle dark gradient for text readability (NOT a curtain over the whole image) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />

          {/* optional soft vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_90%)] opacity-40" />

          {/* left aligned content like your second screenshot */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-8 md:px-24 w-full">
              <div className="max-w-[720px]">
                <h1 className="font-sans font-semibold text-white leading-[1.05] tracking-[-0.02em] text-[clamp(2.2rem,4.4vw,4.1rem)]">
                  Let’s Connect.
                </h1>

                <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-white/75 max-w-[520px]">
                  Have a question, or idea in mind?
                  <br />
                  Our team is ready to respond.
                </p>

                <div className="mt-10">
                  <button
                    type="button"
                    onClick={() => scrollToId("contact-form")}
                    className={[
                      "inline-flex items-center justify-center rounded-full px-7 py-3.5",
                      "text-sm font-semibold text-white",
                      "bg-sky-500 hover:bg-sky-400 transition-colors",
                      "focus:outline-none focus:ring-4",
                      ACCENT_RING,
                    ].join(" ")}
                  >
                    Send a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BODY */}
        <div className="bg-white text-black">
          <section className="py-24 md:py-28 px-8 md:px-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12">
              {/* LEFT: FORM */}
              <div id="contact-form" className="min-w-0 scroll-mt-24">
                <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                  Message
                </div>

                <h2 className="mt-6 font-sans font-medium text-black max-w-3xl leading-[1.18] tracking-[-0.01em] text-[clamp(1.9rem,3.2vw,2.6rem)]">
                  Send us a message.
                </h2>

                <p className="mt-6 text-[17px] leading-[1.7] text-black/70 max-w-3xl">
                  Whether you're interested in colloboration, investments, or just want to learn more, we’re happy to chat.
                </p>

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
                        placeholder="Tell us about your interest in 8robotics..."
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
                        We reply within 1 business days
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              {/* RIGHT: CONTACT INFO */}
              <aside className="lg:sticky lg:top-24 h-fit">
                <div className="border-l border-black/10 pl-6">
                  <div className="text-xs tracking-[0.32em] uppercase text-black/45 font-medium">
                    Contact Info
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="pb-6 border-b border-black/10">
                      <div className="flex items-start gap-4">
                        <Mail className={`w-5 h-5 mt-0.5 ${ACCENT}`} />
                        <div>
                          <div className="text-xs tracking-[0.22em] uppercase text-black/50">Email</div>
                          <div className="mt-2 text-[15px] text-black/70">info@8robotics.tech</div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-6 border-b border-black/10">
                      <div className="flex items-start gap-4">
                        <Phone className={`w-5 h-5 mt-0.5 ${ACCENT}`} />
                        <div>
                          <div className="text-xs tracking-[0.22em] uppercase text-black/50">Phone</div>
                          <div className="mt-2 text-[15px] text-black/70">+98 903 134 7431</div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-6 border-b border-black/10">
                      <div className="flex items-start gap-4">
                        <MapPin className={`w-5 h-5 mt-0.5 ${ACCENT}`} />
                        <div>
                          <div className="text-xs tracking-[0.22em] uppercase text-black/50">Location</div>
                          <div className="mt-2 text-[15px] leading-[1.7] text-black/70">
                            Sharif University of Technology, Science and Technology Park,
                            <br />
                            Tehran, Iran
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 border rounded-xl p-6 border-sky-400 bg-sky-400/5">
                      <div className="text-xs tracking-[0.22em] uppercase text-black/50">
                        Partnerships
                      </div>
                      <h4 className={`mt-3 font-medium ${ACCENT}`}>Partnership opportunities</h4>
                      <p className="mt-3 text-[14px] leading-[1.7] text-black/60">
                        We're actively seeking strategic partners, investors, and collaborators in the robotics ecosystem.
                      </p>
                      <ul className="mt-4 text-[14px] leading-[1.9] text-black/65">
                        <li>• Technology partnerships</li>
                        <li>• Investment opportunities</li>
                        <li>• Research collaborations</li>
                        <li>• Strategic alliances</li>
                      </ul>
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
