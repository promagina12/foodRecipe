import instance from "src/utils/config";

const UsersService = {
  listUsers(params?: any) {
    return instance.get("/users", {
      params,
    });
  },
  user(id?: string) {
    return instance.get(`/users/${id}`);
  },
};

export default UsersService;
