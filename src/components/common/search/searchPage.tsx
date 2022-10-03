import { SearchInput } from './searchStyle';

//Search Bar Functional component

const SearchBar: React.FC = (): JSX.Element => {
  return (
    <>
      <SearchInput type="text" placeholder="Search" />
    </>
  );
};

export default SearchBar;
