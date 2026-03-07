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
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            {t("The Problem", "Le Problème")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            {t("Your Business is Bleeding Clients", "Votre Business Perd des Clients")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="elevated-card flex flex-col gap-4 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <p.icon size={22} className="text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
