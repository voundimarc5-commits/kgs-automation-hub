import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageSquare, Briefcase, Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const { t } = useLang();
  const navigate = useNavigate();

  const plans = [
    {
      icon: MessageSquare,
      slug: "client-messaging",
      name: t("Client Messaging", "Messagerie Client"),
      desc: t(
        "Never miss a client message again. Every message receives an automatic and professional response.",
        "Ne manquez plus jamais un message client. Chaque message reçoit une réponse automatique et professionnelle."
      ),
    },
    {
      icon: Briefcase,
      slug: "business-organization",
      name: t("Business Organization", "Organisation Business"),
      desc: t(
        "Your business continues to run even when you are not available.",
        "Votre business continue de tourner même quand vous n'êtes pas disponible."
      ),
      popular: true,
    },
    {
      icon: Home,
      slug: "property-management",
      name: t("Property Management", "Gestion Locative"),
      desc: t(
        "Manage your rental properties remotely without stress.",
        "Gérez vos propriétés locatives à distance sans stress."
      ),
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("Our Offers", "Nos Offres")}
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
                  ? "glow-box border-2 border-primary/30 shadow-lg"
                  : "glow-border shadow-sm"
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
              <p className="text-muted-foreground text-sm mt-2 mb-6 flex-1">{plan.desc}</p>
              <button
                onClick={() => navigate(`/offer/${plan.slug}`)}
                className={`flex items-center justify-center gap-2 text-center py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary/40 text-primary hover:bg-primary/10"
                }`}
              >
                {t("See Details", "Voir les Détails")}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
