import { useQueryParams } from 'hooks/useQueryParams';

export const TopicFilter = () => {
  const { topic, changeTopic } = useQueryParams();
  return (
    <input
      type="text"
      placeholder="Topic filter"
      value={topic}
      onChange={evt => changeTopic(evt.target.value)}
    />
  );
};
