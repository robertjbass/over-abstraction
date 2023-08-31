import { useState, useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import LoginInput from "@/components/custom/LoginInput";
import { authorizeUser } from "@/services/login";

const Login = () => {
  const { setUser } = useContext(GlobalContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await authorizeUser(username, password);
    console.log(user);
    if (user) setUser(user);
  };

  return (
    <>
      <h1 className="text-3xl text-center mb-4">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col mb-4">
          <label htmlFor="username">Username</label>
          <LoginInput
            input={username}
            setInput={setUsername}
            icon="user"
            valueType="text"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password">Password</label>
          <LoginInput
            input={password}
            setInput={setPassword}
            icon="key"
            valueType="password"
          />
        </div>
        <button
          className="py-2 px-4 bg-gray-700 rounded-md text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
