import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircleX, Clock, FolderX } from "lucide-react";

const ProblemSection = () => {
  const { t } = useLang();

  const problems = [
    {
      icon: MessageCircleX,
      title: t("Missed Messages", "Messages Manqués"),
      desc: t(
        "Clients message you on WhatsApp but you're too busy to reply. They move on to your competitor.",
        "Les clients vous écrivent sur WhatsApp mais vous êtes trop occupé pour répondre. Ils vont chez le concurrent."
      ),
    },
    {
      icon: Clock,
      title: t("No Time to Follow Up", "Pas le Temps de Relancer"),
      desc: t(
        "Potential deals slip through because there's no system to track who needs what.",
        "Les opportunités vous échappent car il n'y a aucun système pour suivre qui a besoin de quoi."
      ),
    },
    {
      icon: FolderX,
      title: t("Complete Disorganization", "Désorganisation Totale"),
      desc: t(
        "Orders, bookings, invoices — everything is scattered across chats with no structure.",
        "Commandes, réservations, factures — tout est éparpillé dans les conversations sans structure."
      ),
    },
  ];

  return (
    <section id="problem" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("The Problem", "Le Problème")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            {t("Your Business is Bleeding Clients", "Votre Business Perd des Clients")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 glow-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
