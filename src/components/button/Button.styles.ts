import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';

export const CommanButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  ${({ variant }) => {
    const variantColors: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary: '#555ab9',
      secondary: '#6c757d',
      tertiary: '#f4a261',
      danger: '#dc3545',
      success: '#28a745',
    };

    return css`
      background-color: ${variant ? variantColors[variant] : 'transparent'};
      color: ${variant === 'secondary' || variant === 'tertiary' ? '#000' : '#fff'};
    `;
  }}

  &:hover {
    opacity: 0.8;
  }
`;
