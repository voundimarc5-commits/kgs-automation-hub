import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, Sparkles, MessageSquare, Briefcase, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const questions = (t: (en: string, fr: string) => string) => [
  {
    question: t("What type of business do you run?", "Quel type de business gérez-vous ?"),
    options: [
      t("Restaurant / Food", "Restaurant / Alimentation"),
      t("Beauty / Salon", "Beauté / Salon"),
      t("Small Services", "Petits Services"),
      t("Airbnb / Property Rental", "Airbnb / Location Immobilière"),
      t("Retail Shop", "Commerce de Détail"),
      t("Other", "Autre"),
    ],
  },
  {
    question: t("What do you want to improve first?", "Que souhaitez-vous améliorer en premier ?"),
    options: [
      t("Client messages", "Messages clients"),
      t("Appointment booking", "Prise de rendez-vous"),
      t("Client follow-ups", "Relances clients"),
      t("Payment reminders", "Rappels de paiement"),
      t("Property guest management", "Gestion des hôtes"),
      t("Customer support", "Support client"),
    ],
  },
  {
    question: t("How many client requests do you receive per day?", "Combien de demandes clients recevez-vous par jour ?"),
    options: [
      t("Less than 10", "Moins de 10"),
      t("10 – 30", "10 – 30"),
      t("30 – 100", "30 – 100"),
      t("More than 100", "Plus de 100"),
    ],
  },
];

type Recommendation = {
  slug: string;
  icon: typeof MessageSquare;
  name: string;
  desc: string;
  flow: string[];
  benefits: string[];
};

const getRecommendation = (
  answers: number[],
  t: (en: string, fr: string) => string
): Recommendation => {
  const [businessType, goal] = answers;

  // Property-related
  if (businessType === 3 || goal === 4) {
    return {
      slug: "property-management",
      icon: Home,
      name: t("Smart Property Management", "Gestion Locative Intelligente"),
      desc: t(
        "Based on your answers, our property management solution is ideal for you. It handles guest communication, check-in instructions, and incident reporting — so you can manage remotely.",
        "D'après vos réponses, notre solution de gestion locative est idéale pour vous. Elle gère la communication avec les hôtes, les instructions de check-in et le signalement d'incidents — pour que vous puissiez gérer à distance."
      ),
      flow: [
        t("Guest sends a message", "L'hôte envoie un message"),
        t("Instant response with property details", "Réponse instantanée avec les détails du bien"),
        t("Check-in instructions sent before arrival", "Instructions de check-in envoyées avant l'arrivée"),
        t("Issues reported and tracked", "Problèmes signalés et suivis"),
        t("You receive a clean summary", "Vous recevez un résumé clair"),
      ],
      benefits: [
        t("Save 10+ hours per week", "Économisez 10h+ par semaine"),
        t("Better guest reviews", "De meilleurs avis"),
        t("Manage from anywhere", "Gérez depuis n'importe où"),
        t("Zero missed messages", "Zéro message manqué"),
      ],
    };
  }

  // Business organization (follow-ups, payments, booking)
  if (goal === 1 || goal === 2 || goal === 3) {
    return {
      slug: "business-organization",
      icon: Briefcase,
      name: t("Smart Business Organization", "Organisation Business Intelligente"),
      desc: t(
        "You need a system that keeps your business running smoothly — follow-ups, reminders, and organization handled for you. Our business solution is built for this.",
        "Vous avez besoin d'un système qui fait tourner votre business — relances, rappels et organisation gérés pour vous. Notre solution business est conçue pour ça."
      ),
      flow: [
        t("Client request comes in", "Une demande client arrive"),
        t("Request categorized and tracked", "Demande catégorisée et suivie"),
        t("Follow-up scheduled on time", "Relance programmée à temps"),
        t("Reminder sent before deadline", "Rappel envoyé avant l'échéance"),
        t("Weekly report delivered to you", "Rapport hebdomadaire livré"),
      ],
      benefits: [
        t("Save 5+ hours per week", "Économisez 5h+ par semaine"),
        t("Recover 30% lost revenue", "Récupérez 30% de revenus perdus"),
        t("Clients feel valued and return", "Les clients se sentent valorisés"),
        t("Nothing falls through the cracks", "Plus rien ne passe entre les mailles"),
      ],
    };
  }

  // Default: messaging
  return {
    slug: "client-messaging",
    icon: MessageSquare,
    name: t("Smart Client Messaging", "Messagerie Client Intelligente"),
    desc: t(
      "Your priority is handling client messages better. Our messaging solution replies instantly, collects information, and notifies you when needed — so you never lose a client again.",
      "Votre priorité est de mieux gérer les messages clients. Notre solution de messagerie répond instantanément, collecte les informations et vous notifie quand nécessaire — pour ne plus jamais perdre un client."
    ),
    flow: [
      t("Client sends a WhatsApp message", "Le client envoie un message WhatsApp"),
      t("Instant professional response", "Réponse professionnelle instantanée"),
      t("Client information collected", "Informations client collectées"),
      t("Service or product proposed", "Service ou produit proposé"),
      t("You get notified with a summary", "Vous êtes notifié avec un résumé"),
    ],
    benefits: [
      t("Save 2-3 hours daily", "Économisez 2-3h par jour"),
      t("Convert 40% more leads", "Convertissez 40% de leads en plus"),
      t("Professional image 24/7", "Image professionnelle 24h/24"),
      t("Zero stress on messages", "Zéro stress sur les messages"),
    ],
  };
};

const ExploreSection = () => {
  const { t } = useLang();
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0,1,2 = questions; 3 = results
  const [answers, setAnswers] = useState<number[]>([]);
  const allQuestions = questions(t);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    if (step < 2) {
      setStep(step + 1);
    } else {
      setStep(3);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const goBack = () => {
    if (step > 0 && step <= 2) {
      setStep(step - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const recommendation = step === 3 ? getRecommendation(answers, t) : null;
  const RecIcon = recommendation?.icon ?? MessageSquare;

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("Interactive", "Interactif")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            {t("Explore Your Possibilities", "Explorez Vos Possibilités")}
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">
            {t(
              "Answer 3 quick questions and discover which solution fits your business best.",
              "Répondez à 3 questions rapides et découvrez quelle solution correspond le mieux à votre business."
            )}
          </p>
        </motion.div>

        {/* Progress bar */}
        {step < 3 && (
          <div className="flex items-center gap-2 mb-8 max-w-xs mx-auto">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  i <= step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Questions */}
          {step < 3 && (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-8 glow-border shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  {t("Question", "Question")} {step + 1}/3
                </p>
                {step > 0 && (
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowLeft size={14} />
                    {t("Back", "Retour")}
                  </button>
                )}
              </div>

              <h3 className="font-display text-lg font-bold mb-6">
                {allQuestions[step].question}
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {allQuestions[step].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="text-left bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-xl px-5 py-4 text-sm font-medium transition-all duration-200 cursor-pointer group"
                  >
                    <span className="flex items-center justify-between">
                      {option}
                      <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Results */}
          {step === 3 && recommendation && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Recommendation header */}
              <div className="bg-card rounded-2xl p-8 glow-border shadow-sm text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {t("Our Recommendation for You", "Notre Recommandation Pour Vous")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  {recommendation.desc}
                </p>
              </div>

              {/* Flow visualization */}
              <div className="bg-card rounded-2xl p-8 glow-border shadow-sm">
                <h4 className="font-display text-base font-bold mb-6 text-center">
                  {t("How It Works for You", "Comment Ça Fonctionne Pour Vous")}
                </h4>
                <div className="space-y-0">
                  {recommendation.flow.map((flowStep, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary border-2 border-primary/20">
                          {i + 1}
                        </div>
                        {i < recommendation.flow.length - 1 && (
                          <div className="w-0.5 h-8 bg-primary/15" />
                        )}
                      </div>
                      <p className="text-sm text-secondary-foreground pt-2">{flowStep}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3">
                {recommendation.benefits.map((benefit, i) => (
                  <div key={i} className="bg-card rounded-xl p-5 text-center glow-border">
                    <p className="text-xs font-semibold text-secondary-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              {/* Recommended offer CTA */}
              <div className="bg-primary/5 rounded-2xl p-8 border border-primary/15 text-center">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <RecIcon size={22} className="text-primary" />
                </div>
                <h4 className="font-display text-lg font-bold mb-1">{recommendation.name}</h4>
                <p className="text-xs text-muted-foreground mb-5">
                  {t("Recommended solution for your business", "Solution recommandée pour votre business")}
                </p>
                <button
                  onClick={() => navigate(`/offer/${recommendation.slug}`)}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {t("See Full Details", "Voir Tous les Détails")}
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Restart */}
              <div className="text-center">
                <button
                  onClick={reset}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer underline"
                >
                  {t("Start over", "Recommencer")}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExploreSection;
