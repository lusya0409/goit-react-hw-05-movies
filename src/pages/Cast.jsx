import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { fetchCastWithMovie } from 'components/api';
import { useState, useEffect, Suspense } from 'react';
import { CastList } from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    async function getCast() {
      try {
        setLoading(true);
        setError(false);
        const fetchedCast = await fetchCastWithMovie(movieId);

        setCast(fetchedCast.cast);
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
    getCast();
  }, [movieId, navigate]);

  return (
    <main>
      {cast.length > 0 ? (
        <CastList cast={cast} />
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
      {loading && <Loader />}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Cast;
