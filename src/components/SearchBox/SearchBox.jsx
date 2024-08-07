import s from "./SearchBox.module.css";
const SearchBox = ({ func, value }) => {
  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input className={s.input} onChange={func} type="text" value={value} />
    </label>
  );
};

export default SearchBox;
