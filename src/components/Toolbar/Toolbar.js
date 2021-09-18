import styles from "./Toolbar.module.css";
import PropTypes from "prop-types";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const { filterContainer, filterButton, active } = styles;
  let classActiveButton = `${filterButton} ${active}`;
  return (
    <div className={filterContainer}>
      {filters.map((filter) => (
        <button
          key={Math.random()}
          className={selected === filter ? classActiveButton : filterButton}
          title={filter}
          selected={selected}
          onClick={onSelectFilter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
