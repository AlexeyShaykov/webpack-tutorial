import Button from './components/Button';

import './index.scss';

const App = () => {
  const onClick = () => {
    console.log('caught btn click');
  }

  return (
    <div>
      <Button onClick={onClick} name="button" type="submit">Button1</Button>
      <Button onClick={onClick} size="lg" bgColor="red">Button2</Button>
      <Button onClick={onClick} classname={['custom-btn-class', 'custom-btn-class2']} size="auto" bgColor="green">Button3</Button>
    </div>
  );
};

export default App;
