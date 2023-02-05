import React, { useContext, useState } from 'react';
import { GetServerSideProps } from 'next';
import { MovieCard, SearchBar, Sidebar } from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { BsBook, BsShareFill, BsStarFill, BsStarHalf } from 'react-icons/bs';

// local imports
import { ThemeContext } from '@/context/themeContext';
import { apiKey, baseUrl, imgBaseUrl } from '@/utils/constants';
import { CustomSpinnier } from '@/components/CustomSpinnier';
import { ICast, ICrew, IMovie } from '@/utils/types';
import { CHARACTER_ROUTE } from '@/utils/routes';
import 'react-responsive-modal/styles.css';

interface Props {
  movie: IMovie;
  casts: {
    cast: ICast[];
    crew: ICrew[];
  };
  recommendations: IMovie[];
}

export default function MovieDetails({ movie, casts, recommendations }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>MOFLIX - {movie.title}</title>
        <meta name="description" content={movie.overview} />
      </Head>
      <div
        className={`container-fluid bg-${
          theme === 'dark' && 'secondary'
        } position-relative`}
      >
        <div className="row min-vh-100 flex-column flex-md-row ">
          <Sidebar />
          <main className="col p-0 flex-grow-1">
            <SearchBar />
            {movie ? (
              <>
                <div className=" text-light  w-100  position-relative ">
                  <div className=" position-relative p-0">
                    <Image
                      src={imgBaseUrl + '/original' + movie.backdrop_path}
                      alt={movie.name || movie.title}
                      fill
                      className="img-fluid w-100 object-center object-cover position-fixed"
                      quality={100}
                    />
                    <div className="position-sticky bg-gradient-to-br">
                      <div className=" h-100 d-flex flex-column align-items-center  overflow-auto scroll-sm">
                        <div className="row row-cols-12 gap-5 h-lg-75 h-50 w-lg-75 w-100 my-auto p-lg-4 p-2 justify-content-center h-100">
                          <div className="col col-lg-8 col-12  h-100 d-flex flex-column justify-content-between">
                            <div className="">
                              <h1 className="fs-2">{movie.title}</h1>
                              <div className="d-flex gap-2 align-items-center fs-6 fw-lighter">
                                <div className="d-flex align-items-center gap-1 text-warning">
                                  {Array.from(
                                    { length: movie.vote_average / 2 },
                                    (_, v) => {
                                      return <BsStarFill key={v} />;
                                    }
                                  )}
                                  {(movie.vote_average / 2)
                                    .toFixed(1)
                                    .toString()[2] > '5' && <BsStarHalf />}
                                </div>{' '}
                                {(movie.vote_average / 2).toFixed(1)} {'|'}
                                <div className="">
                                  {(movie.runtime / 60).toString()[0]}h{' '}
                                  {movie.runtime % 60}min
                                </div>
                                <p className="text-success m-0">
                                  {movie.status}
                                </p>
                              </div>
                              {/* genres */}
                              <div className="d-flex gap-2 align-items-center py-2">
                                {movie.genres.map((genre) => {
                                  return (
                                    <span
                                      key={genre.id}
                                      className="badge p-0 blur-5 fw-light rounded-1"
                                    >
                                      {genre.name}
                                    </span>
                                  );
                                })}
                              </div>
                              <div className="my-4 flex-grow-1">
                                {movie.overview}
                              </div>
                            </div>
                            {/* watch trailer buttons */}
                            <div className="d-flex align-items-center gap-2 pb-lg-2 pb-1">
                              <button
                                className="btn btn-secondary"
                                data-bs-target="#videoModal"
                                data-bs-toggle="modal"
                                onClick={() => setIsOpen(true)}
                              >
                                Watch Trailer
                              </button>
                              <button className="btn btn-primary">
                                Watch Full Movie
                              </button>
                            </div>
                          </div>
                          {/* Play image right side*/}
                          <div className="col col-lg-3 col-12 h-100 shadow-lg">
                            <div
                              className="position-relative h-100 w-100"
                              style={{ minHeight: '50vh' }}
                            >
                              <Image
                                src={
                                  imgBaseUrl + '/original' + movie.poster_path
                                }
                                fill
                                alt={movie.name || movie.title}
                                quality={60}
                                className="rounded-4 object-cover object-center"
                              />
                            </div>
                          </div>
                          {/* overview / story */}
                          <div className=" row row-cols-12 gap-5 justify-content-center p-lg-4 p-2 pb-4 rounded-3 bg-dark bg-opacity-75">
                            <div className="col col-lg-7 col-12 ">
                              <h1 className="fs-5">Story</h1>
                              <p className="text-muted">{movie.overview}</p>
                              <div className="mt-4 d-flex gap-2 align-items-center flex-wrap">
                                <button className="btn btn-outline-secondary text-info align-items-center d-flex gap-2 fs-6">
                                  <BsShareFill /> Share
                                </button>
                                <button className="btn btn-outline-secondary text-warning align-items-center d-flex gap-2 fs-6 ">
                                  <BsStarFill /> Rate This
                                </button>
                                {movie.homepage && (
                                  <Link
                                    href={movie.homepage}
                                    target="_blank"
                                    referrerPolicy="no-referrer"
                                    className="btn btn-outline-secondary text-info align-items-center d-flex gap-2 fs-6 "
                                  >
                                    <BsBook /> Visit Website
                                  </Link>
                                )}
                              </div>
                            </div>
                            <div className="col col-lg-4 col-12 ">
                              <div>
                                <div>
                                  <h1 className="fs-5 fw-normal">Directors</h1>
                                  <p className="text-muted">
                                    {casts.crew
                                      .filter(
                                        (item) =>
                                          item.known_for_department.toLowerCase() ===
                                          'directing'
                                      )
                                      .map((cr) => cr.name + ', ')}
                                  </p>
                                </div>
                                <div>
                                  <h1 className="fs-5 fw-normal">Writers</h1>
                                  <p className="text-muted">
                                    {casts.crew
                                      .filter(
                                        (item) =>
                                          item.known_for_department.toLowerCase() ===
                                          'writing'
                                      )
                                      .map((cr) => cr.name + ', ')}
                                  </p>
                                </div>
                                <div>
                                  <h1 className="fs-5 fw-normal">Tags</h1>
                                  <p className="text-muted">{movie.tagline}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Casts */}
                          <div className=" rounded-3 bg-dark bg-opacity-75 w-100 mb-4 py-2">
                            <h1 className="fs-5">Casts</h1>
                            <div
                              className="d-flex w-100 scroll-sm overflow-x-auto mb-2"
                              style={{
                                maxWidth: '90vw',
                              }}
                            >
                              <div
                                className="d-flex gap-2 pb-2"
                                style={{
                                  height: '170px',
                                  maxWidth: '70vw',
                                }}
                              >
                                {casts.cast?.map((cast: any) => {
                                  return (
                                    cast.profile_path && (
                                      <div
                                        key={cast.id}
                                        className="position-relative w-100 h-100 rounded overflow-hidden"
                                        style={{
                                          height: '160px',
                                          width: '120px',
                                          minWidth: '120px',
                                        }}
                                      >
                                        <Image
                                          src={
                                            imgBaseUrl +
                                            '/w200' +
                                            cast.profile_path
                                          }
                                          fill
                                          alt={cast.name}
                                          quality={80}
                                          placeholder="blur"
                                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
                                          className="rounded object-cover object-center w-100"
                                        />
                                        <div className="position-sticky bg-gradient-to-tr h-100 w-100">
                                          <Link
                                            href={
                                              CHARACTER_ROUTE + '/' + cast.id
                                            }
                                            className="text-light"
                                          >
                                            <div className="hover-hidden hover-visible h-100 w-100 d-flex flex-column justify-content-end p-1">
                                              <h3 className="fs-10 fw-semibold m-0">
                                                {cast.name}
                                              </h3>
                                              <p className="fs-10 my-1">
                                                Character-in: {cast.character}
                                              </p>
                                            </div>
                                          </Link>
                                        </div>
                                      </div>
                                    )
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          {/* more like this / recommendations */}
                          <div className="rounded bg-dar bg-opacity-50 bg-gradient-to-trl blur-5 w-100 mb-4 py-1">
                            <h1 className="fs-4">You may like</h1>
                            <div
                              className="d-flex w-100 scroll-sm overflow-x-auto mb-"
                              style={{
                                maxWidth: '90vw',
                              }}
                            >
                              <div
                                className="d-flex gap-2 pb- pt-4"
                                style={{
                                  maxWidth: '70vw',
                                }}
                              >
                                {recommendations.map((recommendation: any) => {
                                  return (
                                    <MovieCard
                                      key={recommendation.id}
                                      title={recommendation.title}
                                      imageUrl={
                                        imgBaseUrl +
                                        '/w500' +
                                        recommendation.poster_path
                                      }
                                      type={recommendation.media_type}
                                      vote={recommendation.vote_average}
                                      id={recommendation.id}
                                    />
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <CustomSpinnier size={20} />
              </>
            )}
          </main>
        </div>
      </div>
      {/* Trailer modal */}
      <div
        className="modal fade "
        tabIndex={-1}
        aria-hidden="true"
        id="videoModal"
        onClick={() => setIsOpen(false)}
      >
        <div className="modal-dialog modal-dialog-centered min-vw-100 ">
          {isOpen && (
            <div className="modal-content border w-md-95 w-75 mx-auto">
              <div className="modal-body ratio ratio-16x9 border rounded overflow-hidden ">
                <iframe
                  src={`https://www.youtube.com/embed/${
                    movie.videos?.results.filter(
                      (video) => video.type.toLowerCase() === 'trailer'
                    )[0].key
                  }?autoplay=1`}
                  allowFullScreen
                  className="h-100 w-100 ratio ratio-16x9"
                  loading="eager"
                  id="videoFrame"
                  title={movie.title}
                  placeholder={`${imgBaseUrl}/w500/x6FsYvt33846IQnDSFxla9j0RX8.jpg`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Fetch data from external API
  const movieRes = await fetch(
    `${baseUrl}/movie/${params?.id}?api_key=${apiKey}&append_to_response=videos,images`
  );
  const castRes = await fetch(
    `${baseUrl}/movie/${params?.id}/credits?api_key=${apiKey}`
  );
  const recommended = await fetch(
    `${baseUrl}/movie/${params?.id}/recommendations?api_key=${apiKey}`
  );
  const movie = await movieRes.json();
  const casts = await castRes.json();
  const recommendations = await recommended.json();
  return {
    props: { movie, casts, recommendations: recommendations.results },
  };
};
