import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Line from "../components/Line";
import { useState, useEffect } from "react";
import Clubs from "../components/Clubs";
import Freelances from "../components/Freelances";
import Certificates from "../components/Certificates";

function About() {
  const [tkmimages, setTkmimages] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [freelances, setFreelances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [imagesRes, clubsRes, freelancesRes] = await Promise.all([
          fetch("/data/tkmimages.json"),
          fetch("/data/clubs.json"),
          fetch("/data/freelance.json"),
        ]);

        const imagesData = await imagesRes.json();
        const clubsData = await clubsRes.json();
        const freelancesData = await freelancesRes.json();

        setTkmimages(imagesData);
        setClubs(clubsData);
        setFreelances(freelancesData);
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

  // if (loading) return <div>loading</div>;

  return (
    <>
      <Clubs clubs={clubs} />
      <Line />
      {/* ------------------------------------- */}
      <Freelances />
      <Line />
      {/* ------------------------------------- */}
      <Certificates />
      <Line />

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
              ? Array.from({ length: 6 }).map((_, i) => (
                  <ImageSkeleton key={i} />
                ))
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
      <Line />
      {/* ------------------------------------- */}
      <div className="p-8 md:p-32 lg:max-w-7xl mx-auto md:text-left">
        <div className="text-xl md:text-6xl font-bold ">PLUS 2 BS</div>
        <div className="text-sm md:text-xl mt-2 opacity-70">
          did my XII in Biology Science from GHSS Karuvanpoyil, Calicut, SCERT,
          - 2018-20
        </div>

        <PhotoProvider>
          <div className="mt-10 flex gap-2 md:gap-4 space-y-2 md:space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <PhotoView key={i} src={`/assets/images/XII/${i + 1}.jpg`}>
                <img
                  src={`/assets/images/XII/${i + 1}.jpg`}
                  alt={`Gallery ${i + 1}`}
                  loading="lazy"
                  className="rounded-lg md:rounded-2xl hover:scale-105 transition-transform duration-500 object-cover w-full h-50"
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
