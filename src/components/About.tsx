import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { useLangState } from "@/context/lang/context";

export const About = () => {
  const { about } = useLangState();
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
                  {about?.title}{" "}
                </span>
                {about?.short}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                {about?.p1}
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                {about?.p2} 
                 </p>
            </div>

            <Statistics data={about?.statistics} />
          </div>
        </div>
      </div>
    </section>
  );
};
