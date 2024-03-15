// next link
import Link from "next/link";
// next image
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/harindu.png" width={150} height={150} alt="logo" priority />
    </Link>
  );
};

export default Logo;
