import Button from '@/components/button';
import './About.scss';

export const About: React.FC = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Button clicked!')}>
        Click me
      </Button>
    </div>
  );
};
