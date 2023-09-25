import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { fetchReviewsAboutMovie } from 'components/api';
import { useState, useEffect, Suspense } from 'react';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    async function getReviews() {
      try {
        setLoading(true);
        setError(false);
        const fetchedReviews = await fetchReviewsAboutMovie(movieId);

        setReviews(fetchedReviews.results);
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
    getReviews();
  }, [movieId, navigate]);

  return (
    <main>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
      {loading && <Loader />}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Reviews;
