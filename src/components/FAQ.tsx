import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Il chatbot funziona anche su dispositivi mobili?",
    answer: "Sì, il bot è completamente responsive e funziona su smartphone, tablet e desktop.",
    value: "item-1",
  },
  {
    question: "Posso personalizzare le risposte del mio assistente AI?",
    answer: "Certo! Puoi istruire il bot con prompt personalizzati in base al tuo settore o ai contenuti del tuo sito.",
    value: "item-2",
  },
  {
    question: "È necessario saper programmare per usare il bot?",
    answer: "No, la piattaforma è pensata per essere usata anche da chi non ha competenze tecniche. Basta incollare uno script sul tuo sito.",
    value: "item-3",
  },
  {
    question: "C'è un piano gratuito per iniziare?",
    answer: "Sì, offriamo un piano gratuito con 1 bot attivo e fino a 100 messaggi al mese. Puoi provarlo senza carta di credito.",
    value: "item-4",
  },
  {
    question: "Il bot può integrarsi con il mio CRM o sistema gestionale?",
    answer: "Sì, nei piani Pro e Business puoi integrare il bot con sistemi esterni tramite API o Zapier.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Domande frequenti sui nostri{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          chatbot AI
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Hai ancora dubbi?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contattaci qui
        </a>
      </h3>
    </section>
  );
};
