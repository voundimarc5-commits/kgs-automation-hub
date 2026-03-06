import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { t } = useLang();

  return (
    <section id="cta" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card rounded-3xl p-10 md:p-16 text-center glow-box border border-primary/20 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t("Ready to Stop Losing Clients?", "Prêt à Arrêter de Perdre des Clients ?")}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            {t(
              "Get your automation installed in days, not months. Start capturing every opportunity today.",
              "Obtenez votre automatisation installée en jours, pas en mois. Commencez à capturer chaque opportunité dès aujourd'hui."
            )}
          </p>

          <a
            href="https://wa.me/message/YOUR_WHATSAPP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity"
          >
            {t("Request Installation Now", "Demander l'Installation Maintenant")}
            <ArrowRight size={20} />
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            {t("Free consultation • No commitment", "Consultation gratuite • Sans engagement")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
