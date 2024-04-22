"use client";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import ProjectCard from "@/components/shared/ProjectCard";

const projectData = [
  {
    image: "/work/glisten.png",
    category: "NextJS",
    name: "Glisten AI",
    description:
      "Dark Modern Animated Website with Next.js 14, GSAP, Prismic, Tailwind, and TypeScript",
    link: "https://glisten-ai.vercel.app/",
    github: "https://github.com/harindu-pe/glisten",
  },
  {
    image: "/work/flowrise.png",
    category: "NextJS",
    name: "Flowrise",
    description:
      "Modern Landing Page with Next.js 14, Prismic, Tailwind, and TypeScript",
    link: "https://landing-page-flowrise.vercel.app/",
    github: "https://github.com/harindu-pe/landing-page-flowrise",
  },
  {
    image: "/work/author.png",
    category: "NextJS",
    name: "3D Animated Portfolio",
    description:
      "Stunning 3D Animated Portfolio Website with Next.js 14, Three.js, GSAP, and Prismic",
    link: "https://landing-page-author.vercel.app/",
    github: "https://github.com/harindu-pe/landing-page-author",
  },
  {
    image: "/work/apple.png",
    category: "Vite",
    name: "Apple Template",
    description:
      "An Apple-esque Website using React | Beginner Three.js & GSAP. ",
    link: "https://landing-page-apple-three.vercel.app/",
    github: "https://github.com/harindu-pe/landing-page-apple",
  },
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
    image: "/work/webcraft.png",
    category: "NextJS",
    name: "WebCraft",
    description:
      "Portfolio for developer that specialize in creating visually stunning websites that exceed expectations.",
    link: "https://webcraft-tau.vercel.app/",
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
  {
    image: "/work/artplatform.png",
    category: "React",
    name: "Art Platform",
    description:
      "Our art platform project seamlessly connects creators with enthusiasts, offering a vibrant space to showcase and discover",
    link: "https://art-project-31cb3.web.app/",
    github: "/",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...Array.from(new Set(projectData.map((item) => item.category))),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is "all projects" return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
