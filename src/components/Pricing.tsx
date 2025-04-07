import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Prova gratuitamente il nostro chatbot AI sul tuo sito. Nessuna carta richiesta, configurazione immediata.",
    buttonText: "Inizia gratis",
    benefitList: [
      "1 chatbot attivo",
      "Fino a 100 messaggi al mese",
      "Integrazione semplice tramite script",
      "Template base per settore",
      "Supporto community",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 19,
    description:
      "Ideale per freelance e piccole imprese. Automatizza le risposte e raccogli lead senza sforzo.",
    buttonText: "Provalo gratis",
    benefitList: [
      "3 chatbot attivi",
      "Fino a 1.000 messaggi al mese",
      "Personalizzazione avanzata dei prompt",
      "Integrazione CRM (Zapier, webhook)",
      "Supporto email prioritario",
    ],
  },
  {
    title: "Business",
    popular: 0,
    price: 49,
    description:
      "Per agenzie e aziende che vogliono scalare con assistenti AI intelligenti e connessi ai propri sistemi.",
    buttonText: "Contattaci",
    benefitList: [
      "Chatbot illimitati",
      "Messaggi illimitati",
      "Integrazione dati in tempo reale (API)",
      "Rimozione del nostro branding",
      "Supporto premium dedicato",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Piani{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          flessibili
        </span>{" "}
        per ogni esigenza
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Scegli il piano adatto a te e inizia a usare il tuo chatbot AI per automatizzare il supporto, raccogliere contatti e far crescere il tuo sito.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-2 border-primary"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Il più scelto
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">€{pricing.price}</span>
                <span className="text-muted-foreground"> /mese</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
