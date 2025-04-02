import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';
import { useTitle } from '@/hooks/useTitle';

export function NotFound() {
  const navigate = useNavigate();
  useTitle('404 Not Found');

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Back Home
        </Button>
      }
    />
  );
}