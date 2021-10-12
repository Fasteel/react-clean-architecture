type Props = {
  text: string;
  setText: (title: string) => void;
};

const Input = ({ text, setText }: Props) => {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.currentTarget.value)}
    />
  );
};

export default Input;
