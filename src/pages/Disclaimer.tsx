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
                {t("Our Services", "Nos Services")}
              </h2>
              <p>
                {t(
                  "KGS Automations installs business solutions designed to improve your operations. These systems are built to help capture clients, organize workflows, and streamline communications.",
                  "KGS Automations installe des solutions business conçues pour améliorer vos opérations. Ces systèmes sont conçus pour aider à capturer des clients, organiser les workflows et fluidifier les communications."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Variable Results", "Résultats Variables")}
              </h2>
              <p>
                {t(
                  "Results may vary depending on business structure, industry, client engagement, and usage of the tools provided. We do not guarantee specific business outcomes or revenue increases.",
                  "Les résultats peuvent varier en fonction de la structure de l'entreprise, du secteur d'activité, de l'engagement du client et de l'utilisation des outils fournis. Nous ne garantissons pas de résultats commerciaux spécifiques ni d'augmentation de revenus."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Scope of Our Solutions", "Portée de Nos Solutions")}
              </h2>
              <p>
                {t(
                  "Our tools assist but do not replace business management. They are designed to support and enhance existing operations, not to serve as a substitute for business decisions, strategy, or human oversight.",
                  "Nos outils assistent mais ne remplacent pas la gestion d'entreprise. Ils sont conçus pour soutenir et améliorer les opérations existantes, et non pour se substituer aux décisions commerciales, à la stratégie ou à la supervision humaine."
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
