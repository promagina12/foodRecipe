import { useSelector } from "react-redux";
import { usersSelector } from "src/store/slices/users";

const useUsers = () => {
  const users = useSelector(usersSelector.users);
  const currUser = useSelector(usersSelector.currUser);
  const isLoadingUsers = useSelector(usersSelector.isLoadingUsers);

  return {
    users,
    currUser,
    isLoadingUsers,
  };
};

export default useUsers;
