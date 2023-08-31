import { User } from "@/context/GlobalContext";

export const authorizeUser = async (
  username: string,
  password: string
): Promise<User> => {
  if (!username || !password) return null;
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const user = users[0];

  return user ? user : null;
};
