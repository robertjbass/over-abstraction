import { useEffect, useState } from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const NAMES = [
  "Bob",
  "Sam",
  "Elsa",
  "Phoebe",
  "Sarah",
  "Harold",
  "William",
  "John",
  "James",
  "Robert",
  "Michael",
  "Mary",
  "Patricia",
];

const App = () => {
  const [names, setNames] = useState<string[]>();
  const [filteredNames, setFilteredNames] = useState<string[]>(NAMES);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => setNames(NAMES), []);

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
      style={{ height: "100dvh", width: "100%" }}
      className="flex flex-col bg-gray-800 text-white py-12 px-[24rem]"
    >
      <h1 className="text-3xl text-center mb-4">Names</h1>
      <BeakerIcon className="h-8 w-8" />
      <input
        type="text"
        className="my-4 p-2 text-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
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
