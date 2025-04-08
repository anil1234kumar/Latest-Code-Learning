export interface WrapperOnBoardingProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode; // Children elements to be rendered inside the wrapper
  className?: string; // Optional class name for custom styling
  style?: React.CSSProperties; // Optional inline styles
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void; // Optional click event handler
  id?: string; // Optional ID for the wrapper
  title?: string; // Optional title for the wrapper
  img?: string;
}
