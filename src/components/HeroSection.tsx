import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import heroImg from "@/assets/african-salon.jpg";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-[90vh] flex items-center section-padding pt-28 overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <MessageSquare size={14} className="text-primary" />
              <span className="text-xs font-medium text-primary">
                {t("WhatsApp-First Automations", "Automatisations WhatsApp-First")}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              {t("Stop Losing Clients", "Arrêtez de Perdre des Clients")}
              <br />
              <span className="text-gradient">
                {t("on WhatsApp", "sur WhatsApp")}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              {t(
                "Simple automations that capture every client, organize your business, and keep things running — even when you're not available.",
                "Des automatisations simples qui capturent chaque client, organisent votre business et gardent tout en marche — même quand vous n'êtes pas disponible."
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity glow-box"
              >
                {t("Automate My Business", "Automatiser Mon Business")}
                <ArrowRight size={18} />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-muted transition-colors"
              >
                {t("See How It Works", "Voir Comment Ça Marche")}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { num: "70%", label: t("clients lost to missed messages", "des clients perdus par messages manqués") },
                { num: "24/7", label: t("automatic responses", "réponses automatiques") },
                { num: "5min", label: t("setup time", "temps de mise en place") },
              ].map((s) => (
                <div key={s.num} className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-gradient font-display">{s.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img src={heroImg} alt={t("African entrepreneur using WhatsApp", "Entrepreneur africain utilisant WhatsApp")} className="w-full h-[450px] object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
