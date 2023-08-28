import { useEffect, useState } from "react";
import SearchBar from "./components/custom/SearchBar";
import { names as nameList } from "./lists/names";

const App = () => {
  const [names, setNames] = useState<string[]>();
  const [filteredNames, setFilteredNames] = useState<string[]>(nameList);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => setNames(nameList), []);

  useEffect(() => {
    const filtered = !searchTerm
      ? names
      : names?.filter((name) =>
          name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    filtered && setFilteredNames(filtered);
  }, [searchTerm, names]);

  return (
    <section
      style={{ height: "100dvh" }}
      className="flex flex-col bg-gray-800 py-12 lg:px-72 md:px-16 px-8 transition-all"
    >
      <h1 className="text-3xl text-center mb-4">Names</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul className="my-8">
        {filteredNames.map((name) => (
          <li key={name} className="text-lg">
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default App;
