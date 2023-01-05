import React from "react";
import styles from "./mouse.module.css";
function MouseScroll() {
  return (
    <>
      <span className={styles.scrollBtn}>
        <a href="#">
          <span className={styles.mouse}>
            <span></span>
          </span>
        </a>
        <p className={styles.p}>scroll me</p>
      </span>
    </>
  );
}
export default MouseScroll;
