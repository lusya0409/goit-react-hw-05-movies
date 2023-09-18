import { TopicFilter } from './TopicFilter';
import { LevelFilter } from './LevelFilter';
import { useQueryParams } from 'hooks/useQueryParams';

export const SearchBar = () => {
  const { resetFilters } = useQueryParams();

  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      {/* пока лоадинг кнопку прятать, изначально тоже прятать, пока у нас пустой
      массив */}
      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
};
