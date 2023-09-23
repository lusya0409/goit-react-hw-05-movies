import { List, Item, ImgWraper } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <ImgWraper>
              {movie.poster_path && (
                <img
                  loading="lazy"
                  src={
                    'https://image.tmdb.org/t/p/w220_and_h330_face/' +
                    movie.poster_path
                  }
                  alt={movie.title}
                  width={100}
                />
              )}
            </ImgWraper>
            {movie.title}
          </Link>
        </Item>
      ))}
    </List>
  );
};
