import { fetchQuizById } from 'components/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function QuizDetalisPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const params = useParams();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        setLoading(true);
        setError(false);

        const fetchedQuiz = await fetchQuizById(params.quizId);
        setQuiz(fetchedQuiz);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchQuiz();
  }, [params.quizId]);

  return (
    <div>
      <Link to={location?.state?.from ?? '/quizzes'}>Back to quizzes</Link>

      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      {quiz && <div>{quiz.topic}</div>}
    </div>
  );
}
