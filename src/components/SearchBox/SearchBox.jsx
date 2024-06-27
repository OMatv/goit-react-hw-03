import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={css.wrapper}>
      <span>Find contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}
