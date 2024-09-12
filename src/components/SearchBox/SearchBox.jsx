import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

const SearchBox = ({ searchContacts, onSearchChange }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="search" className={css.searchLabel}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search contacts"
        value={searchContacts}
        onChange={(e) => onSearchChange(e.target.value)}
        className={css.searchInput}
      />
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  searchContacts: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
};
