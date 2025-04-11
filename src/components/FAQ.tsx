import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLangState } from "@/context/lang/context";
import { Trans } from "./Trans";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export const FAQ = () => {
  const { faq } = useLangState();
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
     <Trans isHtml>faq.title</Trans>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {faq?.list?.map(({ question, answer, value }: FAQProps) => (
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
      <Trans isHtml>faq.content</Trans>
    </section>
  );
};
