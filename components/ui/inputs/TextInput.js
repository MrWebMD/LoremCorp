import styles from "./TextInput.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextInput = (props) => {
  return (
    <div
      className={`${styles.container} ${
        props.className ? props.className : ""
      }`}
    >
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={props.fontAwesomeIcon} />
      </div>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          placeholder={props.placeholder || "email@gmail.com"}
        ></input>
      </div>
    </div>
  );
};

export default TextInput;
