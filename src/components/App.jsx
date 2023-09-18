import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
// import { ColorPicker } from './ColorPicker/ColorPicker';
// import { nanoid } from 'nanoid';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import QuizzesPage from 'pages/QuizzesPage';
import CreateQuizPage from 'pages/CreateQuizPage';
import QuizDetalisPage from 'pages/QuizDetalisPage';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="create" element={<CreateQuizPage />}></Route>
          <Route path="quizzes" element={<QuizzesPage />}></Route>
          <Route path="quizzes/:quizId" element={<QuizDetalisPage />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster />
    </>
  );
};
// export const App = () => {

//   return (
//     <Layout>
//       <ColorPicker options={colorPickerOptions} />
//       <Dropdown />
//       <Counter />

//       <GlobalStyle />
//       <Toaster />
//     </Layout>
//   );
// };
