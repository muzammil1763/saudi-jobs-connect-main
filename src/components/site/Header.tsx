import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/jobs", label: "Jobs" },
  { to: "/register", label: "Register" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "backdrop-blur bg-white/95 shadow-md border-b border-gold/30"
          : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/image.png"
            alt="Saudi Visa Embassy – Islamabad Logo"
            className="h-14 w-14 rounded-full object-cover shadow-sm border-2 border-gold/40"
          />
          <div className="leading-tight">
            <p className="font-display text-sm font-bold text-saudi-green-dark md:text-base">
              Saudi Visa Embassy – Islamabad
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gold md:text-xs">
              Jobs & Visa Portal
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-saudi-green bg-accent font-semibold" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-saudi-green hover:bg-accent"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/register"
            className="ml-2 inline-flex items-center rounded-md bg-gold px-4 py-2 text-sm font-semibold text-black shadow-card transition hover:bg-yellow-400"
          >
            Register CV
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md p-2 text-saudi-green-dark hover:bg-accent"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-saudi-green bg-accent font-semibold" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-saudi-green"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
