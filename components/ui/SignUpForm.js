import useBreakpoints from "../../hooks/useBreakpoints";
import TextInput from "./inputs/TextInput";
import ResponsiveRow from "./ResponsiveRow";
import styles from "./SignUpForm.module.css";
import TextBlock from "./TextBlock";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import RoundButton from "./inputs/ButtonRound";

const SignUpForm = (props) => {
  const { isXs, isSm, isMd, isLg, active, isMobile } = useBreakpoints();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Handle form submission
    // :)
  }

  return (
    <div
      className={`${styles.formCard} ${isMobile ? styles.formCardMobile : ""}`}
    >
      <ResponsiveRow className={styles.formRow}>
        <TextBlock>

          <div className={`${styles.formContainer} ${isMobile ? styles.formContainerMobile : ""}`}>

            <h2 className="heading h2">Create A Free Account Now</h2>
            <p>Fringilla Non Proin Nec In IN Lorem Amet Eget Ac. Mauris.</p>

            <form onSubmit={handleFormSubmit}>
              <div className={styles.formInputs}>
              <TextInput
                fontAwesomeIcon={faEnvelope}
                placeholder="Email Address"
              />
              <RoundButton className={styles.submitButton}>Sign Up</RoundButton>
              </div>
              
            </form>

          </div>

        </TextBlock>
        <div className={`${isMobile ? styles.formImageMobile : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/headshot.png" width="100%" alt="Person smiling" />
        </div>
      </ResponsiveRow>
    </div>
  );
};

export default SignUpForm;
