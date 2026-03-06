import { useLang } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const Disclaimer = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background relative">
      <NetworkBackground />
      <Navbar />
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            {t("Disclaimer", "Avertissement")}
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Automation Services", "Services d'Automatisation")}
              </h2>
              <p>
                {t(
                  "KGS Automations installs automation systems designed to improve business operations. These systems are built to help capture clients, organize workflows, and streamline communications.",
                  "KGS Automations installe des systèmes d'automatisation conçus pour améliorer les opérations commerciales. Ces systèmes sont conçus pour aider à capturer des clients, organiser les workflows et fluidifier les communications."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Variable Results", "Résultats Variables")}
              </h2>
              <p>
                {t(
                  "Results may vary depending on business structure, industry, client engagement, and usage of the automation tools. We do not guarantee specific business outcomes or revenue increases.",
                  "Les résultats peuvent varier en fonction de la structure de l'entreprise, du secteur d'activité, de l'engagement du client et de l'utilisation des outils d'automatisation. Nous ne garantissons pas de résultats commerciaux spécifiques ni d'augmentation de revenus."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Scope of Automation", "Portée de l'Automatisation")}
              </h2>
              <p>
                {t(
                  "Automation tools assist but do not replace business management. They are designed to support and enhance existing operations, not to serve as a substitute for business decisions, strategy, or human oversight.",
                  "Les outils d'automatisation assistent mais ne remplacent pas la gestion d'entreprise. Ils sont conçus pour soutenir et améliorer les opérations existantes, et non pour se substituer aux décisions commerciales, à la stratégie ou à la supervision humaine."
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

export default Disclaimer;
