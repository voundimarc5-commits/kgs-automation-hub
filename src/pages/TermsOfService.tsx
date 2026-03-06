import { useLang } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const TermsOfService = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background relative">
      <NetworkBackground />
      <Navbar />
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            {t("Terms of Service", "Conditions d'Utilisation")}
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Services", "Services")}
              </h2>
              <p>
                {t(
                  "KGS Automations provides operational automation services designed for small and medium businesses in Africa. Our services focus on WhatsApp-based workflows, client management, and property management automation.",
                  "KGS Automations fournit des services d'automatisation opérationnelle conçus pour les petites et moyennes entreprises en Afrique. Nos services se concentrent sur les workflows basés sur WhatsApp, la gestion client et l'automatisation de la gestion locative."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Pricing & Fees", "Tarifs & Frais")}
              </h2>
              <p>
                {t(
                  "Installation fees and monthly maintenance costs apply depending on the selected service. Specific pricing is detailed on each offer page and confirmed before any work begins.",
                  "Des frais d'installation et des coûts de maintenance mensuels s'appliquent selon le service sélectionné. Les tarifs spécifiques sont détaillés sur chaque page d'offre et confirmés avant le début des travaux."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Results", "Résultats")}
              </h2>
              <p>
                {t(
                  "Results depend on the client's activity, engagement, and usage of the installed systems. KGS Automations provides the tools and setup, but business outcomes are influenced by many factors beyond our control.",
                  "Les résultats dépendent de l'activité, de l'engagement et de l'utilisation des systèmes installés par le client. KGS Automations fournit les outils et la mise en place, mais les résultats commerciaux sont influencés par de nombreux facteurs hors de notre contrôle."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Service Evolution", "Évolution des Services")}
              </h2>
              <p>
                {t(
                  "Services may evolve as systems improve. We continuously work to enhance the automation tools and may update features, processes, or integrations to better serve our clients.",
                  "Les services peuvent évoluer à mesure que les systèmes s'améliorent. Nous travaillons continuellement à améliorer les outils d'automatisation et pouvons mettre à jour les fonctionnalités, processus ou intégrations pour mieux servir nos clients."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Contact", "Contact")}
              </h2>
              <p>
                {t("For any questions, contact us at:", "Pour toute question, contactez-nous à :")}
                {" "}
                <a href="mailto:contact@koraglobalsystems.com" className="text-primary hover:underline">
                  contact@koraglobalsystems.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
