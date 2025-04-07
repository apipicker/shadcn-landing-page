import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Facile da usare",
    description:
      "Crea il tuo chatbot AI in pochi minuti, senza scrivere una riga di codice. Piattaforma no-code ideale per chi non è tecnico.",
  },
  {
    icon: <MapIcon />,
    title: "Personalizzabile",
    description:
      "Adatta il bot al tuo settore o sito web con prompt su misura. Può rispondere a domande frequenti, raccogliere contatti o offrire supporto.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalabile",
    description:
      "Funziona per piccole attività, freelance o aziende più strutturate. Puoi creare più bot e integrarlo su più siti.",
  },
  {
    icon: <GiftIcon />,
    title: "Integrazione semplice",
    description:
      "Collega facilmente il tuo bot a CRM, gestionali o altri sistemi per offrire risposte dinamiche basate sui tuoi dati reali.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Come{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funziona
        </span>{" "}
        la nostra piattaforma
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Scopri i 4 step principali per creare, configurare e integrare il tuo assistente virtuale AI con la tua attività online.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
