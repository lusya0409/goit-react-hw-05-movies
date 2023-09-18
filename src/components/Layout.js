import { NavLink, Outlet } from 'react-router-dom';

import styled from 'styled-components';

export const WrapperLayout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  gap: ${props => props.theme.spasing(4)};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spasing(10)};
`;

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
export const Layout = () => {
  return (
    <WrapperLayout>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/create" end>
                Create quiz
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/quizzes" end>
                Quizzes
              </StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </WrapperLayout>
  );
};
