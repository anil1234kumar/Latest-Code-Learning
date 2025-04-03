import { Typography } from 'antd';
import { useTitle } from '@/hooks/useTitle';

const { Title, Paragraph } = Typography;

export function Home() {
  useTitle('Home');

  return (
    <>
      <Typography>
        <Title level={2}>Welcome Home</Title>
        <Paragraph>
          This is a modern React application built with TypeScript, Vite, and React Router, now
          featuring Ant Design components.
        </Paragraph>
      </Typography>
    </>
  );
}
