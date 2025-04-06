import styled, { css } from 'styled-components';
import { CustomButtonProps } from './CustomButton.types';

export const CommanButton = styled.button<CustomButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  width: 100%;
  ${({ variant }) => {
    const variantColors: Record<NonNullable<CustomButtonProps['variant']>, string> = {
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
