import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronsUp,
  CircleDollarSign,
  MessageCircleHeart,
  MonitorSmartphone,
  Palette,
  SearchSlash,
} from "lucide-react";

const servicesData = [
  {
    icon: <CircleDollarSign size={72} strokeWidth={0.8} />,
    title: "Conversion Optimized",
    description:
      "Your site will pay for itself! I know the little tricks that can push people to convert from a visitor to a customer.",
  },
  {
    icon: <Palette size={72} strokeWidth={0.8} />,
    title: "Beautifully Designed",
    description:
      "Every page is designed to beautifully fit the style of your brand from fonts, icons, colors, and more!",
  },
  {
    icon: <ChevronsUp size={72} strokeWidth={0.8} />,
    title: "Speed Optimized",
    description:
      "Every page is developed with performance in mind. Blazing fast!",
  },
  {
    icon: <MonitorSmartphone size={72} strokeWidth={0.8} />,
    title: "Mobile Optimized",
    description:
      "Mobile makes up 58.21% of global internet traffic. Every page will be mobile responsive.",
  },
  {
    icon: <SearchSlash size={72} strokeWidth={0.8} />,
    title: "Search Engine Optimized",
    description:
      "The best SEO practices are followed, starting with proper meta-data, markup, accessibility, and more to boost its ranking!",
  },
  {
    icon: <MessageCircleHeart size={72} strokeWidth={0.8} />,
    title: "Client-Loved",
    description:
      "My clients love their websites. Also a fast turn-around time, email support, and a smooth website build process.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto ">
        <h2 className="section-title mb-16 xl:mb-24 text-center mx-auto">
          Built For Success
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] flex flex-col pt-16 pb-10 justify-start items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
