import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spasing(3)};
`;

export const Item = styled.li`
  width: 100px;
`;

export const ImgWraper = styled.div`
  width: 100px;
  height: 150px;
  background-image: url('https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700');
  background-position: center center;
  background-size: cover;
`;
