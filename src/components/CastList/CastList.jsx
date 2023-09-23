import { List, Item } from './CastList.styled';

export const CastList = ({ cast }) => {
  const defaultImg = '/goit-react-hw-05-movies/profile.jpg';

  return (
    <List>
      {cast.map(actor => (
        <Item key={actor.id}>
          <img
            loading="lazy"
            src={
              actor.profile_path
                ? 'https://image.tmdb.org/t/p/w220_and_h330_face/' +
                  actor.profile_path
                : defaultImg
            }
            alt={actor.name}
            width={'150px'}
          />
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </Item>
      ))}
    </List>
  );
};
