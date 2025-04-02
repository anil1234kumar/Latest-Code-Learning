import { Typography } from 'antd';
import { useTitle } from '@/hooks/useTitle';

const { Title, Paragraph } = Typography;

export function About() {
  useTitle('About');

  return (
    <Typography>
      <Title level={2}>About</Title>
      <Paragraph>Learn more about our project and team.</Paragraph>
    </Typography>
  );
}
