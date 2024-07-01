import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={css.wrapper}>
      <span>Find contacts by name</span>
      <input
        className={css.filterInput}
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder=""
      />
    </div>
  );
}
