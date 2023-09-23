import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit }) => {
  return (
    <main>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormInput
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
        <SearchFormButton type="submit">
          <BsSearch size={20} />
        </SearchFormButton>
      </SearchForm>
    </main>
  );
};
