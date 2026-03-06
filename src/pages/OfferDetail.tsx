import { useLang } from "@/contexts/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageSquare, Briefcase, Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

import salonImg from "@/assets/african-salon.jpg";
import businessImg from "@/assets/african-restaurant.jpg";
import airbnbImg from "@/assets/african-airbnb.jpg";

const OfferDetail = () => {
  const { t } = useLang();
  const { slug } = useParams();
  const navigate = useNavigate();

  const offers: Record<string, {
    icon: typeof MessageSquare;
    image: string;
    name: string;
    shortDesc: string;
    gains: string[];
    includes: string[];
    installation: string;
    maintenance: string;
  }> = {
    "client-messaging": {
      icon: MessageSquare,
      image: salonImg,
      name: t("Automatic Client Messaging System", "Système de Messagerie Client Automatique"),
      shortDesc: t(
        "Never miss a client message again. Every message receives an automatic and professional response.",
        "Ne manquez plus jamais un message client. Chaque message reçoit une réponse automatique et professionnelle."
      ),
      gains: [
        t("No more lost WhatsApp messages", "Plus de messages WhatsApp perdus"),
        t("Professional image for the business", "Image professionnelle pour le business"),
        t("More clients converted", "Plus de clients convertis"),
        t("Less stress managing conversations", "Moins de stress dans la gestion des conversations"),
      ],
      includes: [
        t("Automatic WhatsApp replies", "Réponses WhatsApp automatiques"),
        t("Frequently asked questions responses", "Réponses aux questions fréquentes"),
        t("Automatic client information collection", "Collecte automatique d'informations client"),
        t("Notification sent to the business owner", "Notification envoyée au propriétaire du business"),
      ],
      installation: "120€ – 250€",
      maintenance: "20€ – 30€ / " + t("month", "mois"),
    },
    "business-organization": {
      icon: Briefcase,
      image: businessImg,
      name: t("Automated Business Organization & Follow-up", "Organisation Business Automatisée & Relances"),
      shortDesc: t(
        "Your business continues to run even when you are not available.",
        "Votre business continue de tourner même quand vous n'êtes pas disponible."
      ),
      gains: [
        t("Clear organization of requests", "Organisation claire des demandes"),
        t("Automatic client follow-ups", "Relances clients automatiques"),
        t("Less forgotten appointments or tasks", "Moins de rendez-vous ou tâches oubliés"),
        t("Better control of operations", "Meilleur contrôle des opérations"),
      ],
      includes: [
        t("Structured request management", "Gestion structurée des demandes"),
        t("Automatic client follow-up", "Relance client automatique"),
        t("Automated reminders (appointments, follow-ups, payments)", "Rappels automatiques (rendez-vous, relances, paiements)"),
        t("Simple CRM system", "Système CRM simple"),
        t("Monthly activity reporting", "Rapport d'activité mensuel"),
      ],
      installation: "500€ – 1 000€",
      maintenance: "60€ – 120€ / " + t("month", "mois"),
    },
    "property-management": {
      icon: Home,
      image: airbnbImg,
      name: t("Automated Property Management", "Gestion Locative Automatisée"),
      shortDesc: t(
        "Manage your rental properties remotely without stress.",
        "Gérez vos propriétés locatives à distance sans stress."
      ),
      gains: [
        t("Less repetitive guest messages", "Moins de messages répétitifs des hôtes"),
        t("Better guest experience", "Meilleure expérience pour les hôtes"),
        t("Smoother check-in and check-out", "Check-in et check-out plus fluides"),
        t("Better reviews", "De meilleures évaluations"),
      ],
      includes: [
        t("Automated guest messaging", "Messagerie automatisée pour les hôtes"),
        t("Check-in / check-out instructions", "Instructions de check-in / check-out"),
        t("Property information system", "Système d'information sur la propriété"),
        t("Incident reporting", "Signalement d'incidents"),
        t("Owner reporting", "Rapports pour le propriétaire"),
      ],
      installation: "800€ – 1 800€",
      maintenance: "100€ – 220€ / " + t("month", "mois"),
    },
  };

  const offer = slug ? offers[slug] : null;

  if (!offer) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <p className="text-muted-foreground">{t("Offer not found", "Offre introuvable")}</p>
          <button onClick={() => navigate("/")} className="mt-4 text-primary underline">
            {t("Back to Home", "Retour à l'Accueil")}
          </button>
        </div>
      </div>
    );
  }

  const Icon = offer.icon;

  return (
    <div className="min-h-screen bg-background relative">
      <NetworkBackground />
      <Navbar />
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto max-w-4xl px-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t("Back to Offers", "Retour aux Offres")}
          </button>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Hero banner with full-width image */}
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img src={offer.image} alt={offer.name} className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsla(165,60%,10%,0.8)] via-[hsla(165,50%,12%,0.4)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Icon size={24} className="text-primary" />
                </div>
                <h1 className="font-display text-2xl md:text-4xl font-bold mb-2 text-white">{offer.name}</h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">{offer.shortDesc}</p>
              </div>
            </div>

            {/* Gains */}
            <div className="bg-card rounded-2xl p-8 glow-border mb-8">
              <h2 className="font-display text-xl font-bold mb-5">
                {t("What You Gain", "Ce Que Vous Gagnez")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {offer.gains.map((g, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary-foreground">{g}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes */}
            <div className="bg-card rounded-2xl p-8 glow-border mb-8">
              <h2 className="font-display text-xl font-bold mb-5">
                {t("What's Included", "Ce Qui Est Inclus")}
              </h2>
              <ul className="space-y-3">
                {offer.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-secondary-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/15 mb-8">
              <h2 className="font-display text-lg font-bold mb-4">
                {t("Pricing", "Tarifs")}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("Installation", "Installation")}</p>
                  <p className="text-xl font-bold text-gradient font-display">{offer.installation}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{t("Maintenance", "Maintenance")}</p>
                  <p className="text-xl font-bold text-gradient font-display">{offer.maintenance}</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="mailto:contact@koraglobalsystems.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-opacity glow-box"
              >
                {t("Request Installation", "Demander l'Installation")}
                <ArrowRight size={20} />
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                {t("Free consultation • No commitment", "Consultation gratuite • Sans engagement")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferDetail;
