import { useLang } from "@/contexts/LanguageContext";
import logo from "@/assets/kgs-logo.png";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="KGS Automations" className="h-8" />
        </div>
        <p className="text-muted-foreground text-sm text-center">
          {t(
            "A Kora Global Systems company. © 2026 All rights reserved.",
            "Une entreprise de Kora Global Systems. © 2026 Tous droits réservés."
          )}
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            {t("Privacy", "Confidentialité")}
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            {t("Terms", "Conditions")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
