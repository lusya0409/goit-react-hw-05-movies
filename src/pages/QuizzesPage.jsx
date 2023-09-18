import { QuizList } from '../components/QuizList/QuizList';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { useState, useEffect, useMemo } from 'react';
// import { nanoid } from 'nanoid';
import { fetchQuizzes, deleteQuizById } from '../components/api';
import toast from 'react-hot-toast';
// import { useSearchParams } from 'react-router-dom';
import { useQueryParams } from 'hooks/useQueryParams';
import { useLocation } from 'react-router-dom';

export default function QuizzesPage() {
  const [quizItems, setQuizItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { topic, level } = useQueryParams();

  const location = useLocation();
  console.log(location);
  //HTTP запрос за всеми квизами
  useEffect(() => {
    async function getQuizzes() {
      try {
        setLoading(true);
        setError(false);

        const quizzes = await fetchQuizzes();
        setQuizItems(quizzes);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getQuizzes();
  }, []);
  const visibleItems = useMemo(() => {
    return quizItems.filter(quiz => {
      const hasTopic = quiz.topic.toLowerCase().includes(topic.toLowerCase());
      if (level === 'all') {
        return hasTopic;
      }

      return hasTopic && quiz.level === level;
    });
  }, [level, quizItems, topic]);

  const deleteQuiz = async quizId => {
    try {
      setLoading(true);
      setError(false);

      const deleteQuiz = await deleteQuizById(quizId);
      setQuizItems(prevItems =>
        prevItems.filter(quiz => quiz.id !== deleteQuiz.id)
      );
      toast.success('Все очень хорошо!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar />
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
      {visibleItems.length > 0 && (
        <QuizList items={visibleItems} onDelete={deleteQuiz} />
      )}
    </div>
  );
}
