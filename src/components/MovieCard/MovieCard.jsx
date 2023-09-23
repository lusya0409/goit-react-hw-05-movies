import { ImgWraper, MovieWrapper, MovieInfoWrapper } from './MovieCard.styled';

export const MovieCard = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <MovieWrapper>
      <ImgWraper>
        {poster_path && (
          <img
            loading="lazy"
            src={'https://image.tmdb.org/t/p/w220_and_h330_face/' + poster_path}
            alt={title}
            width={220}
          />
        )}
      </ImgWraper>
      <MovieInfoWrapper>
        <h2>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => `${name} `)}</p>
      </MovieInfoWrapper>
    </MovieWrapper>
  );
};
