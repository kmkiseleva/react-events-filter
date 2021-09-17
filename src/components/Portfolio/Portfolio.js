import imgData from "../../img/imgData";
import { Component } from "react";
import styles from "./Portfolio.module.css";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";

const filters = ["All", "Websites", "Flayers", "Business Cards"];
const imageData = imgData;

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: "All",
      filteredImages: imageData,
    };

    this.onSelectFilterHandler = this.onSelectFilterHandler.bind(this);
  }

  onSelectFilterHandler(e) {
    const selectedFilter = e.target.textContent;
    let filteredImages;

    if (selectedFilter === "All") {
      filteredImages = imageData;
    } else {
      filteredImages = imageData.filter(
        (image) => image.category === selectedFilter
      );
    }

    this.setState({ filteredImages, currentFilter: selectedFilter });
  }

  render() {
    return (
      <div className={styles.container}>
        <Toolbar
          filters={filters}
          selected={this.state.currentFilter}
          onSelectFilter={this.onSelectFilterHandler}
        />
        <ProjectList images={this.state.filteredImages} />
      </div>
    );
  }
}

export default Portfolio;
