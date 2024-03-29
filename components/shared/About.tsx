import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import {
  Briefcase,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiGreensock, SiSanity, SiPrismic } from "react-icons/si";
import { FiFramer } from "react-icons/fi";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Harindu Egalla",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+94 76 881 5834",
  },
  {
    icon: <MailIcon size={20} />,
    text: "harindu.pe@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Colombo, Sri Lanka",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Monash University",
        qualification: "Bachelor of Chemical Engineering (Hons)",
        years: "2017 - 2020",
      },
      {
        university: "Al Diyafah High School",
        qualification: "A Levels",
        years: "2015 - 2016",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Freelance",
        role: "Frontend Web Developer",
        years: "2023 - Present",
      },
      {
        company: "Twinery",
        role: "Technology Entrepreneur",
        years: "2021 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Web Design",
      },
      {
        name: "Typography & Colors",
      },
      {
        name: "UI/UX Design",
      },
      {
        name: "SEO",
      },
      {
        name: "Animations - Framer Motion & GSAP",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        icon: IoLogoJavascript,
      },
      {
        icon: FaReact,
      },
      {
        icon: SiNextdotjs,
      },
      {
        icon: IoLogoFirebase,
      },
      {
        icon: FiFramer,
      },
      {
        icon: SiGreensock,
      },
      {
        icon: SiSanity,
      },
      {
        icon: SiPrismic,
      },
    ],
  },
];

const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex h-[530px] flex-1 relative bg-about_shape_light dark:bg-about_shape_dark bg-no-repeat items-center">
            <div className="relative w-full h-[300px] -left-24">
              <Image
                src="/about/thinking.svg"
                fill
                priority
                alt="hero"
                className="rounded-3xl object-cover"
              />
            </div>
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Where Creativity Meets Code</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Most websites do not follow both basic and advanced UX
                      design practices which makes it harder to understand, and
                      overall less effective. I aim to prevent this with the way
                      I design websites.
                      <span className="block mt-4 italic text-md">
                        &quot;My goal is to create value in terms of increased
                        customer engagement for your business.&quot;
                      </span>
                    </p>

                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages</div>
                      <div className="border-b border-border"></div>
                      <div>English, Sinhala</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item: any, index: any) => {
                              const { company, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item: any, index: any) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-8">My Areas of Expertise</h3>
                    {/* skills */}
                    <div className="mb-16 ">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item: any, index: any) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-4/5 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Stack
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-6 justify-center xl:justify-start flex-wrap">
                        {getData(skillData, "tools").data.map(
                          (item: any, index: any) => {
                            return (
                              <div key={index}>
                                <item.icon size={40} />
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
