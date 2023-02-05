import Head from 'next/head';
import { useContext } from 'react';
import { GetServerSideProps } from 'next';

// local imports
import {
  SearchBar,
  Sidebar,
  Carousel,
  HorizontalContainer,
} from '@/components';
import { ThemeContext } from '@/context/themeContext';
import { baseUrl, apiKey } from '@/utils/constants';
import { IMovie } from '@/utils/types';

interface IProps {
  trendings: IMovie[];
  populars: IMovie[];
  upcomings: IMovie[];
  nowPlayings: IMovie[];
}

export default function Home({
  trendings,
  populars,
  upcomings,
  nowPlayings,
}: IProps) {
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
        <div className="row min-vh-100 flex-column flex-md-row ">
          <Sidebar />
          <main className="col px-0 flex-grow-1 position-relative overflow-hidden">
            {/* SearchBar */}
            <SearchBar />
            {/* Carousel */}
            <div className="mx-auto px-lg-3 px-2 my-4 w-100">
              <Carousel movies={trendings} />
            </div>
            {/* Trending Movies */}
            <HorizontalContainer
              movieTvList={trendings}
              title={'Trends of the Week ⚡⚡⚡'}
              type="movie"
            />
            {/* Now Playing Movies */}
            <HorizontalContainer
              movieTvList={nowPlayings}
              title={'In Theatres Now 🥤🍿'}
              type="movie"
            />
            {/* Upcoming Movies */}
            <HorizontalContainer
              movieTvList={upcomings}
              title={'Coming Soon... ⏳⏳⏳'}
              type="movie"
            />
            {/* Popular Movies */}
            <HorizontalContainer
              movieTvList={populars}
              title={'Most Popular Movies ✨✨✨'}
              type="movie"
            />
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const trendingRes = await fetch(
    `${baseUrl}/trending/movie/week?api_key=${apiKey}`
  );
  const popularsRes = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  const upcomingRes = await fetch(
    `${baseUrl}/movie/upcoming?api_key=${apiKey}`
  );
  const nowPlayingRes = await fetch(
    `${baseUrl}/movie/now_playing?api_key=${apiKey}`
  );
  const trendings = await trendingRes.json();
  const populars = await popularsRes.json();
  const upcomings = await upcomingRes.json();
  const nowPlayings = await nowPlayingRes.json();

  return {
    props: {
      trendings: trendings.results,
      populars: populars.results,
      upcomings: upcomings.results,
      nowPlayings: nowPlayings.results,
    }, // will be passed to the page component as props
  };
};
