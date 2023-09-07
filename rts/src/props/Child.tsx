interface ChildProps {
  text: string;
  onClick: () => void;
}

export const Child: React.FC<ChildProps> = ({ text, onClick }) => {
  return (
    <div>
      {text}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
