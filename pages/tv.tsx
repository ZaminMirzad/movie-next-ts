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
import { apiKey, baseUrl } from '@/utils/constants';
import { ITv } from '@/utils/types';

interface IProps {
  trendings: ITv[];
  populars: ITv[];
  topRated: ITv[];
}

export default function Home({ trendings, populars, topRated }: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>Moflix - Tv Shows</title>
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
            {/* On Air TVs */}
            <HorizontalContainer
              movieTvList={topRated}
              title="Loved by Majority 🍿🥤🍾"
              type="tv"
            />
            {/* Popular TVs */}
            <HorizontalContainer
              movieTvList={populars}
              title="Most Popular Shows ✨✨✨"
              type="tv"
            />
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const trendingsRes = await fetch(
    `${baseUrl}/trending/tv/week?api_key=${apiKey}`
  );
  const popularsRes = await fetch(`${baseUrl}/tv/popular?api_key=${apiKey}`);
  const topRatedRes = await fetch(`${baseUrl}/tv/top_rated?api_key=${apiKey}`);
  const trendings = await trendingsRes.json();
  const populars = await popularsRes.json();
  const topRated = await topRatedRes.json();

  return {
    props: {
      trendings: trendings.results,
      populars: populars.results,
      topRated: topRated.results,
    }, // will be passed to the page component as props
  };
};
