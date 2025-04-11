import { useLangState } from "@/context/lang/context";
import { Button } from "./ui/button";
import { Trans } from "./Trans";

export const Cta = () => {
    const { cta } = useLangState();
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
           <Trans isHtml>cta.title</Trans>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            {cta?.content}
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
        <Button className="w-full md:mr-4 md:w-auto">
           {cta?.btn1}
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
             {cta?.btn2}
          </Button>
        </div>
      </div>
    </section>
  );
};
