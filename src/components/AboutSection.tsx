import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

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
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("About Us", "À Propos")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-5">
            {t("Part of Kora Global Systems", "Membre de Kora Global Systems")}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
            {t(
              "KGS Automations is part of Kora Global Systems — a technology group focused on structuring, securing, and operating African businesses remotely. We bring enterprise-grade automation to small businesses, because every entrepreneur deserves tools that work.",
              "KGS Automations fait partie de Kora Global Systems — un groupe technologique dédié à la structuration, la sécurisation et l'exploitation des entreprises africaines à distance. Nous apportons l'automatisation de niveau entreprise aux petites entreprises, parce que chaque entrepreneur mérite des outils qui fonctionnent."
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
