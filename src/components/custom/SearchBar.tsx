import BaseInput from "../base/BaseInput";

type Props = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ searchTerm, setSearchTerm }: Props) => {
  return (
    <BaseInput icon="search" value={searchTerm} setValue={setSearchTerm} />
  );
};

export default SearchBar;
