import React from 'react';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import { HiPlus } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  type: string;
  imageUrl: string;
  id: number;
  vote?: number;
  country?: string;
};

export default function MovieCard({
  title,
  imageUrl,
  type,
  id,
  vote,
  country,
}: Props) {
  return (
    <>
      <div className="col mb-3 flex-grow-1 mx-auto">
        <div
          className="position-relative overflow-hidden w-100 h-100 border border-dark rounded-4 "
          style={{
            minWidth: '260px',
            maxWidth: '340px',
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill={true}
            quality={70}
            className="w-100 h-100 rounded-4 object-cover object-center bg-norepeat"
          />
          <div className="position-sticky p-3 bg-gradient-to-br h-100 w-100 rounded-4">
            <div className="">
              <div
                className="text-capitalize fs-4 fw-bolder text-light pt-1 "
                style={{
                  minHeight: '209px',
                }}
              >
                <h2 className="fs-4">{title}</h2>
              </div>
              {vote && (
                <div className="d-flex align-items-center gap-1 fw-semibold text-warning my-3 p-1 rounded-2 blur-1 mix-color-evert w-fit-c fs-10">
                  {Array.from({ length: vote / 2 }, (_, v) => {
                    return <BsStarFill key={v} />;
                  })}
                  {(vote / 2).toFixed(1).toString()[2] >= (5).toString() && (
                    <BsStarHalf />
                  )}
                  {(vote / 2).toFixed(1)} / 5
                </div>
              )}
              <div className=""></div>
            </div>
            <div
              className="card-foote text-muted  lh-sm fw-semibold d-flex align-items-center justify-content-between w-100"
              style={{ fontSize: '14px' }}
            >
              <button className="badge btn btn-secondary bg-opacity-50 rounded-3 text-light text-uppercase d-flex justify-content-center align-items-center fw-bold blur-15 fw-bolder">
                <HiPlus fontSize={29} />
              </button>
              <Link
                href={`/${type.toLocaleLowerCase()}/${id}`}
                className="btn btn-sm p-1 rounded-3 d-flex align-items-center justify-content-center w-75  blur-30 fw-semibold fs-5"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
