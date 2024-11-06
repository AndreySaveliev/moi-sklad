import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isTodosError, setTodosError] = useState(false);
  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      if (response.status === 200) {
        const data = await response.json();

        setTodos(data);
      }
    } catch (err) {
      setTodosError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { todos, isTodosError };
};
