import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Line from "../components/Line";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function About() {
  const [visibleclubs, setVisibleclubs] = useState(false);
  const [tkmimages, setTkmimages] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const freelance = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imagesRes, clubsRes] = await Promise.all([
          fetch("/data/tkmimages.json"),
          fetch("/data/clubs.json"),
        ]);

        const imagesData = await imagesRes.json();
        const clubsData = await clubsRes.json();

        setTkmimages(imagesData);
        setClubs(clubsData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const ImageSkeleton = () => (
    <div className="bg-zinc-500/20 animate-pulse rounded-lg aspect-square w-full"></div>
  );

  for (let i = 0; i < 7; i++) {
    freelance.push(
      <motion.li
        key={i}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: i * 0.1,
        }}
        viewport={{ once: true }}
        className="relative text-right text-base md:text-2xl  border-r border-zinc-500/70 "
      >
        <div className="py-3 md:py-6 pr-5 md:pr-12 hover:-translate-x-10 duration-500">
          <p>Kozhikode, SCERT Kerala, Biology Science 2018-20 {i}</p>
          <p className="text-xs md:text-base">description of the freelance</p>
        </div>
        <div className="absolute -right-1 bottom-0 border w-2 h-2 border-zinc-500/70 rounded-2xl bg-zinc-100 dark:bg-zinc-900"></div>
      </motion.li>
    );
  }

  return (
    <>
      <div className="m-8 text-xl md:text-6xl font-bold md:text-center md:mt-20">
        Been a part of
      </div>
      <div className="flex flex-wrap gap-5 md:mt-20 pb-15 px-8 md:px-50">
        <ul className="flex-35 border-t-1 border-t-zinc-500/50">
          {(visibleclubs ? clubs : clubs.slice(0, 5)).map((club, i) => (
            <motion.li
              className="border-b-1 border-b-zinc-500/50"
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="p-4 lg:px-10 hover:translate-x-2 hover:bg-zinc-500/10 duration-300">
                <p className="text-xl md:text-2xl">{club.name}</p>
                <p className="text-xs md:text-base">{club.des}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        {clubs.length > visibleclubs && (
          <div className="w-full text-center md:mt-6">
            <button
              onClick={() => setVisibleclubs(!visibleclubs)}
              className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider"
            >
              {visibleclubs ? "SHOW LESS →" : "SHOW MORE →"}
            </button>
          </div>
        )}
      </div>
      <Line />
      {/* ------------------------------------- */}
      <div className="p-8 md:p-32 lg:px-50 md:text-center">
        <div className="text-xl md:text-6xl font-bold mb-6 md:mb-12">
          Freelanced for
        </div>
        <ul>{freelance}</ul>
      </div>
      <Line />
      <div className="p-8 md:p-32 lg:px-50 md:text-center">
        <div className="text-xl md:text-6xl font-bold ">
          TKM College of Engineering
        </div>
        <div className="text-sm md:text-2xl mt-4 mb-2">
          Kollam, APJ Abdul Kalam Technological University, Kerala
        </div>
        <div className="text-sm md:text-2xl mt-2">
          Bachelor of Technology in Computer Science and Engineering 2021-25
        </div>

        <PhotoProvider>
          <div className="mt-10 md:mt-10 columns-2 sm:columns-3 md:columns-4 gap-2 md:gap-4 space-y-2 md:space-y-4">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <ImageSkeleton key={i} />
                ))
              : tkmimages.map((src, i) => (
                  <PhotoView key={i} src={src}>
                    <img
                      src={src}
                      alt={`Gallery ${i}`}
                      loading="lazy"
                      className="rounded-lg md:rounded-2xl hover:scale-102 transition-transform duration-500 "
                    />
                  </PhotoView>
                ))}
          </div>
        </PhotoProvider>
      </div>
      <Line />
      {/* ------------------------------------- */}
      <div className="p-8 md:p-32 lg:px-50 md:text-center">
        <div className="text-xl md:text-6xl font-bold ">GHSS Karuvanpoyil</div>
        <div className="text-sm md:text-2xl mt-4 mb-2">
          Kozhikode, SCERT Kerala, Biology Science 2018-20
        </div>

        <PhotoProvider>
          <div className="mt-10 md:mt-10 columns-2 sm:columns-3 md:columns-4 gap-2 md:gap-4 space-y-2 md:space-y-4">
            {tkmimages.map((src, i) => (
              <PhotoView key={i} src={src}>
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  loading="lazy"
                  className="rounded-lg md:rounded-2xl hover:scale-102 transition-transform duration-500"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </>
  );
}

export default About;
