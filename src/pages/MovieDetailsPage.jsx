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
import { Loader } from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId || (movie && movieId && Number(movieId) === movie.id)) return;
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
  }, [movieId, movie, navigate]);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {movie && <MovieCard movie={movie} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      {loading && <Loader>LOADING...</Loader>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}

      <Suspense fallback={<Loader>Loading subpage...</Loader>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
