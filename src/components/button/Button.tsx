import { FC } from 'react';
import { CommanButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = (props) => {
  // Destructure the props to extract the children and other props
  const { children, variant, ...rest } = props;

  return (
    <CommanButton variant={variant} {...rest}>
      {children}
    </CommanButton>
  );
};

export default Button;
