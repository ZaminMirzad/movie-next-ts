import React, { useContext } from 'react';
import { GetServerSideProps } from 'next';
import { SearchBar, Sidebar } from '../../components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ThemeContext } from '../../context/themeContext';
import { apiKey, baseUrl, imgBaseUrl } from '../../utils/constants';
import Image from 'next/image';
import Head from 'next/head';
import { IPerson } from '@/utils/types';
import { BsStarFill, BsShareFill, BsBook } from 'react-icons/bs';

interface Props {
  person: IPerson;
}

export default function Person({ person }: Props) {
  const { theme } = useContext(ThemeContext);
  const path = useRouter();

  return (
    <>
      <Head>
        <title>MOFLIX - {person.name}</title>
        <meta name="description" content={person.name} />
      </Head>
      <div className={`container-fluid bg-${theme === 'dark' && 'secondary'} `}>
        <div className="row min-vh-100 flex-column flex-md-row ">
          <Sidebar />
          <main className="col px-0 flex-grow-1">
            <SearchBar />
            {person ? (
              <div className=" text-light  w-100  position-relative ">
                <div className=" position-relative p-0">
                  <Image
                    src={imgBaseUrl + '/original' + person.profile_path}
                    alt={person.name}
                    fill
                    className="img-fluid w-100 object-center object-cover position-fixe"
                    quality={100}
                  />
                  <div className="position-sticky bg-gradient-to-br">
                    <div className=" h-100 d-flex flex-column align-items-center  overflow-auto scroll-sm">
                      <div className="row row-cols-12 gap-5 h-lg-75 h-50 w-lg-75 w-100 my-auto p-lg-4 p-2 justify-content-center h-100">
                        <div className="col col-lg-8 col-12  h-100 d-flex flex-column justify-content-between">
                          <div className="">
                            <h1 className="">{person.name}</h1>
                            <p className="">
                              {person.birthday} - {person.place_of_birth}
                            </p>
                            <p className="">{person.known_for_department}</p>
                          </div>
                        </div>
                        {/* image right side*/}
                        <div className="col col-lg-3 col-12 h-100 shadow-lg">
                          <div
                            className="position-relative h-100 w-100"
                            style={{ minHeight: '50vh' }}
                          >
                            <Image
                              src={
                                imgBaseUrl + '/original' + person.profile_path
                              }
                              fill
                              alt={person.name}
                              quality={60}
                              className="rounded-4 object-cover object-center"
                            />
                          </div>
                        </div>
                        {/* overview / story */}
                        <div className=" row row-cols-12 gap-5 justify-content-center p-lg-4 p-2 pb-4 rounded-3 bg-dark bg-opacity-75">
                          <div className="col col-lg-7 col-12 ">
                            <h1 className="fs-5">Biography</h1>
                            <p className="text-muted">{person.biography}</p>
                            <div className="mt-4 d-flex gap-2 align-items-center flex-wrap">
                              <button className="btn btn-outline-secondary text-info align-items-center d-flex gap-2 fs-6">
                                <BsShareFill /> Share
                              </button>
                              <button className="btn btn-outline-secondary text-warning align-items-center d-flex gap-2 fs-6 ">
                                <BsStarFill /> Rate This
                              </button>
                              {person.homepage && (
                                <Link
                                  href={person.homepage}
                                  target="_blank"
                                  referrerPolicy="no-referrer"
                                  className="btn btn-outline-secondary text-info align-items-center d-flex gap-2 fs-6 "
                                >
                                  <BsBook /> Visit Website
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div
                  className="spinner-border text-success"
                  role="status"
                  style={{ height: '5em', width: '5em' }}
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Fetch data from external API
  const res = await fetch(`${baseUrl}/person/${params?.id}?api_key=${apiKey}`);
  const person = await res.json();
  return {
    props: { person }, // will be passed to the page component as props
  };
};
