import { imgBaseUrl } from '@/utils/constants';
import { MOVIE_ROUTE, TV_ROUTE } from '@/utils/routes';
import { IMovie, ITv } from '@/utils/types';
import MovieCard from './MovieCard';

interface IProps {
  movieTvList: IMovie[] | ITv[];
  title: string;
  type: 'tv' | 'movie';
}

export default function HorizontalContainer({
  movieTvList,
  title,
  type,
}: IProps) {
  return (
    <>
      <div className="w-100 mb-4 py-2 px-3">
        <h1 className="fs-4 text-primary">{title}</h1>
        <div className="d-flex w-100 scroll-sm overflow-x-auto ">
          <div className="d-flex gap-2 pt-4">
            {movieTvList.map((movieTv: IMovie | ITv) => {
              return (
                <MovieCard
                  key={movieTv.id}
                  title={movieTv.title || movieTv.name}
                  imageUrl={imgBaseUrl + '/w500' + movieTv.poster_path}
                  type={type === 'tv' ? TV_ROUTE : MOVIE_ROUTE}
                  vote={movieTv.vote_average}
                  id={movieTv.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
