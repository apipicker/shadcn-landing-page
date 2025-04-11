import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { useLangState } from "@/context/lang/context";
import { Trans } from "./Trans";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const icons: any = {
  MedalIcon: <MedalIcon />,
  MapIcon: <MapIcon />,
  PlaneIcon: <PlaneIcon />,
  GiftIcon: <GiftIcon />,
}

export const HowItWorks = () => {
  const { howitwork } = useLangState();
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        <Trans isHtml>howitwork.title</Trans>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        {howitwork?.content}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {howitwork?.features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icons[icon]}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
