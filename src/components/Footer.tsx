import { Mail } from "lucide-react";
import { Footer as UIFooter } from "@/components/ui/footer";

function Footer() {
  return (
    <div className="w-full bg-white">
      <UIFooter
        logo={<img src="/logo.svg" alt="8Robotics Logo" className="h-9 w-9" />}
        brandName="8Robotics"
        socialLinks={[
          {
            // The icon color is handled by the UI component's hover states now
            icon: <Mail className="h-5 w-5" />,
            href: "mailto:info@8robotics.tech",
            label: "Email",
          },
        ]}
        mainLinks={[
          { href: "/about", label: "About" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          // Added example legal links to match the layout
          // { href: "/privacy", label: "Privacy Policy" },
          // { href: "/terms", label: "Terms of Service" },
        ]}
        copyright={{
          text: "© 2025 8Robotics",
          license: "Innovation in Motion", // Changed from "All rights reserved" for a more premium feel
        }}
      />
    </div>
  );
}

export default Footer;