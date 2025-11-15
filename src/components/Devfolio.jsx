import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

function Devfolio() {
  const easypay = [];
  const snn = [];
  for (let i = 1; i <= 7; i++) {
    easypay.push(
      <PhotoView key={i} src={`/assets/images/devfolio/${i}.png`}>
        <img
          src={`/assets/images/devfolio/${i}.png`}
          alt="w"
          loading="lazy"
          className="rounded-lg md:rounded-2xl h-full object-cover"
        />
      </PhotoView>
    );
  }
  for (let i = 1; i <= 3; i++) {
    snn.push(
      <PhotoView key={i} src={`/assets/images/devfolio/snn${i}.jpg`}>
        <img
          src={`/assets/images/devfolio/snn${i}.jpg`}
          alt="w"
          loading="lazy"
          className="rounded-lg md:rounded-2xl w-full h-full object-cover"
        />
      </PhotoView>
    );
  }

  return (
    <div className="p-8 md:p-18 lg:px-50 md:text-center">
      <div className="text-xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-18">
        EasyPay Payment Wallet
      </div>

      <div className="text-sm md:text-xl mt-2 mb-10 text-justify">
        Easypay is a full-stack digital wallet application built with React and
        Node.js (MERN stack). It allows users to securely create accounts,
        manage wallet balances, transfer or request funds, and view transaction
        history in real time. The system features authentication, data
        encryption, and a clean UI for seamless payment management.
      </div>
      <a
        className="block rounded-lg md:rounded-2xl border-2 border-zinc-300 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-10"
        href="https://github.com/95-txt/EasyPay"
        target="_blank"
        rel="noreferrer"
      >
        github.com/95-txt/EasyPay
      </a>
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2  gap-2 md:gap-4">
          <div className="col-span-2 md:row-span-2">{easypay[6]}</div>
          <div className="md:col-start-3">{easypay[4]}</div>
          <div className="col-start-2 md:col-start-3 row-start-2">
            {easypay[1]}
          </div>
          {/* <div className="hidden md:block md:row-start-3">{easypay[0]}</div>
          <div className="hidden md:block md:row-start-3">{easypay[3]}</div>
          <div className="hidden md:block md:row-start-3">{easypay[5]}</div> */}
        </div>
      </PhotoProvider>
      <div className="text-xl md:text-5xl lg:text-6xl font-bold my-6 md:my-20 md:mt-40">
        SNN-Based Approach for Social Media Threat Detection Using NLP
      </div>

      <div className="text-sm md:text-xl mt-2 mb-10 text-justify">
        SNN-Based Approach for Social Media Threat Detection Using NLP is a
        research project that explores the use of Spiking Neural Networks (SNNs)
        and Natural Language Processing (NLP) techniques to identify and
        mitigate threats in social media content. The project aims to explore
        the efficiency of SNNs and to develop a robust framework for real-time
        threat detection, leveraging the unique capabilities of SNNs to process
        and analyze textual data.
      </div>
      <a
        className="block rounded-lg md:rounded-2xl border-2 border-zinc-300 py-2 md:py-3 px-5 my-3 md:my-4 mb-8 md:mb-10"
        href="https://github.com/95-txt/SNN-BASED-APPROACH-FOR-SOCIAL-MEDIA-THREAT-DETECTION-USING-NLP"
        target="_blank"
        rel="noreferrer"
      >
        github.com/95-txt/SNN-BASED-APPROACH-FOR-SOCIAL-MEDIA-THREAT-DETECTION-USING-NLP
      </a>

      <PhotoProvider>
        <div className="flex flex-cols-3 gap-2 md:gap-4 ">
          <div className="flex-3/12">{snn[0]}</div>
          <div className="flex-8/12">{snn[1]}</div>
          <div className="flex-3/12">{snn[2]}</div>
        </div>
      </PhotoProvider>
    </div>
  );
}

export default Devfolio;
