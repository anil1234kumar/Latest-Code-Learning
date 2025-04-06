import { FC } from 'react';
import { CommanButton } from './CustomButton.styles';
import { CustomButtonProps } from './CustomButton.types';

const CustomButton: FC<CustomButtonProps> = (props) => {
  // Destructure the props to extract the children and other props
  const { children, variant, ...rest } = props;

  return (
    <CommanButton variant={variant} {...rest}>
      {children}
    </CommanButton>
  );
};

export default CustomButton;
