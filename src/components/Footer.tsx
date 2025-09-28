
import { Github, Mail } from "lucide-react";
import { Footer as UIFooter } from "@/components/ui/footer";

function Footer() {
  return (
      <div className="w-full">
        <UIFooter
          logo={<img src="/logo.svg" alt="8Robotics Logo" className="h-10 w-10" />}
          brandName="8Robotics"
          socialLinks={[
            {
              icon: <Mail className="h-5 w-5" />,
              href: "mailto:info@8robotics.tech",
              label: "Email",
            },
          ]}
          mainLinks={[
            { href: "/technology", label: "Technology" },
            { href: "/about", label: "About" },
            { href: "/news", label: "News" },
            { href: "/contact", label: "Contact" },
          ]}
          legalLinks={[]}
          copyright={{
            text: "© 2025 8Robotics",
            license: "All rights reserved",
          }}
        />
      </div>
  );
}

export default Footer;
