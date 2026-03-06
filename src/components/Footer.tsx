import { useLang } from "@/contexts/LanguageContext";
import logo from "@/assets/kgs-logo.png";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-card border-t border-border pt-12 pb-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img src={logo} alt="KGS Automations" className="h-16 mb-4 animate-logo-pulse" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              {t(
                "KGS Automations is part of Kora Global Systems — a technology group focused on structuring, securing, and operating African businesses remotely. Our mission: helping African businesses operate smoothly through simple automation systems.",
                "KGS Automations fait partie de Kora Global Systems — un groupe technologique dédié à la structuration, la sécurisation et l'exploitation des entreprises africaines à distance. Notre mission : aider les entreprises africaines à fonctionner efficacement grâce à des systèmes d'automatisation simples."
              )}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("Contact", "Contact")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary flex-shrink-0" />
                <a href="mailto:contact@koraglobalsystems.com" className="hover:text-primary transition-colors break-all">
                  contact@koraglobalsystems.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary flex-shrink-0" />
                <a href="https://wa.me/message/YOUR_WHATSAPP_LINK" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{t("Operating remotely across Africa", "Opérant à distance à travers l'Afrique")}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("Legal", "Légal")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  {t("Privacy Policy", "Politique de Confidentialité")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  {t("Terms of Service", "Conditions d'Utilisation")}
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-primary transition-colors">
                  {t("Disclaimer", "Avertissement")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            {t(
              "© 2026 KGS Automations — A Kora Global Systems company. All rights reserved.",
              "© 2026 KGS Automations — Une entreprise de Kora Global Systems. Tous droits réservés."
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
