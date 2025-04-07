import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
         <h1 className="inline">
  <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
    Crea il tuo Bot AI
  </span>{" "}
  in pochi minuti
</h1>{" "}
per{" "}
<h2 className="inline">
  <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
    siti web e aziende
  </span>
</h2>
        </main>

<p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
  Il primo chatbot AI italiano pensato per siti web, e-commerce e attività locali. 
  Addestra il tuo assistente virtuale con pochi click, integralo sul tuo sito e automatizza le risposte ai clienti, la raccolta contatti e molto altro. 
  Nessun codice richiesto, solo risultati.
</p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button> 
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};