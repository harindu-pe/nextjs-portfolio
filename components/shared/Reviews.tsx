"use client";

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Alex Johnson",
    job: "Marketing Manager",
    review:
      "The collaborative approach and attention to detail exceeded our expectations. We now have a site that not only looks fantastic but also performs seamlessly.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Emily Martinez",
    job: "Graphic Designer",
    review:
      "As a fellow creative professional, I appreciate the seamless integration of design and functionality.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Jason Thompson",
    job: "IT Director",
    review:
      "The website not only meets our current needs but is also future-proof. Harindu is our go-to web developer for any digital undertaking.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
