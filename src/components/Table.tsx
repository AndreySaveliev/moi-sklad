import { useUsers } from "../hooks/useUsers";
import User from "./User";

function Table() {
  const users = useUsers();
  // console.log(users);
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
      {users &&
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })}
    </div>
  );
}

export default Table;
