import styled from 'styled-components';

export const CommanWrapperOnBoarding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  .ant-row {
    width: 100%;
    height: inherit;
  }
`;

export const FormOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundMain};
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    max-width: 600px;
    width: 100%;
    display: inline-block;
    height: 600px;
    object-fit: contain;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
