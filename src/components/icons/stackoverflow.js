import React from "react"

import styles from "./icons.module.scss"

const StackOverflowIcon = () => 
<svg xmlns="http://www.w3.org/2000/svg"
  aria-label="Stack Overflow" 
  role="img"
  viewBox="0 0 512 512"
  className={styles.icon}>
  <rect
    width="512" 
    height="512"
    rx="15%"
    className={styles.stackoverflowColor} />
  <path className={styles.backgroundColor} stroke-width="30" fill="none" d="M293 89l90 120zm-53 50l115 97zm-41 65l136 64zm-23 69l148 31zm-6 68h150zm-45-44v105h241V297"/>
</svg>

export default StackOverflowIcon