import { motion } from "framer-motion";
import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

function CertificateCard({ id, className = "" }) {
  const [hovered, setHovered] = useState(false);
  const src = `/assets/images/cetrificates/certificate_${id.id}.jpg`;
  return (
    <div
      className={`overflow-hidden relative rounded-lg opacity-50 hover:opacity-100 duration-300 p-2 outline ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-auto object-cover text-left p-2 xl:p-4">
        <div className="lg:text-xl font-bold xl:mb-0">{id.name}</div>
        <div className="text-xs xl:text-base">{id.desc}</div>
      </div>
      <PhotoView src={src}>
        <motion.img
          animate={{
            clipPath: hovered ? "inset(0% 0% 100% 0%)" : "inset(0% 0% 0% 0%)",
          }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="h-full object-cover rounded"
          src={src}
          alt={`Certificate_${id.id}`}
        />
      </PhotoView>
    </div>
  );
}

export default function Certificates() {
  const cArray = [
    { id: 19, name: "MERN Stack", desc: "KASE Next Gen 3.0" },
    { id: 26, name: "NPTEL ", desc: "Python Computing" },
    { id: 2, name: "AKIASSC'23", desc: "Volunteer" },
    { id: 3, name: "AKSC'23 Winner", desc: "UI Competition" },
    { id: 4, name: "MERN", desc: "KASE Next Gen" },
    { id: 20, name: "MERN", desc: "KASE Next Gen" },
    { id: 24, name: "MERN", desc: "KASE Next Gen" },
    { id: 5, name: "MERN", desc: "KASE Next Gen" },
    { id: 6, name: "MERN", desc: "KASE Next Gen" },
    { id: 7, name: "MERN", desc: "KASE Next Gen" },
    { id: 8, name: "MERN", desc: "KASE Next Gen" },
    { id: 9, name: "MERN", desc: "KASE Next Gen" },
    { id: 10, name: "MERN", desc: "KASE Next Gen" },
    { id: 11, name: "MERN", desc: "KASE Next Gen" },
    { id: 12, name: "MERN", desc: "KASE Next Gen" },
    { id: 13, name: "MERN", desc: "KASE Next Gen" },
    { id: 25, name: "MERN", desc: "KASE Next Gen" },
    { id: 15, name: "MERN", desc: "KASE Next Gen" },
    { id: 14, name: "MERN", desc: "KASE Next Gen" },
    { id: 16, name: "MERN", desc: "KASE Next Gen" },
    { id: 17, name: "MERN", desc: "KASE Next Gen" },
    { id: 22, name: "MERN", desc: "KASE Next Gen" },
    { id: 1, name: "MERN", desc: "KASE Next Gen" },
    { id: 18, name: "MERN", desc: "KASE Next Gen" },
    { id: 21, name: "MERN", desc: "KASE Next Gen" },
    { id: 23, name: "MERN", desc: "KASE Next Gen" },
    { id: 0, name: "MERN", desc: "KASE Next Gen" },
  ];

  const cOrder = [
    19, 26, 2, 3, 4, 20, 24, 5, 6, 7, 8, 9, 10, 11, 12, 13, 25, 15, 14, 16, 17,
    22, 1, 18, 21, 23, 0,
  ];
  const [showmore, setShowmore] = useState(false);

  return (
    <div className="p-8 md:p-32 lg:px-50 md:text-center">
      <div className="text-xl md:text-6xl font-bold">Certificates</div>

      <PhotoProvider>
        <div className="w-full mt-10 lg:mt-20 border-1 border-zinc-500/70 rounded-2xl p-3 md:p-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
          {showmore ? (
            cArray.map((i) => <CertificateCard key={i.id} id={i} />)
          ) : (
            <>
              {cArray.slice(0, 6).map((i) => (
                <CertificateCard key={i.id} id={i} />
              ))}

              {cArray.slice(6, 12).map((i) => (
                <CertificateCard
                  key={i.id}
                  id={i}
                  className="hidden md:block"
                />
              ))}

              {cArray.slice(12, 18).map((i) => (
                <CertificateCard
                  key={i.id}
                  id={i}
                  className="hidden xl:block"
                />
              ))}
            </>
          )}
        </div>
      </PhotoProvider>

      <div className="w-full text-center mt-6">
        <button
          onClick={() => setShowmore((s) => !s)}
          className="inline-block hover:underline text-lg md:text-2xl font-semibold tracking-wider"
          aria-expanded={showmore}
        >
          {showmore ? "SHOW LESS ←" : "SHOW MORE →"}
        </button>
      </div>
    </div>
  );
}
