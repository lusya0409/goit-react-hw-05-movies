import { QuizCard } from '../QuizCard/QuizCard';
import { List, ListItem } from './QuizList.styled';
//{[<li>1</li>, <li>2</li>, <li>3</li>]}
export const QuizList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <QuizCard quiz={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};
