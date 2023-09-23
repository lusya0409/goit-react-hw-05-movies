import { fetchMoviesSearchQuery } from 'components/api';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (!query) return;
    async function getMovis() {
      try {
        setLoading(true);
        setError(false);

        const fetchedMovies = await fetchMoviesSearchQuery(query);
        setMovies(fetchedMovies.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovis();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ query: form.query.value });
    form.reset();
  };

  return (
    <main>
      <h2>Movies</h2>
      <Searchbar query={query} onSubmit={handleSubmit}></Searchbar>
      {movies.length > 0 && <MoviesList movies={movies} />}

      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
    </main>
  );
}
