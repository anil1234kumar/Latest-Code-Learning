import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
`;

export const LinkWrapper = styled.div`
  display: inline-block;
  width: fit-content;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.main};
`;
