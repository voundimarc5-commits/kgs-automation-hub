import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <MessageSquare size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary">
              {t("WhatsApp-First Automations", "Automatisations WhatsApp-First")}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {t("Stop Losing Clients", "Arrêtez de Perdre des Clients")}
            <br />
            <span className="text-gradient">
              {t("on WhatsApp", "sur WhatsApp")}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {t(
              "Simple automations that capture every client, organize your business, and keep things running — even when you're not available.",
              "Des automatisations simples qui capturent chaque client, organisent votre business et gardent tout en marche — même quand vous n'êtes pas disponible."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity glow-box"
            >
              {t("Automate My Business", "Automatiser Mon Business")}
              <ArrowRight size={18} />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-secondary transition-colors"
            >
              {t("See How It Works", "Voir Comment Ça Marche")}
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { num: "70%", label: t("of clients lost to missed messages", "des clients perdus par messages manqués") },
            { num: "24/7", label: t("your business responds automatically", "votre business répond automatiquement") },
            { num: "5min", label: t("setup for most automations", "mise en place des automatisations") },
          ].map((s) => (
            <div key={s.num} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient font-display">{s.num}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
