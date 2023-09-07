import { Child } from './Child';

const Parent = () => {
  return (
    <div>
      <Child
        text="Hi there from React Component!"
        onClick={() => console.log('Clicked')}
      />
    </div>
  );
};

export default Parent;
