import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spasing(4)};
  margin-top: ${({ theme }) => theme.spasing(4)};
`;

export const Item = styled.li`
  width: 150px;
`;
