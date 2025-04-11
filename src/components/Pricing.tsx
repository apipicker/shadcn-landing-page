import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Trans } from "./Trans";
import { useLangState } from "@/context/lang/context";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  foreground?: string;
  description: string;
  currency: string;
  buttonText: string;
  benefitList: string[];
}

 

export const Pricing = () => {
  const { pricing } = useLangState();
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
    <Trans isHtml>pricing.title</Trans>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        {pricing?.content}
          </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricing?.pricingList.map((price: PricingProps) => (
          <Card
            key={price.title}
            className={
              price.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-2 border-primary"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {price.title}
                {price.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                   {pricing?.badge}
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{price.currency}{price.price}</span>
                <span className="text-muted-foreground"> /{price?.foreground}</span>
              </div>
              <CardDescription>{price.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{price.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {price.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
