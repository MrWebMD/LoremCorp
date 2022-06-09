import useBreakpoints from "../../hooks/useBreakpoints";
import ButtonSharp from "../ui/inputs/ButtonSharp";
import styles from "./Header.module.css";

const Header = () => {
  const { isMobile } = useBreakpoints();

  return (
    <header className={`${styles.super} ${isMobile ? styles.superMobile : ""}`}>
      <div className={styles.superSection}>
        <h1 className={`heading ${styles.superHeading}`} data-aos="fade-up">
          Teams Build Better Products With Align
        </h1>

        <p className={"text-white"} data-aos="fade-up" data-aos-delay="300">
          Align is constantly improving to move forward through dashboard,
          statistics, data and verify and superior human resources.
        </p>

        <ButtonSharp  data-aos="fade-up" data-aos-delay="700">Get Started</ButtonSharp>
      </div>

      <div className={`${styles.superSection} ${isMobile ? "hidden" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
      className={`${styles.superImage} ${
        isMobile ? styles.superImageMobile : ""
      }`}
      src="/images/collaboration.png"
      alt="4 employees sitting around a table"
    /> */}
        <iframe
          src="https://my.spline.design/untitled-ead23133f250ad79e05e3ff048998845/"
          frameBorder="0"
          width="500rem"
          height="500rem"
        ></iframe>
      </div>
    </header>
  );
};

export default Header;
