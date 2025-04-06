export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string; // Type of the input, e.g., text, password, email, etc.
  placeholder?: string; // Placeholder text for the input
  value?: string | number; // Value of the input
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Change event handler
  disabled?: boolean; // Disable the input
  readOnly?: boolean; // Make the input read-only
  required?: boolean; // Mark the input as required
  maxLength?: number; // Maximum length of the input value
  minLength?: number; // Minimum length of the input value
  pattern?: string; // Regular expression pattern for validation
  label?: string;
  error?: string | boolean; // Error message or boolean indicating error state
}
