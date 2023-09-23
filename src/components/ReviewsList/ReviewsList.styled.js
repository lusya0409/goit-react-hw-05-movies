import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spasing(4)};
`;

export const Item = styled.li`
  width: 100%;
`;
