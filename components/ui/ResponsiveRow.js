import useBreakpoints from "../../hooks/useBreakpoints";
import styles from "./ResponsiveRow.module.css";

const ResponsiveRow = (props) => {
  const { isXs, isSm, isMd, isLg, active, isMobile } = useBreakpoints();
  return (
    <div
      className={`${styles.responsiveRow} ${
        isMobile ? styles.responsiveRowMobile : ""
      } ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default ResponsiveRow;
