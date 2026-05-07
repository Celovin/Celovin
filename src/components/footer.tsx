"use client";

import { useLocale } from "@/i18n/provider";

const productLinks = [
  { name: "Usan", href: "https://usan.ai" },
  { name: "TheLabForge", href: "https://thelabforge.com" },
  { name: "EditorKit Pro", href: "https://celovin.gumroad.com/l/editorkit-pro" },
  { name: "Luvoire", href: "https://github.com/Celovin/luvoire" },
  { name: "parabreak", href: "https://parabreak.com" },
];

const studioLinks = [{ name: "ara.studio", href: "https://ara.studio" }];

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();

  return (
    <footer className="relative border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
        {/* Brand */}
        <div>
          <p className="text-fg text-base font-medium tracking-tight">Celovin</p>
          <p className="mt-3 text-fg-muted text-sm leading-relaxed max-w-[28ch]">
            {t.footer.tagline}
          </p>
          <p className="mt-6 text-fg-dim text-xs leading-relaxed">
            {t.footer.bizNumber}
          </p>
        </div>

        {/* Products */}
        <div>
          <p className="text-fg-dim text-xs tracking-[0.2em] uppercase mb-4">
            {t.footer.productsHeading}
          </p>
          <ul className="space-y-2.5">
            {productLinks.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-fg-muted text-sm transition-colors hover:text-fg"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Studios */}
        <div>
          <p className="text-fg-dim text-xs tracking-[0.2em] uppercase mb-4">
            {t.footer.studiosHeading}
          </p>
          <ul className="space-y-2.5">
            {studioLinks.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted text-sm transition-colors hover:text-fg"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-fg-dim text-xs tracking-[0.2em] uppercase mb-4">
            {t.footer.companyHeading}
          </p>
          <ul className="space-y-2.5">
            <li>
              <a href="#philosophy" className="text-fg-muted text-sm transition-colors hover:text-fg">
                {t.footer.philosophyLink}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-fg-muted text-sm transition-colors hover:text-fg">
                {t.footer.contactLink}
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@celovin.com"
                className="text-fg-muted text-sm transition-colors hover:text-fg"
              >
                hello@celovin.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1200px] flex-col gap-2 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-fg-dim text-xs">
          &copy; {year} Celovin. All rights reserved.
        </p>
        <p className="text-fg-dim text-xs tracking-wide">
          Made with attention.
        </p>
      </div>
    </footer>
  );
}
