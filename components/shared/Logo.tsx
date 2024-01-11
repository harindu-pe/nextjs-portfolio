// next link
import Link from "next/link";
// next image
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        width={54}
        height={54}
        alt="logo"
        priority
        className="w-2/5 h-auto"
      />
    </Link>
  );
};

export default Logo;
