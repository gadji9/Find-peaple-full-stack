import { useAppSelector } from "@app/store";
import { NotFoundUserCard, UserCard } from "@entities/user/ui";

export const MatchedUser = () => {
  const users = useAppSelector((state) => state.matchedUser.users);

  return (
    <div className="matched-users">
      {users?.length ? (
        users?.map((user, index) => (
          <UserCard email={user.email} number={user.number} key={index} />
        ))
      ) : (
        <NotFoundUserCard />
      )}
    </div>
  );
};
