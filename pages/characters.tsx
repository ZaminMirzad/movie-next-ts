import { useContext } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

// local imports
import { SearchBar, MovieCard, Sidebar } from '@/components';
import { ThemeContext } from '@/context/themeContext';
import { imgBaseUrl, baseUrl, apiKey } from '@/utils/constants';
import { IPerson } from '@/utils/types';
import { CHARACTER_ROUTE } from '@/utils/routes';

export default function Home({ movies }: { movies: IPerson[] }) {
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
            {/* Cards */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-md-2 row-cols-xl-4 mx-auto p-0 my-3 px-2">
              {movies?.map((m) => {
                return (
                  <MovieCard
                    key={m.id}
                    title={m.name}
                    imageUrl={imgBaseUrl + '/w300' + m.profile_path}
                    type={CHARACTER_ROUTE}
                    id={m.id}
                  />
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch data from external API
  const res = await fetch(`${baseUrl}/person/popular?api_key=${apiKey}`);
  const movies = await res.json();

  return {
    props: { movies: movies.results }, // will be passed to the page component as props
  };
};
