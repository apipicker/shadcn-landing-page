import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { PlaneIcon, ChartIcon } from "./Icons";
import chatbotImage from "../assets/cube-leg.png";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import { useLangState } from "@/context/lang/context";
import { Trans } from "./Trans";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
}

const icons: any = {
  ChatBubbleIcon: <ChatBubbleIcon />,
  PlaneIcon: <PlaneIcon />,
  ChartIcon: <ChartIcon />,
};

export const Services = () => {
  const { service } = useLangState();
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <Trans isHtml>service.title</Trans>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            {service?.content}
          </p>

          <div className="flex flex-col gap-8">
            {service?.services?.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icons[icon]}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={chatbotImage}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Illustrazione dei servizi offerti dai chatbot AI"
        />
      </div>
    </section>
  );
};

