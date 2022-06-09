import useBreakpoints from "../../hooks/useBreakpoints";
import ButtonSharp from "../ui/inputs/ButtonSharp";
import TextInput from "../ui/inputs/TextInput";
import ResponsiveRow from "../ui/ResponsiveRow";
import styles from "./Footer.module.css";
const Footer = () => {
  const { isXs, isSm, isMd, isLg, active, isMobile } = useBreakpoints();

  return (
    <footer className={styles.footer}>
      <ResponsiveRow
        className={`${styles.footerRow} ${
          isMobile ? styles.footerRowMobile : ""
        }`}
      >
        <div
          className={`${styles.footerSection} ${
            isMobile ? styles.footerSectionMobile : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.footerLogo}
            src="/images/logoWhite.png"
            alt="Lorem"
          />
        </div>
        <div
          className={`${styles.footerSection} ${
            isMobile ? styles.footerSectionMobile : ""
          }`}
        >
          <ul className={styles.footerList}>
            <li>
              <b>Product</b>
            </li>
            <li>Diam orci</li>
            <li>Mi feugiat</li>
            <li>Netus fermentum</li>
            <li>Suspendisse viverra</li>
            <li>Id dolor</li>
            <li>Erat mattis</li>
          </ul>
        </div>

        <div
          className={`${styles.footerSection} ${
            isMobile ? styles.footerSectionMobile : ""
          }`}
        >
          <ul className={styles.footerList}>
            <li>
              <b>Information</b>
            </li>
            <li>Nibh</li>
            <li>Egestas</li>
            <li>Dictum</li>
          </ul>
        </div>

        <div
          className={`${styles.footerSection} ${
            isMobile ? styles.footerSectionMobile : ""
          }`}
        >
          <ul className={styles.footerList}>
            <li>
              <b>Company</b>
            </li>
            <li>Id maecenas</li>
            <li>Magna ultricies</li>
            <li>Quis risus</li>
          </ul>
        </div>
        
        

        {/* <div className={styles.footerSection}>
          <ul className={styles.footerList}>
            <li>
              <b>Subscribe</b>
            </li>
          </ul>
          <TextInput placeholder="Email Address" />
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ButtonSharp>Subscribe</ButtonSharp>
        </div> */}
      </ResponsiveRow>
    </footer>
  );
};

export default Footer;
