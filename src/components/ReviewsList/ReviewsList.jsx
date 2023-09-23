import { Item, List } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(review => (
        <Item key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </Item>
      ))}
    </List>
  );
};
