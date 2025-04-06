export type buttonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
export type buttonSize = 'small' | 'medium' | 'large';

export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant;
  size?: buttonSize;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
