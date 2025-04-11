import { useLangState } from "@/context/lang/context";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Trans } from "./Trans";

export const Newsletter = () => {
  const { newsletter } = useLangState();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="contact">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <Trans isHtml>newsletter.title</Trans>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          {newsletter?.content}
        </p>

        <form
          className="flex flex-col w-full md:flex-col md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder={newsletter?.form?.email?.placeholder}
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label={newsletter?.form?.email?.label}
            name="email"
          />
          <Input
            
            placeholder={newsletter?.form?.subject?.placeholder}
            className="bg-muted/50 dark:bg-muted/80 " 
            aria-label={newsletter?.form?.subject?.label}
            name="subject"
          />
          <Textarea
            placeholder={newsletter?.form?.message?.placeholder}
            aria-label={newsletter?.form?.message?.label}
            className="bg-muted/50 dark:bg-muted/80 "
            name="context"
          />
          <Button>Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
