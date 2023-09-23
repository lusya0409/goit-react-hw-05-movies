import { HiArrowLeft } from 'react-icons/hi';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ children }) => {
  return (
    <StyledLink to={-1}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};
