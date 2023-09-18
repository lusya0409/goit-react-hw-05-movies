import axios from 'axios';

axios.defaults.baseURL = 'https://64f1f5c60e1e60602d247ee1.mockapi.io/';

export const fetchQuizzes = async () => {
  const resp = await axios.get('/quizzes');
  return resp.data;
};

export const fetchQuizById = async quizId => {
  const resp = await axios.get(`/quizzes/${quizId}`);
  return resp.data;
};

export const deleteQuizById = async quizId => {
  const resp = await axios.delete(`/quizzes/${quizId}`);
  return resp.data;
};

export const createQuiz = async quiz => {
  const resp = await axios.post('/quizzes', quiz);
  return resp.data;
};
