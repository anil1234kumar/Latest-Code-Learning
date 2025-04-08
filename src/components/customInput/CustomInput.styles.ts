import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CommanInput = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border: 1px solid #ccc;
  width: 100%;
  display: inline-block;
  max-width: 100%;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ToggleIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  padding: 0 5px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
