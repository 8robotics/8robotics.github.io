import { Button } from "@/components/ui/button"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="bg-white border-t border-black/5 pb-12 pt-16 font-sans" 
      style={{ fontFamily: 'InterVariable, Inter, ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
      <div className="px-8 md:px-24">
        <div className="md:flex md:items-center md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-3 transition-opacity hover:opacity-80"
            aria-label={brandName}
          >
            {logo}
            <span className="font-semibold text-xl tracking-tight text-black">{brandName}</span>
          </a>
          
          <ul className="flex list-none mt-8 md:mt-0 space-x-4">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full border border-black/10 hover:border-sky-500/50 hover:bg-sky-50 hover:text-sky-500 transition-all"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-black/10 mt-10 pt-10 lg:grid lg:grid-cols-10 items-start">
          <nav className="lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-4 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-4 shrink-0">
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-[0.2em] font-medium text-black/60 hover:text-sky-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 lg:mt-4 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-4 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-4 shrink-0">
                  <a
                    href={link.href}
                    className="text-[13px] text-black/40 hover:text-black transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 text-[13px] leading-6 text-black/45 whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div className="font-medium text-black/60">{copyright.text}</div>
            {copyright.license && <div className="mt-1 opacity-70">{copyright.license}</div>}
          </div>
        </div>
      </div>
    </footer>
  )
}