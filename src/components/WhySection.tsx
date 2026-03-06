import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, RefreshCw } from "lucide-react";

const WhySection = () => {
  const { t } = useLang();

  const reasons = [
    {
      icon: Globe,
      title: t("Built for Africa", "Conçu pour l'Afrique"),
      desc: t(
        "We understand low bandwidth, WhatsApp-first culture, and the realities of running a business on the continent.",
        "Nous comprenons la faible bande passante, la culture WhatsApp-first et les réalités de gérer un business sur le continent."
      ),
    },
    {
      icon: Zap,
      title: t("Simple & Effective", "Simple & Efficace"),
      desc: t(
        "No complicated software to learn. Our automations work in the tools you already use.",
        "Pas de logiciel compliqué à apprendre. Nos automatisations fonctionnent dans les outils que vous utilisez déjà."
      ),
    },
    {
      icon: Shield,
      title: t("Reliable & Secure", "Fiable & Sécurisé"),
      desc: t(
        "Part of Kora Global Systems, a technology group focused on structuring and securing African businesses.",
        "Membre de Kora Global Systems, un groupe technologique dédié à la structuration et à la sécurisation des entreprises africaines."
      ),
    },
    {
      icon: RefreshCw,
      title: t("Continuous Improvement", "Amélioration Continue"),
      desc: t(
        "We don't just set it up and leave. Monthly optimizations ensure your automations get better over time.",
        "On ne se contente pas d'installer et de partir. Des optimisations mensuelles assurent que vos automatisations s'améliorent avec le temps."
      ),
    },
  ];

  return (
    <section id="why" className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("Why KGS", "Pourquoi KGS")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            {t("Built Different", "Construit Différemment")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start bg-card rounded-xl p-6 glow-border shadow-sm"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <r.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
