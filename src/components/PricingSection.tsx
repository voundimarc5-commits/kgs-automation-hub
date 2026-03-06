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
        "Never miss a client message again. Every message receives an instant, professional response.",
        "Ne manquez plus jamais un message client. Chaque message reçoit une réponse instantanée et professionnelle."
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
          className="text-center mb-8"
        >
          <span className="text-primary text-xs font-semibold uppercase tracking-wider">
            {t("Our Offers", "Nos Offres")}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold mt-2">
            {t("Choose Your Solution", "Choisissez Votre Solution")}
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-lg mx-auto">
            {t(
              "All plans include continuous improvement and dedicated support.",
              "Tous les plans incluent l'amélioration continue et un support dédié."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-card rounded-xl p-5 flex flex-col ${
                plan.popular
                  ? "glow-box border border-primary/25 shadow-md"
                  : "glow-border shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-0.5 rounded-full">
                  {t("Most Popular", "Le Plus Populaire")}
                </div>
              )}
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <plan.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-base font-bold">{plan.name}</h3>
              <p className="text-muted-foreground text-xs mt-1.5 mb-4 flex-1 leading-relaxed">{plan.desc}</p>
              <button
                onClick={() => navigate(`/offer/${plan.slug}`)}
                className={`flex items-center justify-center gap-1.5 text-center py-2 rounded-lg font-semibold text-xs transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary/30 text-primary hover:bg-primary/10"
                }`}
              >
                {t("See Details", "Voir les Détails")}
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
