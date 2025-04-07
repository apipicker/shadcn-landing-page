import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {  PlaneIcon, ChartIcon } from "./Icons";
import chatbotImage from "../assets/cube-leg.png";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Assistenza Clienti Automatizzata",
    description:
      "Offri supporto 24/7 ai tuoi clienti con chatbot AI che rispondono alle domande frequenti e migliorano la soddisfazione del cliente.",
    icon: <ChatBubbleIcon />,
  },
  {
    title: "Integrazione con Sistemi Aziendali",
    description:
      "Collega il chatbot ai tuoi CRM e altri strumenti aziendali per una gestione efficiente dei dati e delle interazioni con i clienti.",
    icon: <PlaneIcon />,
  },
  {
    title: "Analisi e Reportistica",
    description:
      "Monitora le performance del chatbot e ottieni insight dettagliati per ottimizzare le strategie di comunicazione e vendita.",
    icon: <ChartIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Servizi Personalizzati{" "}
            </span>
            per la Tua Azienda
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Scopri come i nostri chatbot AI possono trasformare la comunicazione con i tuoi clienti e ottimizzare i processi aziendali.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={chatbotImage}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Illustrazione dei servizi offerti dai chatbot AI"
        />
      </div>
    </section>
  );
};

 