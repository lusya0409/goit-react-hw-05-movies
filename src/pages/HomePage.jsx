import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'components/api';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setLoading(true);
        setError(false);

        const fetchedTrends = await fetchTrendingMovies('day');
        setMovies(fetchedTrends.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
    </main>
  );
}
