import { imgBaseUrl } from '@/utils/constants';
import Link from 'next/link';
import React from 'react';
import { HiChevronLeft, HiChevronRight, HiPlus } from 'react-icons/hi';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { IMovie, ITv } from '@/utils/types';

export interface Props {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  title: string;
  name: string;
  original_name: string;
  original_title: string;
  backdrop_path: string;
  media_type: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  original_language: string;
}

export const CustomCarousel = ({ movies }: { movies: ITv[] | IMovie[] }) => {
  return (
    <>
      <Carousel
        className="position-relative"
        showArrows={true}
        transitionTime={1500}
        interval={4000}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
        // animationHandler={'fade'}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`position-${
                hasPrev ? 'absolute' : 'hidden'
              } top-0 bottom-0 start-0 p-3 text-white rounded-3 fs-2 d-flex justify-content-center align-items-center  text-light h-100 `}
              style={{ zIndex: '50' }}
            >
              <button
                className={`btn text-white rounded-3 fs-2 d-flex justify-content-center align-items-center p-1 blur-20 text-light `}
                onClick={clickHandler}
              >
                <HiChevronLeft fontSize={25} className="" />
              </button>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`position-${
                hasNext ? 'absolute' : 'hidden'
              }  top-0 bottom-0 end-0 p-3 text-white rounded-3 fs-2 d-flex justify-content-center align-items-center h-100 `}
            >
              <button
                className={` btn text-white rounded-3 fs-2 d-flex justify-content-center align-items-center p-1 blur-20 text-light `}
                onClick={clickHandler}
              >
                <HiChevronRight fontSize={25} className="" />
              </button>
            </div>
          );
        }}
      >
        {movies?.map((m) => {
          return (
            <div key={m.id} className="slider-wrapper ">
              <div className="slider-wrapper position-relative z-999">
                <Image
                  src={imgBaseUrl + '/original' + m.backdrop_path}
                  fill={true}
                  quality={60}
                  className="object-cover object-center bg-norepeat rounded-4"
                  alt={m.title || m.name}
                />
                <div className="bg-gradient-to-r position-sticky h-100 w-100 p-5 d-flex flex-column justify-content-between align-items-start">
                  <div className="ps-4">
                    <h1 className="text-light text-capitalize">
                      {m.title || m.name}
                    </h1>
                    <div className="d-flex gap-2 align-items-center fs-10 text-warning">
                      {Array.from({ length: m.vote_average / 2 }, (_, v) => {
                        return <BsStarFill key={v} />;
                      })}
                      {(m.vote_average / 2).toString()[2] >= (5).toString() && (
                        <BsStarHalf />
                      )}
                      {(m.vote_average / 2).toFixed(1)} / 5
                    </div>
                  </div>
                  <p className="text-muted w-50 text-start ps-4">
                    {m.overview.slice(0, 150)}
                  </p>
                  <div className="w-100 d-flex gap-3 justify-content-start align-items-center ps-4">
                    <button className="d-flex gap-1 align-items-center btn rounded-3 blur-20 fw-bold text-light">
                      <HiPlus fontWeight={800} fontSize={24} /> Watchlist
                    </button>
                    <Link
                      href={`/${m.media_type.toLocaleLowerCase()}/${m.id}`}
                      className="btn fw-bold blur-30 rounded-3"
                    >
                      Watch Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CustomCarousel;
