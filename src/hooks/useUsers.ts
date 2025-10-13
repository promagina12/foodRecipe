import { useSelector } from "react-redux";
import { usersSelector } from "src/store/slices/users";

const useUsers = () => {
  const users = useSelector(usersSelector.users);
  const isLoadingUsers = useSelector(usersSelector.isLoadingUsers);
  
  return {
    users,
    isLoadingUsers,
  };
};

export default useUsers;
