import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageSquare, Briefcase, Home, ArrowRight, Star } from "lucide-react";
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
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            {t("Our Offers", "Nos Offres")}
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold mt-2">
            {t("Choose Your Solution", "Choisissez Votre Solution")}
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto leading-relaxed">
            {t(
              "All plans include continuous improvement and dedicated support.",
              "Tous les plans incluent l'amélioration continue et un support dédié."
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/[0.06] to-primary/[0.02] border-2 border-primary/25 shadow-lg shadow-primary/10 scale-[1.03]"
                  : "elevated-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Star size={10} fill="currentColor" />
                  {t("Most Popular", "Le Plus Populaire")}
                </div>
              )}
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-4 shadow-sm">
                <plan.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mt-2 mb-6 flex-1 leading-relaxed">{plan.desc}</p>
              <button
                onClick={() => navigate(`/offer/${plan.slug}`)}
                className={`flex items-center justify-center gap-2 text-center py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20"
                    : "border border-primary/25 text-primary hover:bg-primary/5 hover:border-primary/40"
                }`}
              >
                {t("See Details", "Voir les Détails")}
                <ArrowRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
