import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

function AboutTkmce() {
  const ImageSkeleton = () => (
    <div className="bg-zinc-500/20 animate-pulse rounded-lg aspect-square w-full"></div>
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  const tkmimages = [
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775876/tkm1_id61ka.jpg",
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775874/tkm2_hctnzc.jpg",
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775510/tkm11_soqj2b.jpg",

    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775878/tkm7_ojfgte.jpg",
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775431/tkm8_rkocn6.jpg",
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775537/tkm6_lgwflr.jpg",

    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775531/tkm4_yxromk.jpg",
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775505/tkm5_n7yyxx.jpg",
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775430/tkm3_l71tjd.jpg",

    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775475/tkm10_j3sxxo.jpg",
    "https://res.cloudinary.com/doap8ycoy/image/upload/f_auto,q_auto/v1759775432/tkm9_znfs17.jpg",
  ];

  return (
    <div className="p-8 md:p-32 lg:max-w-7xl mx-auto md:text-left">
      <div className="text-xl md:text-6xl font-bold ">B Tech CSE</div>
      <div className="text-sm md:text-xl mt-2 opacity-70">
        did my Bachelor of Technology in Computer Science and Engineering from
        TKM College of Engineering, Kollam, APJ Abdul Kalam Technological
        University, Kerala - 2021-25
      </div>

      <PhotoProvider>
        <div className="mt-10 md:mt-10 columns-2 sm:columns-3 md:columns-4 gap-2 md:gap-4 space-y-2 md:space-y-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ImageSkeleton key={i} />)
            : tkmimages.map((src, i) => (
                <PhotoView key={i} src={src}>
                  <img
                    src={src}
                    alt={`Gallery ${i}`}
                    loading="lazy"
                    className="rounded-lg md:rounded-xl hover:scale-105 transition-transform duration-500 "
                  />
                </PhotoView>
              ))}
        </div>
      </PhotoProvider>
    </div>
  );
}

export default AboutTkmce;
