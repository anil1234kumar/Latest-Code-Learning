import { FC } from 'react';
import { CommanInput, ErrorText, InputWrapper, Label, ToggleIcon } from './CustomInput.styles';
import { CustomInputProps } from './CustomInput.type';
import { Eye, EyeOff } from 'lucide-react';
import { useCustomInput } from './useCustomInput';

const CustomInput: FC<CustomInputProps> = (props) => {
  // Destructure the props to extract the children and other props
  const { type, label, error, ...rest } = props;
  const isPasswordType = type === 'password';
  const { showPassword, togglePassword, inputType } = useCustomInput();

  return (
    <>
      <InputWrapper>
        <CommanInput type={isPasswordType ? inputType : type} {...rest} />
        <Label>{label}</Label>
        {isPasswordType && (
          <ToggleIcon onClick={togglePassword}>
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </ToggleIcon>
        )}
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default CustomInput;
