import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  const { t } = useLang();

  return (
    <section id="cta" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-primary/[0.04] to-accent/[0.08]" />
          <div className="absolute inset-0 border border-primary/15 rounded-2xl" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles size={28} className="text-primary" />
            </motion.div>

            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t("Ready to Stop Losing Clients?", "Prêt à Arrêter de Perdre des Clients ?")}
            </h2>
            <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto leading-relaxed">
              {t(
                "Get your solution installed in days, not months. Start capturing every opportunity today.",
                "Obtenez votre solution installée en jours, pas en mois. Commencez à capturer chaque opportunité dès aujourd'hui."
              )}
            </p>

            <a
              href="https://wa.me/message/YOUR_WHATSAPP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35"
            >
              {t("Request Installation Now", "Demander l'Installation Maintenant")}
              <ArrowRight size={20} />
            </a>

            <p className="text-xs text-muted-foreground mt-4">
              {t("Free consultation • No commitment", "Consultation gratuite • Sans engagement")}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <a href="mailto:contact@koraglobalsystems.com" className="hover:text-primary transition-colors">
                contact@koraglobalsystems.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
