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
        "No complicated software to learn. Our solutions work within the tools you already use.",
        "Pas de logiciel compliqué à apprendre. Nos solutions fonctionnent dans les outils que vous utilisez déjà."
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
        "We don't just set it up and leave. Monthly optimizations ensure your systems get better over time.",
        "On ne se contente pas d'installer et de partir. Des optimisations mensuelles assurent que vos systèmes s'améliorent avec le temps."
      ),
    },
  ];

  return (
    <section id="why" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/60" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            {t("Why KGS", "Pourquoi KGS")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            {t("Built Different", "Construit Différemment")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover flex gap-5 items-start rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                <r.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold mb-1.5">{r.title}</h3>
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
