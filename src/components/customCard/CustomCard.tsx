import { FC } from 'react';
import { FormCard } from './CustomCard.styles';
import { CustomCardProps } from './CustomCard.type';

const CustomCard: FC<CustomCardProps> = (props) => {
  const { children } = props;
  return <FormCard>{children}</FormCard>;
};

export default CustomCard;
