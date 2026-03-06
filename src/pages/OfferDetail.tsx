import { useLang } from "@/contexts/LanguageContext";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, MessageSquare, Briefcase, Home, ArrowRight, AlertTriangle, Zap, Users, Clock, TrendingUp, Shield, ChevronRight } from "lucide-react";
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
    problem: string;
    solution: string;
    gains: string[];
    includes: string[];
    useCases: { title: string; desc: string }[];
    workflow: string[];
    benefits: { icon: typeof Clock; label: string }[];
    scenario: { title: string; before: string; after: string };
    installation: string;
    installationCfa: string;
    maintenance: string;
    maintenanceCfa: string;
  }> = {
    "client-messaging": {
      icon: MessageSquare,
      image: salonImg,
      name: t("Smart Client Messaging System", "Système de Messagerie Client Intelligent"),
      shortDesc: t(
        "Never miss a client message again. Every message receives an instant, professional response.",
        "Ne manquez plus jamais un message client. Chaque message reçoit une réponse instantanée et professionnelle."
      ),
      problem: t(
        "You receive dozens of WhatsApp messages every day — price requests, availability questions, appointment bookings. When you're busy serving clients, messages pile up. By the time you reply, the client has already gone to a competitor.",
        "Vous recevez des dizaines de messages WhatsApp chaque jour — demandes de prix, questions de disponibilité, prises de rendez-vous. Quand vous êtes occupé(e) à servir vos clients, les messages s'accumulent. Le temps de répondre, le client est déjà parti chez un concurrent."
      ),
      solution: t(
        "Our solution responds instantly to every incoming message with professional, personalized replies. It collects client information, answers frequently asked questions, and notifies you only when human attention is needed.",
        "Notre solution répond instantanément à chaque message entrant avec des réponses professionnelles et personnalisées. Elle collecte les informations client, répond aux questions fréquentes et vous notifie uniquement quand une attention humaine est nécessaire."
      ),
      gains: [
        t("No more lost WhatsApp messages", "Plus de messages WhatsApp perdus"),
        t("Professional image for the business", "Image professionnelle pour le business"),
        t("More clients converted", "Plus de clients convertis"),
        t("Less stress managing conversations", "Moins de stress dans la gestion des conversations"),
      ],
      includes: [
        t("Instant WhatsApp replies (24/7)", "Réponses WhatsApp instantanées (24h/24)"),
        t("Custom FAQ responses tailored to your business", "Réponses FAQ personnalisées pour votre activité"),
        t("Smart client information collection", "Collecte intelligente d'informations client"),
        t("Smart notification system for the business owner", "Système de notification intelligent pour le propriétaire"),
        t("Welcome and follow-up message sequences", "Séquences de messages de bienvenue et de suivi"),
        t("Monthly performance report", "Rapport de performance mensuel"),
      ],
      useCases: [
        { title: t("Hair Salon", "Salon de Coiffure"), desc: t("Clients ask about prices, availability, and services. The bot answers instantly and books appointments.", "Les clientes demandent les prix, la disponibilité et les services. Le bot répond instantanément et prend les rendez-vous.") },
        { title: t("Restaurant", "Restaurant"), desc: t("Customers ask about the menu, opening hours, and reservations. The system handles it all seamlessly.", "Les clients demandent le menu, les horaires et les réservations. Le système gère tout de manière fluide.") },
        { title: t("Freelance Service", "Service Freelance"), desc: t("Service providers receive quote requests and the system collects project details automatically.", "Les prestataires reçoivent des demandes de devis et le système collecte les détails du projet automatiquement.") },
      ],
      workflow: [
        t("Client sends a WhatsApp message", "Le client envoie un message WhatsApp"),
        t("Automation detects the intent (price, booking, info)", "L'automatisation détecte l'intention (prix, réservation, info)"),
        t("Personalized response is sent instantly", "Une réponse personnalisée est envoyée instantanément"),
        t("Client information is saved automatically", "Les informations client sont enregistrées automatiquement"),
        t("You receive a notification with a summary", "Vous recevez une notification avec un résumé"),
      ],
      benefits: [
        { icon: Clock, label: t("Save 2-3 hours daily", "Économisez 2-3h par jour") },
        { icon: TrendingUp, label: t("Convert 40% more leads", "Convertissez 40% de leads en plus") },
        { icon: Users, label: t("Better client experience", "Meilleure expérience client") },
        { icon: Shield, label: t("Never miss a message", "Ne ratez plus jamais un message") },
      ],
      scenario: {
        title: t("A day with automation", "Une journée avec l'automatisation"),
        before: t("Before: You're braiding a client's hair. 15 WhatsApp messages come in. You can't reply. By evening, 5 potential clients have gone elsewhere.", "Avant : Vous êtes en train de coiffer une cliente. 15 messages WhatsApp arrivent. Vous ne pouvez pas répondre. Le soir, 5 clients potentiels sont allés ailleurs."),
        after: t("After: While you work, the automation replies to all 15 messages, books 3 appointments, and sends you a clean summary. Zero stress.", "Après : Pendant que vous travaillez, l'automatisation répond aux 15 messages, prend 3 rendez-vous et vous envoie un résumé clair. Zéro stress."),
      },
      installation: "120€ – 250€",
      installationCfa: "≈ 78 000 – 164 000 FCFA",
      maintenance: "20€ – 30€ / " + t("month", "mois"),
      maintenanceCfa: "≈ 13 000 – 19 500 FCFA / " + t("month", "mois"),
    },
    "business-organization": {
      icon: Briefcase,
      image: businessImg,
      name: t("Automated Business Organization & Follow-up", "Organisation Business Automatisée & Relances"),
      shortDesc: t(
        "Your business continues to run even when you are not available.",
        "Votre business continue de tourner même quand vous n'êtes pas disponible."
      ),
      problem: t(
        "Managing a small business means juggling everything — client requests, follow-ups, appointments, invoices. Things slip through the cracks. Clients don't come back because nobody followed up. You lose revenue without even realizing it.",
        "Gérer un petit business signifie jongler avec tout — demandes clients, relances, rendez-vous, factures. Des choses passent entre les mailles. Les clients ne reviennent pas parce que personne n'a fait de suivi. Vous perdez du chiffre d'affaires sans même vous en rendre compte."
      ),
      solution: t(
        "We build a complete automated organization system that tracks every client interaction, sends follow-ups automatically, reminds you of important tasks, and gives you a clear view of your business operations — all without you lifting a finger.",
        "Nous construisons un système d'organisation automatisé complet qui suit chaque interaction client, envoie des relances automatiquement, vous rappelle les tâches importantes et vous donne une vue claire de vos opérations — sans que vous leviez le petit doigt."
      ),
      gains: [
        t("Clear organization of all requests", "Organisation claire de toutes les demandes"),
        t("Automatic client follow-ups", "Relances clients automatiques"),
        t("Less forgotten appointments or tasks", "Moins de rendez-vous ou tâches oubliés"),
        t("Better control of daily operations", "Meilleur contrôle des opérations quotidiennes"),
      ],
      includes: [
        t("Structured client request management", "Gestion structurée des demandes clients"),
        t("Automatic follow-up sequences", "Séquences de relance automatiques"),
        t("Automated reminders (appointments, payments, tasks)", "Rappels automatiques (rendez-vous, paiements, tâches)"),
        t("Simple CRM system adapted to your business", "Système CRM simple adapté à votre activité"),
        t("Monthly activity and performance reporting", "Rapport d'activité et de performance mensuel"),
        t("Client satisfaction tracking", "Suivi de la satisfaction client"),
        t("Task priority management", "Gestion des priorités de tâches"),
      ],
      useCases: [
        { title: t("Catering Service", "Service Traiteur"), desc: t("Orders come from WhatsApp, Instagram, and calls. The system centralizes everything and sends reminders before each event.", "Les commandes arrivent de WhatsApp, Instagram et par téléphone. Le système centralise tout et envoie des rappels avant chaque événement.") },
        { title: t("Cleaning Business", "Entreprise de Nettoyage"), desc: t("Regular clients need scheduled visits. Automation tracks schedules, sends reminders, and follows up after each service.", "Les clients réguliers ont besoin de visites planifiées. L'automatisation suit les plannings, envoie des rappels et fait le suivi après chaque prestation.") },
        { title: t("Coaching / Training", "Coaching / Formation"), desc: t("Follow up with prospects who showed interest, send course reminders, and track client progress automatically.", "Relancez les prospects intéressés, envoyez des rappels de cours et suivez la progression des clients automatiquement.") },
      ],
      workflow: [
        t("A new request or task is created (manually or automatically)", "Une nouvelle demande ou tâche est créée (manuellement ou automatiquement)"),
        t("The system categorizes and prioritizes it", "Le système la catégorise et la priorise"),
        t("Automatic follow-ups are scheduled", "Des relances automatiques sont programmées"),
        t("Reminders are sent before deadlines", "Des rappels sont envoyés avant les échéances"),
        t("You review a weekly summary of all activity", "Vous consultez un résumé hebdomadaire de toute l'activité"),
      ],
      benefits: [
        { icon: Clock, label: t("Save 5+ hours per week", "Économisez 5h+ par semaine") },
        { icon: TrendingUp, label: t("Recover 30% lost revenue", "Récupérez 30% de revenus perdus") },
        { icon: Users, label: t("Clients feel valued and return", "Les clients se sentent valorisés et reviennent") },
        { icon: Shield, label: t("Nothing falls through the cracks", "Plus rien ne passe entre les mailles") },
      ],
      scenario: {
        title: t("A week with automation", "Une semaine avec l'automatisation"),
        before: t("Before: You forgot to follow up with 3 clients this week. One appointment was missed. You spent Sunday evening catching up on admin work.", "Avant : Vous avez oublié de relancer 3 clients cette semaine. Un rendez-vous a été manqué. Vous avez passé le dimanche soir à rattraper le travail administratif."),
        after: t("After: Every client received a follow-up. All appointments were confirmed. You got a clean weekly report on Monday morning. Weekend free.", "Après : Chaque client a reçu une relance. Tous les rendez-vous ont été confirmés. Vous avez reçu un rapport hebdomadaire clair lundi matin. Week-end libre."),
      },
      installation: "500€ – 1 000€",
      installationCfa: "≈ 327 000 – 655 000 FCFA",
      maintenance: "60€ – 120€ / " + t("month", "mois"),
      maintenanceCfa: "≈ 39 000 – 78 000 FCFA / " + t("month", "mois"),
    },
    "property-management": {
      icon: Home,
      image: airbnbImg,
      name: t("Automated Property Management", "Gestion Locative Automatisée"),
      shortDesc: t(
        "Manage your rental properties remotely without stress.",
        "Gérez vos propriétés locatives à distance sans stress."
      ),
      problem: t(
        "You manage one or more rental properties — Airbnb, short-term lets, or traditional rentals. Guests send repetitive questions about check-in, WiFi, house rules. You're constantly on your phone, sometimes at 2 AM, handling messages that could be automated.",
        "Vous gérez une ou plusieurs propriétés locatives — Airbnb, locations courte durée ou locations traditionnelles. Les hôtes envoient des questions répétitives sur le check-in, le WiFi, le règlement. Vous êtes constamment sur votre téléphone, parfois à 2h du matin, à gérer des messages qui pourraient être automatisés."
      ),
      solution: t(
        "We set up a complete guest communication and property management automation. From booking confirmation to post-checkout review requests — everything runs on autopilot while you focus on growing your portfolio.",
        "Nous mettons en place une automatisation complète de la communication avec les hôtes et de la gestion locative. De la confirmation de réservation à la demande d'avis après le départ — tout fonctionne en pilote automatique pendant que vous vous concentrez sur le développement de votre portefeuille."
      ),
      gains: [
        t("Less repetitive guest messages to handle", "Moins de messages répétitifs à gérer"),
        t("Better guest experience and reviews", "Meilleure expérience et avis des hôtes"),
        t("Smoother check-in and check-out process", "Processus de check-in et check-out plus fluide"),
        t("Higher ratings and more bookings", "Meilleures notes et plus de réservations"),
      ],
      includes: [
        t("Automated guest messaging (pre/during/post stay)", "Messagerie automatisée (avant/pendant/après séjour)"),
        t("Digital check-in / check-out instructions", "Instructions numériques de check-in / check-out"),
        t("Property information & house rules system", "Système d'information et règlement de la propriété"),
        t("Incident and maintenance reporting", "Signalement d'incidents et de maintenance"),
        t("Owner dashboard and reporting", "Tableau de bord et rapports propriétaire"),
        t("Guest review request automation", "Automatisation des demandes d'avis"),
        t("Multi-property support", "Support multi-propriétés"),
      ],
      useCases: [
        { title: t("Airbnb Host", "Hôte Airbnb"), desc: t("Guests get automatic check-in instructions, WiFi details, and local recommendations. Reviews are requested automatically after checkout.", "Les hôtes reçoivent automatiquement les instructions de check-in, les détails WiFi et les recommandations locales. Les avis sont demandés automatiquement après le départ.") },
        { title: t("Short-term Rental Manager", "Gestionnaire de Location Courte Durée"), desc: t("Manage multiple properties with automated guest flows, cleaning schedules, and owner reports.", "Gérez plusieurs propriétés avec des flux automatisés, des plannings de ménage et des rapports propriétaires.") },
        { title: t("Diaspora Property Owner", "Propriétaire de la Diaspora"), desc: t("Own property in Africa but live abroad? The system handles day-to-day guest communication and sends you incident alerts.", "Vous possédez un bien en Afrique mais vivez à l'étranger ? Le système gère la communication quotidienne avec les hôtes et vous envoie des alertes en cas d'incident.") },
      ],
      workflow: [
        t("Guest books the property", "L'hôte réserve la propriété"),
        t("Automatic welcome message with property details", "Message de bienvenue automatique avec les détails de la propriété"),
        t("Check-in instructions sent 24h before arrival", "Instructions de check-in envoyées 24h avant l'arrivée"),
        t("During-stay check-in message for issues", "Message de suivi pendant le séjour pour les problèmes"),
        t("Checkout instructions and review request sent automatically", "Instructions de départ et demande d'avis envoyées automatiquement"),
      ],
      benefits: [
        { icon: Clock, label: t("Save 10+ hours per week", "Économisez 10h+ par semaine") },
        { icon: TrendingUp, label: t("Improve ratings by 0.5+ stars", "Améliorez vos notes de 0,5+ étoiles") },
        { icon: Users, label: t("Happier guests, more repeat bookings", "Hôtes plus satisfaits, plus de réservations") },
        { icon: Shield, label: t("Manage from anywhere in the world", "Gérez depuis n'importe où dans le monde") },
      ],
      scenario: {
        title: t("A guest's journey with automation", "Le parcours d'un hôte avec l'automatisation"),
        before: t("Before: A guest arrives at 11 PM and can't find the key. They call you 3 times. You send manual instructions half-asleep. Bad review.", "Avant : Un hôte arrive à 23h et ne trouve pas la clé. Il vous appelle 3 fois. Vous envoyez des instructions manuellement à moitié endormi(e). Mauvais avis."),
        after: t("After: The guest received digital check-in instructions 24h before arrival with photos and a map. They found everything easily. 5-star review.", "Après : L'hôte a reçu les instructions de check-in numériques 24h avant l'arrivée avec photos et plan. Il a tout trouvé facilement. Avis 5 étoiles."),
      },
      installation: "800€ – 1 800€",
      installationCfa: "≈ 524 000 – 1 180 000 FCFA",
      maintenance: "100€ – 220€ / " + t("month", "mois"),
      maintenanceCfa: "≈ 65 500 – 144 000 FCFA / " + t("month", "mois"),
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

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

          {/* Hero banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative rounded-2xl overflow-hidden mb-12">
              <img src={offer.image} alt={offer.name} className="w-full h-72 md:h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsla(165,60%,10%,0.85)] via-[hsla(165,50%,12%,0.5)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-3">
                  <Icon size={24} className="text-primary" />
                </div>
                <h1 className="font-display text-2xl md:text-4xl font-bold mb-2 text-white">{offer.name}</h1>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">{offer.shortDesc}</p>
              </div>
            </div>
          </motion.div>

          {/* Problem */}
          <motion.div {...fadeIn} className="bg-card rounded-2xl p-8 glow-border mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertTriangle size={18} className="text-destructive" />
              </div>
              <h2 className="font-display text-xl font-bold">
                {t("The Problem", "Le Problème")}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{offer.problem}</p>
          </motion.div>

          {/* Solution */}
          <motion.div {...fadeIn} className="bg-card rounded-2xl p-8 glow-border mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap size={18} className="text-primary" />
              </div>
              <h2 className="font-display text-xl font-bold">
                {t("Our Solution", "Notre Solution")}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{offer.solution}</p>
          </motion.div>

          {/* What You Gain */}
          <motion.div {...fadeIn} className="bg-card rounded-2xl p-8 glow-border mb-8">
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
          </motion.div>

          {/* What's Included */}
          <motion.div {...fadeIn} className="bg-card rounded-2xl p-8 glow-border mb-8">
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
          </motion.div>

          {/* Use Cases */}
          <motion.div {...fadeIn} className="mb-8">
            <h2 className="font-display text-xl font-bold mb-5">
              {t("Real Business Use Cases", "Cas d'Usage Concrets")}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {offer.useCases.map((uc, i) => (
                <div key={i} className="bg-card rounded-xl p-5 glow-border">
                  <h3 className="font-display text-sm font-bold mb-2 text-primary">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div {...fadeIn} className="bg-card rounded-2xl p-8 glow-border mb-8">
            <h2 className="font-display text-xl font-bold mb-6">
              {t("How It Works", "Comment Ça Marche")}
            </h2>
            <div className="space-y-4">
              {offer.workflow.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <p className="text-sm text-secondary-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div {...fadeIn} className="mb-8">
            <h2 className="font-display text-xl font-bold mb-5">
              {t("Key Benefits", "Bénéfices Clés")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {offer.benefits.map((b, i) => {
                const BIcon = b.icon;
                return (
                  <div key={i} className="bg-card rounded-xl p-5 text-center glow-border">
                    <BIcon size={24} className="text-primary mx-auto mb-3" />
                    <p className="text-xs font-semibold text-secondary-foreground">{b.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Scenario */}
          <motion.div {...fadeIn} className="bg-card rounded-2xl p-8 glow-border mb-8">
            <h2 className="font-display text-xl font-bold mb-5">{offer.scenario.title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-destructive/5 rounded-xl p-5 border border-destructive/10">
                <p className="text-xs font-bold text-destructive mb-2 uppercase tracking-wider">
                  {t("Before", "Avant")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{offer.scenario.before}</p>
              </div>
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                  {t("After", "Après")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{offer.scenario.after}</p>
              </div>
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div {...fadeIn} className="mb-8">
            <h2 className="font-display text-xl font-bold mb-2 text-center">
              {t("Pricing", "Tarifs")}
            </h2>
            <p className="text-xs text-muted-foreground text-center mb-6">
              {t("Typical project investment", "Investissement type pour ce projet")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
              <div className="bg-card rounded-2xl p-6 text-center glow-border">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                  {t("Installation", "Installation")}
                </p>
                <p className="text-2xl font-bold text-gradient font-display mb-1">{offer.installation}</p>
                <p className="text-[11px] text-muted-foreground">{offer.installationCfa}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-2">
                  {t("One-time setup fee", "Frais d'installation unique")}
                </p>
              </div>
              <div className="bg-card rounded-2xl p-6 text-center glow-border">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-semibold">
                  {t("Maintenance", "Maintenance")}
                </p>
                <p className="text-2xl font-bold text-gradient font-display mb-1">{offer.maintenance}</p>
                <p className="text-[11px] text-muted-foreground">{offer.maintenanceCfa}</p>
                <p className="text-[10px] text-muted-foreground/60 mt-2">
                  {t("Ongoing support & improvements", "Support continu & améliorations")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeIn} className="text-center">
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
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfferDetail;
