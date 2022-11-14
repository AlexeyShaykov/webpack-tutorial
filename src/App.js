import { useRef, useEffect } from 'react';
import { Button } from './components';

import './index.scss';

const App = () => {
  const onClick = () => {
    console.log('caught btn click');
  };

  const ref = useRef();

  useEffect(() => {
    console.log(ref);
  }, []);

  return (
    <div>
      <Button ref={ref} onClick={onClick} name="button" type="submit">Button1</Button>
      <Button onClick={onClick} size="lg" bgColor="red">Button2</Button>
      <Button onClick={onClick} classname={['custom-btn-class', 'custom-btn-class2']} size="auto" bgColor="green">Button3</Button>
      <Button TagName="a" href="https://github.com">link text</Button>
    </div>
  );
};

export default App;
