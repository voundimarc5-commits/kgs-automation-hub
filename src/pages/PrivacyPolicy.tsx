import { useLang } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const PrivacyPolicy = () => {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-background relative">
      <NetworkBackground />
      <Navbar />
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            {t("Privacy Policy", "Politique de Confidentialité")}
          </h1>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Information We Collect", "Informations Collectées")}
              </h2>
              <p>
                {t(
                  "KGS Automations may collect the following information when you use our services or interact with our website:",
                  "KGS Automations peut collecter les informations suivantes lorsque vous utilisez nos services ou interagissez avec notre site web :"
                )}
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>{t("Contact information (name, email, phone number)", "Informations de contact (nom, email, numéro de téléphone)")}</li>
                <li>{t("Business information (company name, industry, size)", "Informations commerciales (nom de l'entreprise, secteur, taille)")}</li>
                <li>{t("Usage data (how you interact with our services and website)", "Données d'utilisation (comment vous interagissez avec nos services et notre site)")}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Purpose of Data Collection", "Objectif de la Collecte")}
              </h2>
              <p>{t("We use the collected information to:", "Nous utilisons les informations collectées pour :")}</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>{t("Provide and deliver our services", "Fournir et livrer nos services")}</li>
                <li>{t("Improve and optimize our systems", "Améliorer et optimiser nos systèmes")}</li>
                <li>{t("Communicate with clients about their services", "Communiquer avec les clients concernant leurs services")}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Data Sharing", "Partage des Données")}
              </h2>
              <p>
                {t(
                  "Your data is not sold to third parties. We may share information only with service providers who help us deliver our solutions, and only to the extent necessary.",
                  "Vos données ne sont pas vendues à des tiers. Nous pouvons partager des informations uniquement avec les prestataires qui nous aident à fournir nos solutions, et uniquement dans la mesure nécessaire."
                )}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t("Contact", "Contact")}
              </h2>
              <p>
                {t("For any questions about this policy, contact us at:", "Pour toute question concernant cette politique, contactez-nous à :")}
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

export default PrivacyPolicy;
