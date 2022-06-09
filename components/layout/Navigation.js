import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faBars,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import RoundButton from "../ui/inputs/ButtonRound";
import classes from "./Navigation.module.css";
import useBreakpoints from "../../hooks/useBreakpoints";

const Navigation = () => {
  const { isXs, isSm, isMd, isLg, active, isMobile } = useBreakpoints();

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (<>
    <div className={classes.navSpacer}></div>
    <nav
      className={`${classes.nav} ${isMobile ? classes.navMobile : ""} ${
        navOpen && isMobile ? classes.navMobileOpen : ""
      }`}
    >
      <div
        className={`${classes.navContainer} ${
          isMobile ? classes.navContainerMobile : ""
        }`}
      >
        <div className={classes.navSection}>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className={classes.navLogo}
            src="/images/logoWhite.png"
            alt="Logo"
          />
          {isMobile && (
            <FontAwesomeIcon
              icon={faBars}
              className={classes.navHamburger}
              onClick={toggleNav}
            />
          )}
        </div>
        <ul
          className={`${classes.navList} ${classes.navSection} ${
            isMobile ? classes.navListMobile : ""
          }`}
        >
          <li className={classes.navItem}>Home</li>
          <li className={classes.navItem}>Updates</li>
          <li className={classes.navItem}>Service</li>
          <li className={classes.navItem}>Features</li>
          <li className={classes.navItem}>About Us</li>
        </ul>

        <div className={classes.navSection}>
          <p className={classes.navLang}>
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ flex: "none", width: "1.5rem" }}
            />
            <b className={classes.navLangText}>EN</b>
          </p>
          {/* <i className="fa-solid fa-globe"></i> */}
          <RoundButton>Login</RoundButton>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navigation;
