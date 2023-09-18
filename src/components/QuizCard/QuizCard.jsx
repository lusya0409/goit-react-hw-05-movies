import { Link, useLocation } from 'react-router-dom';
import { MetaWrapper, Topic, Wrapper, Text, Button } from './QuizCard.styled';
import { BsFillFileXFill } from 'react-icons/bs';

export const QuizCard = ({
  quiz: { id, topic, level, time, questions },
  onDelete,
}) => {
  const location = useLocation();
  console.log(location);
  return (
    <Wrapper level={level}>
      <Link to={`/quizzes/${id}`} state={{ from: location }}>
        <Topic>{topic}</Topic>
      </Link>

      <MetaWrapper>
        <Text color="red" a={10}>
          <b>Level:</b> {level}
        </Text>
        <Text color="green">
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
      <Button onClick={() => onDelete(id)}>
        <BsFillFileXFill size={40} />
      </Button>
    </Wrapper>
  );
};
