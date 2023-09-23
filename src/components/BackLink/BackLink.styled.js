import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spasing(1)};
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;
