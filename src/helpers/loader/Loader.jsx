import React from "react";
import Loader from "react-loader-spinner";
import styles from "../loader/LoaderStyles.module.css";

export default class App extends React.Component {
  render() {
    return (
      <Loader
        className={styles.loader}
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    );
  }
}
