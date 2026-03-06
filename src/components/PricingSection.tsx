import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Check, MessageSquare, Briefcase, Home } from "lucide-react";

const PricingSection = () => {
  const { t } = useLang();

  const plans = [
    {
      icon: MessageSquare,
      name: t("Client Messaging", "Messagerie Client"),
      desc: t(
        "Automatic responses & client capture on WhatsApp",
        "Réponses automatiques & capture de clients sur WhatsApp"
      ),
      price: t("From $150/mo", "À partir de 150$/mois"),
      features: [
        t("Auto-reply to every message", "Réponse auto à chaque message"),
        t("Client info capture", "Capture d'infos client"),
        t("Welcome & away messages", "Messages de bienvenue & d'absence"),
        t("Basic analytics", "Analyses de base"),
      ],
    },
    {
      icon: Briefcase,
      name: t("Business Organization", "Organisation Business"),
      desc: t(
        "Full workflow automation & follow-ups",
        "Automatisation complète des flux & relances"
      ),
      price: t("From $300/mo", "À partir de 300$/mois"),
      popular: true,
      features: [
        t("Everything in Client Messaging", "Tout du pack Messagerie Client"),
        t("Order & booking management", "Gestion des commandes & réservations"),
        t("Automated follow-ups", "Relances automatiques"),
        t("Team notifications", "Notifications d'équipe"),
        t("Monthly optimization", "Optimisation mensuelle"),
      ],
    },
    {
      icon: Home,
      name: t("Property Management", "Gestion Locative"),
      desc: t(
        "Airbnb & rental automation",
        "Automatisation Airbnb & locations"
      ),
      price: t("From $250/mo", "À partir de 250$/mois"),
      features: [
        t("Guest auto-messaging", "Messagerie auto pour les hôtes"),
        t("Check-in/out automation", "Automatisation check-in/out"),
        t("Cleaning team coordination", "Coordination équipe ménage"),
        t("Multi-property support", "Support multi-propriétés"),
      ],
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("Pricing", "Tarifs")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            {t("Choose Your Automation", "Choisissez Votre Automatisation")}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {t(
              "All plans include continuous improvement and dedicated support.",
              "Tous les plans incluent l'amélioration continue et un support dédié."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative bg-card rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "glow-box border-2 border-primary/50"
                  : "glow-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {t("Most Popular", "Le Plus Populaire")}
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <plan.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-2 mb-4">{plan.desc}</p>
              <div className="text-2xl font-bold text-gradient font-display mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary/40 text-primary hover:bg-primary/10"
                }`}
              >
                {t("Request Installation", "Demander l'Installation")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
