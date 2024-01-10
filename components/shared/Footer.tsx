import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div>
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary"
          />
          {/* copright */}
          <div className="text-muted-foreground">
            Copright &copy; Harindu Egalla. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
