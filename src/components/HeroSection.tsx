import { useLang } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Full-width background image with dark green overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover object-center" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsla(165,60%,8%,0.9)] via-[hsla(165,50%,10%,0.8)] to-[hsla(165,40%,15%,0.65)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsla(165,60%,8%,0.4)] to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl px-4 md:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white uppercase">
            {t("Stop Losing Clients", "Arrêtez de Perdre des Clients")}
            <br />
            <span className="text-primary">
              {t("on WhatsApp", "sur WhatsApp")}
            </span>
          </h1>

          <p className="text-lg text-white/75 max-w-lg mb-8 leading-relaxed">
            {t(
              "Smart solutions that capture every client, organize your business, and keep things running — even when you're not available.",
              "Des solutions intelligentes qui capturent chaque client, organisent votre business et gardent tout en marche — même quand vous n'êtes pas disponible."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
            >
              {t("Boost My Business", "Booster Mon Business")}
              <ArrowRight size={18} />
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {t("See How It Works", "Voir Comment Ça Marche")}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { num: "70%", label: t("clients lost to missed messages", "des clients perdus par messages manqués") },
              { num: "24/7", label: t("instant responses", "réponses instantanées") },
              { num: "5min", label: t("setup time", "temps de mise en place") },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-display">{s.num}</div>
                <div className="text-xs text-white/50 mt-1.5 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
