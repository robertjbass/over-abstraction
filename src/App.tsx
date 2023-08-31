import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import Names from "@/pages/Names";
import Login from "@/pages/Login";

const Router = () => {
  const { user } = useContext(GlobalContext);
  if (!user) return <Login />;

  return <Names />;
};

const App = () => {
  return (
    <section
      style={{ height: "100dvh" }}
      className="flex flex-col bg-gray-800 py-12 lg:px-72 md:px-16 px-8 transition-all"
    >
      <Router />
    </section>
  );
};

export default App;
