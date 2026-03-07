import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Bot, CalendarCheck, BarChart3, Send } from "lucide-react";

const SolutionSection = () => {
  const { t } = useLang();

  const steps = [
    {
      icon: Send,
      title: t("Instant Professional Replies", "Réponses Professionnelles Instantanées"),
      desc: t(
        "Every WhatsApp message gets an immediate, professional response — no client left waiting.",
        "Chaque message WhatsApp reçoit une réponse immédiate et professionnelle — aucun client n'attend."
      ),
    },
    {
      icon: CalendarCheck,
      title: t("Smart Organization", "Organisation Intelligente"),
      desc: t(
        "Bookings, orders, and requests are captured and sorted without you lifting a finger.",
        "Réservations, commandes et demandes sont capturées et triées sans effort de votre part."
      ),
    },
    {
      icon: Bot,
      title: t("Follow Up & Convert", "Relance & Conversion"),
      desc: t(
        "Smart follow-ups ensure no lead goes cold. Convert more inquiries into paying clients.",
        "Des relances intelligentes garantissent qu'aucun prospect ne refroidit. Convertissez plus de demandes en clients payants."
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
    <section id="solution" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/60" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            {t("The Solution", "La Solution")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            {t("Solutions That Work for You", "Des Solutions Qui Travaillent Pour Vous")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            {t(
              "Simple, reliable systems built for African business realities. No complex software — just results.",
              "Des systèmes simples et fiables conçus pour les réalités des entreprises africaines. Pas de logiciel complexe — juste des résultats."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover flex gap-5 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                <s.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold mb-1.5">{s.title}</h3>
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
