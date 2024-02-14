import React from "react";

interface BannerProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  siteHref: string;
  detailHref: string;
}

const Banner = ({ imgSrc, imgAlt, title, siteHref, detailHref }: BannerProps) => {

  return (
    <>

      <div className="flex flex-col items-center text-center">
        <h2 className="mb-2 text-3xl font-bold">{title}</h2>
        <br />
        <div className="flex flex-col gap-4 md:flex-row">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-32 rounded object-cover shadow-lg"
          />
          <div className="flex flex-col items-end gap-1 text-xs md:items-start">
            <a className="flex w-36 rounded-r-[4px] border-r-[8px] border-green-500 p-2 shadow" target="_blank" href={siteHref}>
              <p>사이트 바로 가기</p>
            </a>
            <a className="flex w-36 rounded-r-[4px] border-r-[8px] border-yellow-300 p-2 shadow" target="_blank" href={detailHref}>
              <p>프로젝트 상세 보기</p>
            </a>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Banner;