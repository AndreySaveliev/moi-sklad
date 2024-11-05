import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
};

export const useTodos = (userId: number) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const getTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );

      if (response.status === 200) {
        const data = await response.json();
        const userTodos = data.filter((todo: Todo) => todo.userId == userId);
        const complitedTodos = userTodos.filter((todo: Todo) => todo.completed);
        setTodos(userTodos);
        setCompletedTodos(complitedTodos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { todos, completedTodos };
};
