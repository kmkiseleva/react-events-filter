import styles from "./ProjectList.module.css";
import PropTypes from "prop-types";

const ProjectList = (props) => {
  const { container, imageContainer, imageItem } = styles;
  return (
    <div className={container}>
      {props.images.map((image) => (
        <div className={imageContainer}>
          <img className={imageItem} src={image.img} alt={Math.random()} />
        </div>
      ))}
    </div>
  );
};

ProjectList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ProjectList;
