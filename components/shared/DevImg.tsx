import Image from "next/image";

type DevImgProps = {
  containerStyles: string;
  imgSrc: string;
};

const DevImg = ({ containerStyles, imgSrc }: DevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="hero" />
    </div>
  );
};

export default DevImg;
