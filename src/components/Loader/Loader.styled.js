import styled from 'styled-components';
import { InfinitySpin } from 'react-loader-spinner';

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.grayOverlay};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
`;

export const Spinner = styled(InfinitySpin)`
  color: #1780e2;
  width: 200px;
`;
// export const ModalWrap = styled.div`
//   max-width: calc(100vw - 48px);
//   max-height: calc(100vh - 24px);
//   background-color: ${({ theme }) => theme.colors.white};
//   img {
//     max-height: calc(100vh - 24px);
//   }
// `;
