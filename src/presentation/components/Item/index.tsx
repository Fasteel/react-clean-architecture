type Props = {
  text: string;
};

const Item = ({ text }: Props) => {
  return <li>{text}</li>;
};

export default Item;
