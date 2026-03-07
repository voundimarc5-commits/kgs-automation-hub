import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, Sparkles, MessageSquare, Briefcase, Home, Zap, CheckCircle2 } from "lucide-react";
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
  const [step, setStep] = useState(0);
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
    <section className="section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4"
          >
            <Zap size={14} />
            {t("Interactive", "Interactif")}
          </motion.div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            {t("Explore Your Possibilities", "Explorez Vos Possibilités")}
          </h2>
          <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto leading-relaxed">
            {t(
              "Answer 3 quick questions and discover which solution fits your business best.",
              "Répondez à 3 questions rapides et découvrez quelle solution correspond le mieux à votre business."
            )}
          </p>
        </motion.div>

        {/* Progress bar */}
        {step < 3 && (
          <div className="flex items-center gap-3 mb-10 max-w-sm mx-auto">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    i < step
                      ? "bg-primary text-primary-foreground shadow-md"
                      : i === step
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-110"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < step ? <CheckCircle2 size={16} /> : i + 1}
                </div>
                <div
                  className={`h-0.5 w-full rounded-full transition-all duration-500 ${
                    i <= step ? "bg-primary" : "bg-border"
                  }`}
                />
              </div>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Questions */}
          {step < 3 && (
            <motion.div
              key={`question-${step}`}
              initial={{ opacity: 0, x: 50, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="glass-card rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider bg-muted px-3 py-1 rounded-full">
                  {t("Question", "Question")} {step + 1}/3
                </p>
                {step > 0 && (
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <ArrowLeft size={14} />
                    {t("Back", "Retour")}
                  </button>
                )}
              </div>

              <h3 className="font-display text-xl md:text-2xl font-bold mb-8">
                {allQuestions[step].question}
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {allQuestions[step].options.map((option, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleAnswer(i)}
                    className="group text-left bg-background hover:bg-primary/5 border border-border hover:border-primary/30 rounded-xl px-5 py-4 text-sm font-medium transition-all duration-200 cursor-pointer hover:shadow-md"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-muted group-hover:bg-primary/10 flex items-center justify-center text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {option}
                      </span>
                      <ChevronRight size={16} className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </span>
                  </motion.button>
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
              className="space-y-5"
            >
              {/* Recommendation header */}
              <div className="glass-card rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/10"
                >
                  <Sparkles size={30} className="text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {t("Our Recommendation for You", "Notre Recommandation Pour Vous")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  {recommendation.desc}
                </p>
              </div>

              {/* Flow visualization */}
              <div className="glass-card rounded-2xl p-8 md:p-10">
                <h4 className="font-display text-lg font-bold mb-8 text-center">
                  {t("How It Works for You", "Comment Ça Fonctionne Pour Vous")}
                </h4>
                <div className="space-y-0">
                  {recommendation.flow.map((flowStep, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary-foreground shadow-md shadow-primary/20">
                          {i + 1}
                        </div>
                        {i < recommendation.flow.length - 1 && (
                          <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary/5" />
                        )}
                      </div>
                      <p className="text-sm text-secondary-foreground pt-2.5 font-medium">{flowStep}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-3">
                {recommendation.benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="glass-card rounded-xl p-5 text-center group hover:border-primary/20 transition-all"
                  >
                    <CheckCircle2 size={18} className="text-primary mx-auto mb-2" />
                    <p className="text-xs font-semibold text-secondary-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              {/* Recommended offer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative rounded-2xl p-8 md:p-10 text-center overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/15"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <RecIcon size={24} className="text-primary" />
                </div>
                <h4 className="font-display text-xl font-bold mb-1">{recommendation.name}</h4>
                <p className="text-xs text-muted-foreground mb-6">
                  {t("Recommended solution for your business", "Solution recommandée pour votre business")}
                </p>
                <button
                  onClick={() => navigate(`/offer/${recommendation.slug}`)}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-bold hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                >
                  {t("See Full Details", "Voir Tous les Détails")}
                  <ArrowRight size={16} />
                </button>
              </motion.div>

              {/* Restart */}
              <div className="text-center pt-2">
                <button
                  onClick={reset}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer underline underline-offset-4"
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
