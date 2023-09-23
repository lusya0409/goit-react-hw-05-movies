import {
  useParams,
  useLocation,
  Link,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import { fetchMovieById } from 'components/api';
import { BackLink } from 'components/BackLink/BackLink';
import { useState, useEffect, Suspense } from 'react';
import { MovieCard } from 'components/MovieCard/MovieCard';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) return;
    async function getMovie() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovie = await fetchMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        if (error.response.status === 404) {
          navigate('/', { replace: true });
        }

        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [movieId, navigate]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {movie && <MovieCard movie={movie} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
