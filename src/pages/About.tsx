import { Button } from 'antd';
import './About.scss';

export const About: React.FC = () => {
  return (
    <div>
      <Button className="checkScss" onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </div>
  );
};
