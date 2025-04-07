import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const features: FeatureProps[] = [
  {
    title: "Design responsive",
    description:
      "La nostra piattaforma si adatta perfettamente a qualsiasi dispositivo, offrendo un'esperienza utente ottimale su desktop, tablet e mobile.",
    image: image4,
    alt: "Grafica che rappresenta il design responsive su dispositivi mobili",
  },
  {
    title: "Interfaccia intuitiva",
    description:
      "Crea e gestisci il tuo bot AI con un’interfaccia semplice e immediata. Nessuna esperienza tecnica richiesta.",
    image: image3,
    alt: "Utente che interagisce con un'interfaccia user-friendly",
  },
  {
    title: "Insight potenziati dall'AI",
    description:
      "Ottieni analisi in tempo reale sui tuoi clienti grazie all'intelligenza artificiale. Scopri trend, richieste frequenti e comportamenti utente.",
    image: image,
    alt: "Grafico in crescita che rappresenta insight con intelligenza artificiale",
  },
];

const featureList: string[] = [
  "Tema chiaro/scuro",
  "Recensioni integrate",
  "Caratteristiche personalizzabili",
  "Piani di abbonamento",
  "Modulo contatti",
  "Il nostro team",
  "Design responsivo",
  "Newsletter automatica",
  "Stile minimalista",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Le{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          funzionalità principali
        </span>{" "}
        della nostra piattaforma
      </h2>

      <p className="text-xl text-muted-foreground md:text-center md:w-3/4 mx-auto">
        Tutto ciò che ti serve per creare un assistente virtuale AI efficace, veloce da configurare e integrabile con ogni tipo di sito o attività.
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image, alt }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt={alt}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
