"use client";

// next link
import Link from "next/link";

// ui
import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// animation
import Lottie from "lottie-react";
var designStudioAnimation = require("/public/animations/designStudio.json");

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const heroData = {
  job: "Web Developer",
  header: "Unbeatable Websites For Small Businesses",
  description:
    "I make premium budget-friendly websites for businesses who want an online presence to drive customer engagement and gain increased conversions.",
};

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              {heroData.job}
            </div>
            <h1 className="h1">{heroData.header}</h1>
            <p className="subtitle mt-3 max-w-[490px] mx-auto xl:mx-0">
              {heroData.description}
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2 ">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              {/* <Button variant="secondary" className="gap-x-2 ">
                Download CV <Download size={18} />
              </Button> */}
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:ml-4"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative w-[600px]">
            <Lottie
              animationData={designStudioAnimation}
              loop={true}
              className=" relative -left-20"
            />

            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[5%] -left-[3rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              endCountText=""
              badgeText="Year Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[6rem]"
              icon={<RiTodoFill />}
              endCountNum={8}
              endCountText=""
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[25%] -right-10"
              icon={<RiTeamFill />}
              endCountNum={10}
              endCountText=""
              badgeText="Happy Clients"
            />
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
