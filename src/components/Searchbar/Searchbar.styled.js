import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.sm};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spasing(5)};
`;

export const SearchFormButton = styled.button`
  display: inline-block;
  position: absolute;
  right: 0;
  width: 48px;
  height: 100%;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  /* outline: none; */
  padding: ${({ theme }) => theme.spasing(2)};

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
