import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const AboutSection = () => {
  const { t } = useLang();

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
          >
            <Building2 size={28} className="text-primary" />
          </motion.div>
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            {t("About Us", "À Propos")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
            {t("Part of Kora Global Systems", "Membre de Kora Global Systems")}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            {t(
              "KGS Automations is part of Kora Global Systems — a technology group focused on structuring, securing, and operating African businesses remotely. We bring enterprise-grade digital solutions to small businesses, because every entrepreneur deserves tools that work.",
              "KGS Automations fait partie de Kora Global Systems — un groupe technologique dédié à la structuration, la sécurisation et l'exploitation des entreprises africaines à distance. Nous apportons des solutions digitales de niveau entreprise aux petites entreprises, parce que chaque entrepreneur mérite des outils qui fonctionnent."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
