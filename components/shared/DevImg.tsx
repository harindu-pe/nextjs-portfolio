import Image from "next/image";

type DevImgProps = {
  containerStyles: string;
  imgSrc: string | null;
};

const DevImg = ({ containerStyles, imgSrc }: DevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      {imgSrc && (
        <Image src={imgSrc} fill priority alt="hero" className="rounded-full" />
      )}
    </div>
  );
};

export default DevImg;
