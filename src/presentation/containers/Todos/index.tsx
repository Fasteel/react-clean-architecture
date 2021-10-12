import { useTodos } from "../../../application/hooks";
import { Button, Container, Input, Item, List } from "../../components";

const Todos = () => {
  const { title, todosNotCompleted, setTitle, addTodo, markAsCompleted } =
    useTodos();

  return (
    <Container>
      <List>
        {todosNotCompleted.map(({ id, title }) => (
          <Container key={id}>
            <Item text={title} />
            <Button onClick={() => markAsCompleted(id)} title="Delete" />
          </Container>
        ))}
      </List>
      <Input text={title} setText={setTitle} />
      <Button onClick={addTodo} title="Add" />
    </Container>
  );
};

export default Todos;
