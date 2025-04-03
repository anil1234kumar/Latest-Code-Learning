import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const CommanButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  ${({ theme, variant }) => css`
    background: ${variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
    color: ${theme.colors.text};
  `}

  &:hover {
    opacity: 0.8;
  }
`;
