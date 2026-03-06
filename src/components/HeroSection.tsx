import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-width background image with dark green overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsla(165,60%,10%,0.85)] via-[hsla(165,50%,12%,0.75)] to-[hsla(165,40%,15%,0.65)]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl px-4 md:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-white">
            {t("Stop Losing Clients", "Arrêtez de Perdre des Clients")}
            <br />
            <span className="text-primary">
              {t("on WhatsApp", "sur WhatsApp")}
            </span>
          </h1>

          <p className="text-lg text-white/80 max-w-lg mb-8">
            {t(
              "Smart solutions that capture every client, organize your business, and keep things running — even when you're not available.",
              "Des solutions intelligentes qui capturent chaque client, organisent votre business et gardent tout en marche — même quand vous n'êtes pas disponible."
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
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
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
                <div className="text-xl md:text-2xl font-bold text-primary font-display">{s.num}</div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
