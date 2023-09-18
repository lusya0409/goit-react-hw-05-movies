import styled from 'styled-components';

const getBorderColor = props => {
  // console.log(props);
  switch (props.level) {
    case 'beginner':
      return props.theme.colors.green;
    case 'intermediate':
      return props.theme.colors.orange;
    case 'advanced':
      return props.theme.colors.red;

    default:
      return null;
  }
};
export const Wrapper = styled.div`
  padding: ${props => props.theme.spasing(1)};
  border: 4px solid ${getBorderColor};
  border-radius: ${props => props.theme.radii.sm};
`;

export const Topic = styled.h2`
  margin-bottom: ${props => props.theme.spasing(3)};
`;

export const MetaWrapper = styled.div`
  display: flex;
  gap: ${props => props.theme.spasing(2)};
`;
export const Text = styled.p`
  margin: 0;
  color: ${props => {
    return props.color;
  }};
`;

export const Button = styled.button`
  padding: ${props => props.theme.spasing(1)};
  margin: 0;
  border: none;
  color: ${props => props.theme.colors.green};

  :hover {
    color: ${props => props.theme.colors.red};
    background-color: blue;
  }

  svg {
    display: block;
  }
`;
