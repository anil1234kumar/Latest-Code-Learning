import { FC } from 'react';
import {
  CommanInput,
  ErrorText,
  InputContainer,
  InputWrapper,
  Label,
  ToggleIcon,
} from './CustomInput.styles';
import { CustomInputProps } from './CustomInput.type';
import { Eye, EyeOff } from 'lucide-react';
import { useCustomInput } from './useCustomInput';

const CustomInput: FC<CustomInputProps> = (props) => {
  const { type, label, error, htmlFor, ...rest } = props;
  const isPasswordType = type === 'password';
  const { showPassword, togglePassword, inputType } = useCustomInput();

  return (
    <InputContainer>
      <InputWrapper>
        <CommanInput id={htmlFor} type={isPasswordType ? inputType : type} {...rest} />
        <Label htmlFor={htmlFor}>{label}</Label>
        {isPasswordType && (
          <ToggleIcon onClick={togglePassword}>
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </ToggleIcon>
        )}
      </InputWrapper>
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default CustomInput;
