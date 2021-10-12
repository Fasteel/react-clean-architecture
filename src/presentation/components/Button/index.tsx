type Props = {
  onClick: () => void;
  title: string;
};

const Button = ({ onClick, title }: Props) => {
  return <input type="submit" value={title} onClick={onClick} />;
};

export default Button;
