"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/i18n/provider";

const sectionIds = ["products", "studios", "philosophy"] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { locale, t, toggleLocale } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLink = (href: string, id: string, label: string) => {
    const active = activeSection === id;
    return (
      <a
        href={href}
        className={`nav-link relative text-sm py-2 px-1 transition-colors ${
          active ? "text-fg" : "text-fg-muted hover:text-fg"
        }`}
      >
        {label}
        <span
          className={`nav-link-underline pointer-events-none absolute left-0 right-0 -bottom-0.5 h-px origin-center transition-transform duration-500 ease-out ${
            active ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/75 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-fg font-medium tracking-tight text-[1.1rem] py-2 transition-colors hover:text-accent"
        >
          Celovin
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLink("#products", "products", t.nav.products)}
          {navLink("#studios", "studios", t.nav.studios)}
          {navLink("#philosophy", "philosophy", t.nav.philosophy)}
          <button
            type="button"
            onClick={toggleLocale}
            className="text-fg-muted text-sm py-2 px-1 transition-colors hover:text-fg cursor-pointer"
            aria-label={locale === "ko" ? "Switch to English" : "한국어로 전환"}
          >
            {locale === "ko" ? "EN" : "KO"}
          </button>
          <a
            href="#contact"
            className="text-sm text-bg bg-fg rounded-full px-5 py-3 font-medium transition-all hover:bg-accent hover:text-bg"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
          aria-label={t.nav.menuLabel}
        >
          <span className={`block w-5 h-px bg-fg transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-fg transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-[69px] bg-bg/95 backdrop-blur-lg transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start px-6 pt-12 gap-8">
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="text-fg text-2xl font-medium transition-colors hover:text-accent"
          >
            {t.nav.products}
          </a>
          <a
            href="#studios"
            onClick={() => setMenuOpen(false)}
            className="text-fg text-2xl font-medium transition-colors hover:text-accent"
          >
            {t.nav.studios}
          </a>
          <a
            href="#philosophy"
            onClick={() => setMenuOpen(false)}
            className="text-fg text-2xl font-medium transition-colors hover:text-accent"
          >
            {t.nav.philosophy}
          </a>
          <button
            type="button"
            onClick={() => {
              toggleLocale();
              setMenuOpen(false);
            }}
            className="text-fg-muted text-2xl font-medium transition-colors hover:text-accent cursor-pointer"
          >
            {locale === "ko" ? "English" : "한국어"}
          </button>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-accent text-2xl font-medium transition-colors hover:text-fg"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
