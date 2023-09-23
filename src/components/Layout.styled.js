import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  gap: ${({ theme }) => theme.spasing(4)};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spasing(5)};
`;
export const Header = styled.header`
  display: flex;
  padding: ${({ theme }) => theme.spasing(2)};

  margin-bottom: ${({ theme }) => theme.spasing(4)};
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    > ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${({ theme }) => theme.spasing(3)};
    }
  }
`;

export const StyledLink = styled(NavLink)`
  padding: ${({ theme }) => theme.spasing(2)} ${({ theme }) => theme.spasing(4)};
  border-radius: ${({ theme }) => theme.radii.sm};

  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  font-weight: 500;

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
