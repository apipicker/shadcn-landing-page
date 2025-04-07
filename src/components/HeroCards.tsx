import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, MessageCircleIcon, ShieldIcon } from "lucide-react";


export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonianza */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg">Mario Rossi</CardTitle>
            <CardDescription>CEO di Tech Solutions</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          "L'integrazione del chatbot ha trasformato il nostro servizio clienti, migliorando l'efficienza e la soddisfazione del cliente."
        </CardContent>
      </Card>

      {/* Funzionalità della Piattaforma */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <MessageCircleIcon className="w-12 h-12 text-primary" />
          <CardTitle className="text-center">Interazione Intelligente</CardTitle>
          <CardDescription className="font-normal text-primary">
            Comprensione avanzata del linguaggio naturale per conversazioni realistiche.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Piano Tariffario */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Premium
            <Badge variant="secondary" className="text-sm text-primary">
              Più Popolare
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">€29</span>
            <span className="text-muted-foreground"> /mese</span>
          </div>

          <CardDescription>
            Accesso completo a tutte le funzionalità avanzate del chatbot.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Inizia la Prova Gratuita</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Supporto 24/7", "Analisi Dettagliate", "Personalizzazione Completa"].map(
              (benefit) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Sicurezza della Piattaforma */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <ShieldIcon />
          </div>
          <div>
            <CardTitle>Sicurezza Avanzata</CardTitle>
            <CardDescription className="text-md mt-2">
              Protezione dei dati e conformità alle normative GDPR.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
