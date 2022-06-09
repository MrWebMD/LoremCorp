import styles from "./ButtonSharp.module.css";

const ButtonSharp = (props) => {
  return (
    <button
      className={`${styles.buttonSharp} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default ButtonSharp;
