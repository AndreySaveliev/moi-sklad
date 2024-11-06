import { useUsers } from "../hooks/useUsers";
import User from "./User";
import { useTodos } from "../hooks/useTodos";

function Table() {
  const { users, isUserError } = useUsers();
  const { todos, isTodosError } = useTodos();

  return (
    <div className="rounded-lg border-[1px] border-borderColor">
      <div className="flex flex-row bg-tableHeader font-inter text-xs font-semibold tracking-widest text-white sm:text-[8px]">
        <p className="max-w-[47px] self-center px-5 py-2 opacity-30 sm:max-w-[37px]">
          #
        </p>
        <p className="grow py-3 pl-3 opacity-30">USERNAME</p>
        <p className="min-w-[168px] self-center py-2 opacity-30 sm:min-w-[86px] sm:text-center">
          TO-DO COUNT
        </p>
      </div>
      {isUserError || isTodosError ? (
        <p className="my-2 text-center font-interDisp text-5xl font-bold text-white sm:text-2xl">
          Не удалось загрузить информаци о пользователях и выполненных заданиях
        </p>
      ) : (
        users.map((user) => {
          return <User key={user.id} user={user} todos={todos} />;
        })
      )}
    </div>
  );
}
export default Table;
