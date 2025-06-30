type User = { id: string; name: string };
interface UserActions {
  userList: () => User[];
  userById: (id: string) => User | undefined;
  userCreate: (data: { name: string }) => User;
}
