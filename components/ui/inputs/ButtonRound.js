import styles from "./ButtonRound.module.css";

const ButtonRound = (props) => {
  return (
    <button
      className={`${styles.buttonRound} ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </button>
  );
};
export default ButtonRound;
