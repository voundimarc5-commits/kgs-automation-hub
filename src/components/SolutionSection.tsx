import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Bot, CalendarCheck, BarChart3, Send } from "lucide-react";

const SolutionSection = () => {
  const { t } = useLang();

  const steps = [
    {
      icon: Send,
      title: t("Auto-Reply Instantly", "Réponse Automatique Instantanée"),
      desc: t(
        "Every WhatsApp message gets an immediate, professional response — no client left waiting.",
        "Chaque message WhatsApp reçoit une réponse immédiate et professionnelle — aucun client n'attend."
      ),
    },
    {
      icon: CalendarCheck,
      title: t("Organize Automatically", "Organisation Automatique"),
      desc: t(
        "Bookings, orders, and requests are captured and sorted without you lifting a finger.",
        "Réservations, commandes et demandes sont capturées et triées sans effort de votre part."
      ),
    },
    {
      icon: Bot,
      title: t("Follow Up & Convert", "Relance & Conversion"),
      desc: t(
        "Automated follow-ups ensure no lead goes cold. Convert more inquiries into paying clients.",
        "Les relances automatiques garantissent qu'aucun prospect ne refroidit. Convertissez plus de demandes en clients payants."
      ),
    },
    {
      icon: BarChart3,
      title: t("Track & Improve", "Suivre & Améliorer"),
      desc: t(
        "See what's working, what's not, and continuously optimize your business operations.",
        "Voyez ce qui fonctionne, ce qui ne fonctionne pas, et optimisez continuellement vos opérations."
      ),
    },
  ];

  return (
    <section id="solution" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("The Solution", "La Solution")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            {t("Automations That Work for You", "Des Automatisations Qui Travaillent Pour Vous")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t(
              "Simple, reliable systems built for African business realities. No complex software — just results.",
              "Des systèmes simples et fiables conçus pour les réalités des entreprises africaines. Pas de logiciel complexe — juste des résultats."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 bg-card rounded-2xl p-7 glow-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
