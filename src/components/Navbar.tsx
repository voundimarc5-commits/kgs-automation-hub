import { useLang } from "@/contexts/LanguageContext";
import logo from "@/assets/kgs-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#problem", label: t("Problem", "Problème") },
    { href: "#solution", label: t("Solution", "Solution") },
    { href: "#pricing", label: t("Pricing", "Tarifs") },
    { href: "#why", label: t("Why KGS", "Pourquoi KGS") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="KGS Automations" className="h-10" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            {t("Get Started", "Commencer")}
          </a>
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="text-xs font-semibold border border-primary/40 text-primary px-3 py-1.5 rounded-md hover:bg-primary/10 transition-colors"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="text-xs font-semibold border border-primary/40 text-primary px-3 py-1.5 rounded-md"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="block bg-primary text-primary-foreground text-center px-5 py-2 rounded-lg text-sm font-semibold">
            {t("Get Started", "Commencer")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
