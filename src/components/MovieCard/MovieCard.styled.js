import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spasing(5)};
`;

export const ImgWraper = styled.div`
  flex-shrink: 0;
  max-width: 220px;
  height: 330px;
  background-image: url('https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700');
  background-position: center center;
  background-size: cover;
`;
export const MovieInfoWrapper = styled.div`
  max-width: 50%;
`;
