import React, { Component } from "react";

import styles from "./nav_bar_row.module.css";

class NavBarRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      image: props.image,
      text: props.text,
      color: props.color
    };
  }

  componentDidMount() {
    document.getElementById(this.state.id).style.borderColor = this.state.color;
  }

  render() {
    return (
      <div id={this.state.id} className={styles.container}>
        <span
          class="material-icons"
          style={{
            color: this.state.color,
            fontSize: "1.75rem",
            userSelect: "none"
          }}
        >
          {this.state.image}
        </span>
        <span style={{ marginLeft: "1rem" }}>{this.state.text}</span>
      </div>
    );
  }
}

export default NavBarRow;
