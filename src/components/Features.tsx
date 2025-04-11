// import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";
import { useLangState } from "@/context/lang/context";
import { Trans } from "./Trans";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const images:any = {
  image4: image4,
  image3: image3,
  image: image,
};

// const featureList: string[] = [
//   "Tema chiaro/scuro",
//   "Recensioni integrate",
//   "Caratteristiche personalizzabili",
//   "Piani di abbonamento",
//   "Modulo contatti",
//   "Il nostro team",
//   "Design responsivo",
//   "Newsletter automatica",
//   "Stile minimalista",
// ];

export const Features = () => {
  const { feature } = useLangState();
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        <Trans isHtml>feature.title</Trans>
      </h2>

      <p className="text-xl text-muted-foreground md:text-center md:w-3/4 mx-auto">
        {feature?.content}
      </p>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feature?.features.map(({ title, description, image, alt }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={images[image]}
                alt={alt}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
