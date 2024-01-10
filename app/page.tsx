// components
import About from "@/components/shared/About";
import Cta from "@/components/shared/Cta";
import Hero from "@/components/shared/Hero";
import Reviews from "@/components/shared/Reviews";
import Services from "@/components/shared/Services";
import Work from "@/components/shared/Work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
