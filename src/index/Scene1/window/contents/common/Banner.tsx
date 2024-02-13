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
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <br />
        <div className="flex flex-col md:flex-row gap-4">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-32 object-cover shadow shadow-lg rounded"
          />
          <div className="flex flex-col items-end md:items-start gap-1 text-xs">
            <a className="flex w-36 shadow p-2 rounded-r-[4px] border-r-[8px] border-green-500" target="_blank" href={siteHref}>
              <p>사이트 바로 가기</p>
            </a>
            <a className="flex w-36 shadow p-2 rounded-r-[4px] border-r-[8px] border-yellow-300" target="_blank" href={detailHref}>
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