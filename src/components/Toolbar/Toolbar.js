import styles from "./Toolbar.module.css";
import PropTypes from "prop-types";

const Toolbar = (props) => {
  let classActiveButton = `${styles.filterButton} ${styles.active}`;
  return (
    <div className={styles.filterContainer}>
      {props.filters.map((filter) => (
        <button
          key={Math.random()}
          className={
            props.selected === filter ? classActiveButton : styles.filterButton
          }
          title={filter}
          selected={props.selected}
          onClick={props.onSelectFilter}
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
