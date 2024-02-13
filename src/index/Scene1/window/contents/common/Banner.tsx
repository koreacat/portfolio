import React from "react";

interface BannerProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  linkEls: React.ReactNode[];
}

const Banner = ({ imgSrc, imgAlt, title, linkEls }: BannerProps) => {

  return (
    <>
      <img
        src={imgSrc}
        alt={imgAlt}
        className="h-32 object-cover shadow shadow-lg rounded"
      />
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <br />
        {...linkEls}
      </div>
    </>
  )
}

export default Banner;