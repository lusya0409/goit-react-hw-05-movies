import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 400px;
  padding: ${props => props.theme.spasing(4)} ${props => props.theme.spasing(4)};
  border: 1px solid black;
  margin-bottom: 100px;
  margin-top: 20px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: teal;
  color: white;
`;
