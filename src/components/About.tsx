import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Fondatore della piattaforma chatbot AI interagisce con i clienti"
            className="w-[300px] object-contain rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Chi siamo:{" "}
                </span>
                La nostra piattaforma di assistenti virtuali
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Offriamo una piattaforma innovativa per creare chatbot AI personalizzati, pensata per le piccole imprese italiane. 
                I nostri bot aiutano ad automatizzare le risposte ai clienti, generare nuovi contatti e migliorare l'efficienza aziendale, 
                tutto senza scrivere una riga di codice.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Ogni assistente virtuale può essere istruito con contenuti specifici del tuo settore e integrato facilmente con il tuo sito web. 
                Sono disponibili anche integrazioni con CRM, gestione prodotti e report su metriche come il fatturato o la disponibilità di magazzino.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
