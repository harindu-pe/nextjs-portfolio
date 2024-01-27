"use client";
import Link from "next/link";
import { Button } from "../ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/pixelstory.png",
    category: "NextJS",
    name: "PixelStory",
    description:
      "Welcome to PixelStory, where the intersection of modern tools and technology meets the art of navigating life's complexities.",
    link: "https://pixelstory.vercel.app/",
    github: "/",
  },
  {
    image: "/work/brewhub.png",
    category: "NextJS",
    name: "Brew Hub",
    description:
      "Welcome to BrewHaven, where every cup tells a story! Immerse yourself in the warm atmosphere of our coffee haven.",
    link: "https://nextjs-restaurant-xi.vercel.app/",
    github: "/",
  },
  {
    image: "/work/convene.png",
    category: "NextJS",
    name: "Convene",
    description:
      "Connect to a global community and create your events on our platform. Explore trending events in your community.",
    link: "https://convene-phi.vercel.app/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 ">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8 ">Explore my recent projects</p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[520px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
