import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isUserError, setUserError] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (response.status === 200) {
        const data = await response.json();
        const filteredUser = data.map((user: User) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        });
        setUsers(filteredUser);
      }
    } catch (err) {
      setUserError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users, isUserError };
};
