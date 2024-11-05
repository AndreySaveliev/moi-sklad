import { useTodos } from "../hooks/useTodos";
import userIcon from "./../assets/userIcon.svg";

type User = {
  id: number;
  name: string;
  email: string;
};

function User({ user }: { user: User }) {
  const { todos, completedTodos } = useTodos(user.id);
  return (
    <div className="flex flex-row items-center border-b-[1px] border-borderColor py-5 text-white sm:py-3">
      <p className="min-w-[47px] text-center sm:text-xs">{user.id}</p>
      <div className="flex grow items-center gap-4 pl-2 sm:gap-[10px]">
        <img
          alt="user icon"
          src={userIcon}
          className="h-10 w-10 sm:h-7 sm:w-7"
        />
        <div className="flex flex-col">
          <p className="text font-inter text-base font-medium sm:text-xs">
            {user.name}
          </p>
          <p className="opacity-40 sm:text-[10px]">{user.email}</p>
        </div>
      </div>
      <p className="min-w-[168px] sm:min-w-[86px] sm:text-center">
        {completedTodos.length}
      </p>
    </div>
  );
}

export default User;
