import Head from 'next/head';
import { SearchBar, MovieCard, Sidebar, Carousel } from '@/components';
import { useContext } from 'react';
import { GetServerSideProps } from 'next';
import { ThemeContext } from '@/context/themeContext';
import { apiKey, baseUrl, imgBaseUrl } from '@/utils/constants';
import { IMovie, ITv } from '@/utils/types';

export interface IProps {
  weekTrending: IMovie[] | ITv[];
  dayTrending: IMovie[] | ITv[];
}

export default function Home({ weekTrending, dayTrending }: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Moflix Movies | Tv Shows</title>
        <meta
          name="description"
          content="Moflix movies shares update of movies & tv shows free to watch trailers and download"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container-fluid bg-${theme === 'dark' && 'dark'} `}>
        <div className="row min-vh-100 flex-column flex-md-row">
          <Sidebar />
          <main className="col px-0 flex-grow-1 position-relative overflow-hidden">
            {/* SearchBar */}
            <SearchBar />
            {/* Slider */}
            <div className="mx-auto px-lg-3 px-2 my-4 w-100">
              <Carousel movies={dayTrending} />
            </div>
            {/* Cards */}
            <div className="px-lg-3 px-2">
              <h1 className=" fs-3 text-capitalize text-primary">popular</h1>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-md-2 row-cols-xl-4 mx-auto p-0 my-3 px-2">
                {weekTrending?.map((m: IMovie | ITv) => {
                  return (
                    <MovieCard
                      key={m.id}
                      title={m.name || m.title}
                      imageUrl={imgBaseUrl + '/w500' + m.poster_path}
                      type={m.media_type}
                      id={m.id}
                      vote={m.vote_average}
                    />
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const weekTrendingRes = await fetch(
    `${baseUrl}/trending/all/week?api_key=${apiKey}`
  );
  const dayTrendingRes = await fetch(
    `${baseUrl}/trending/all/day?api_key=${apiKey}`
  );
  const weekTrending = await weekTrendingRes.json();
  const dayTrending = await dayTrendingRes.json();

  return {
    props: {
      weekTrending: weekTrending.results,
      dayTrending: dayTrending.results,
    }, // will be passed to the page component as props
  };
};
