import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/" end>
                Home
              </StyledLink>
            </li>

            <li>
              <StyledLink to="/movies" end>
                Movies
              </StyledLink>
            </li>
          </ul>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
