import { QuizForm } from '../components/QuizForm/QuizForm';
import { createQuiz } from '../components/api';
import { useState } from 'react';

export default function CreateQuizPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addQuiz = async newQuiz => {
    try {
      setLoading(true);
      setError(false);
      await createQuiz({ ...newQuiz, id: Date.now() });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }

    console.log(newQuiz);
  };

  return (
    <div>
      <QuizForm onAdd={addQuiz} />
      {loading && <div>LOADING...</div>}
      {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
    </div>
  );
}
