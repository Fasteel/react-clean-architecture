import { useEffect, useState } from "react";
import { useApi } from "../../infrastructure/service/api";
import { CacheKeys, useQuery } from "../../infrastructure/service/query";

const initialTodos: Todos = [];
const initialTitle = "";

const useTodos = () => {
  const { getTodos } = useApi();
  const { data: todosFromQuery } = useQuery(CacheKeys.Todos, getTodos);

  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    setTitle(initialTitle);
  }, [todos]);

  useEffect(() => {
    if (todosFromQuery) {
      setTodos(todosFromQuery);
    }
  }, [todosFromQuery]);

  const addTodo = () =>
    setTodos([...todos, { id: todos.length, title, completed: false }]);

  const markAsCompleted = (id: Todo["id"]) =>
    setTodos(
      todos.map((oneTodo) => ({
        ...oneTodo,
        completed: oneTodo.id === id || oneTodo.completed,
      }))
    );

  const todosNotCompleted = todos.filter(({ completed }) => !completed);

  return {
    title,
    todosNotCompleted,
    setTitle,
    addTodo,
    markAsCompleted,
  };
};

export default useTodos;
