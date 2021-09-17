import styles from "./ProjectList.module.css";
import PropTypes from "prop-types";

const ProjectList = (props) => {
  return (
    <div className={styles.container}>
      {props.images.map((image) => (
        <div className={styles.imageContainer}>
          <img
            className={styles.imageItem}
            src={image.img}
            alt={Math.random()}
          />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProjectList;
