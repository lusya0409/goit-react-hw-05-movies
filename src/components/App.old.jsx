// import { StrictMode } from 'react';

// import { QuizForm } from './QuizForm/QuizForm';
// import { QuizList } from './QuizList/QuizList';
// import { SearchBar } from './SearchBar/SearchBar';
// // import initialQuizItems from '../quiz-items.json'; заменили на бекенд
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
// import { ColorPicker } from './ColorPicker/ColorPicker';
// import { Component } from 'react';
// // import { nanoid } from 'nanoid';
// import { fetchQuizzes, deleteQuizById, createQuiz } from './api';
// import toast, { Toaster } from 'react-hot-toast';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// export class App extends Component {
// state = {
//   quizItems: initialQuizItems,
//   topicFilter: '',
//   levelFilter: 'beginner',
// };
// вложенное состояние
// state = {
//   // quizItems: initialQuizItems, //заменили на бекенд стал пустой масив
//   quizItems: [],
//   loading: false,
//   error: false,
//   filters: {
//     topic: '',
//     level: 'all',
//   },
// };
// async componentDidMount() {
//   const savedFilters = localStorage.getItem('quiz-filters');
//   if (savedFilters !== null) {
//     this.setState({
//       filters: JSON.parse(savedFilters),
//     });
//   }
// try {
//   this.setState({ loading: true });
//   const quizzes = await fetchQuizzes();
//   this.setState({ quizItems: quizzes });
// } catch (error) {
//   this.setState({ error: true });
// } finally {
//   this.setState({ loading: false });
// }
// }

// async componentDidUpdate(prevProps, prevState) {
//   if (prevState.filters !== this.state.filters)
//     localStorage.setItem('quiz-filters', JSON.stringify(this.state.filters));
// }
// addQuiz = async newQuiz => {
//   try {
//     this.setState({ loading: true, error: false });
//     const addedQuiz = await createQuiz({ newQuiz });

//     this.setState(prevState => ({
//       quizItems: [...prevState.quizItems, addedQuiz],
//     }));
//   } catch (error) {
//     this.setState({ error: true });
//   } finally {
//     this.setState({ loading: false });
//   }

//   console.log(newQuiz);
// };
// deleteQuiz = async quizId => {
//   try {
//     this.setState({
//       loading: true,
//       error: false,
//     });

//     const deleteQuiz = await deleteQuizById(quizId);
//     this.setState(prevState => ({
//       quizItems: prevState.quizItems.filter(
//         quiz => quiz.id !== deleteQuiz.id
//       ),
//     }));
//     toast.success('Все очень хорошо!');
//   } catch (error) {
//     this.setState({ error: true });
//   } finally {
//     this.setState({ loading: false });
//   }
// };
// changeLevelFilter = newLevel => {
//   this.setState({
//     levelFilter: newLevel,
//   });
// };

// вложенное состояние
// changeLevelFilter = newLevel => {
//   this.setState(prevState => ({
//     filters: {
//       ...prevState.filters,
//       level: newLevel,
//     },
//   }));
// };

// changeTopicFilter = newTopic => {
//   this.setState({
//     topicFilter: newTopic,
//   });
// };

// вложенное состояние
// changeTopicFilter = newTopic => {
//   this.setState(prevState => ({
//     filters: {
//       ...prevState.filters,
//       topic: newTopic,
//     },
//   }));
// };

// getVisibleQuizItems = () => {
//   const { quizItems, filters } = this.state;

//   return quizItems.filter(quiz => {
//     const hasTopic = quiz.topic
//       .toLowerCase()
//       .includes(filters.topic.toLowerCase());
//     if (filters.level === 'all') {
//       return hasTopic;
//     }

//     return hasTopic && quiz.level === filters.level;
//   });
// };

// resetFilters = () => {
//   this.setState({
//     filters: {
//       topic: '',
//       level: 'all',
//     },
//   });
// };
// render() {
// const { filters, loading, error } = this.state;
//вычисляемое свойство
// const visibleItems = this.getVisibleQuizItems();

//   return (
//     <Layout>
//       <ColorPicker options={colorPickerOptions} />
//       <Dropdown />
//       <QuizForm onAdd={this.addQuiz} />
//       <SearchBar
//         level={filters.level}
//         topic={filters.topic}
//         onChangeLevel={this.changeLevelFilter}
//         onChangeTopic={this.changeTopicFilter}
//         onReset={this.resetFilters}
//       />
//       {loading && <div>LOADING...</div>}
//       {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
//       {visibleItems.length > 0 && (
//         <QuizList items={visibleItems} onDelete={this.deleteQuiz} />
//       )}
//       <Counter />

//       <GlobalStyle />
//       <Toaster />
//     </Layout>
//   );
// }
