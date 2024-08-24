import PropTypes from "prop-types";

const SearchBox = ({ searchContacts, onSearchChange }) => {
  return (
    <>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        placeholder="Search contacts"
        value={searchContacts}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
