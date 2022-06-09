import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";
import IconBubble from "../components/ui/IconBubble";
import ButtonSharp from "../components/ui/inputs/ButtonSharp";
import ResponsiveRow from "../components/ui/ResponsiveRow";
import TextBlock from "../components/ui/TextBlock";
import useBreakpoints from "../hooks/useBreakpoints";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBlog, faCloud, faGlobe, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import SignUpForm from "../components/ui/SignUpForm";
export default function Home() {
  const { isXs, isSm, isMd, isLg, active, isMobile } = useBreakpoints();

  return (
    <div>
      <Head>
        <title>LoremCorp</title>
        <meta name="description" content="Welcome to LoremCorp. No flags to see here.. or secret endpoints.." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <header
          className={`${styles.super} ${isMobile ? styles.superMobile : ""}`}
        >
          <div className={styles.superSection}>
            <h1 className={`heading ${styles.superHeading}`}>
              Teams Build Better Products With Align
            </h1>

            <p className={"text-white"}>
              Align is constantly improving to move forward through dashboard,
              statistics, data and verify and superior human resources.
            </p>

            <ButtonSharp>Get Started</ButtonSharp>
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
            <iframe src='https://my.spline.design/untitled-ead23133f250ad79e05e3ff048998845/' frameBorder='0' width='500rem' height='500rem'></iframe>
          </div>
        </header>

        <main>
          <section className={"center section"}>
            <h2 className="heading h2">Etiam Nulla Lectus Amet</h2>
            <p className={"text-grey"}>
              Neque, pulvinar vestibulum non aliquam.
            </p>
            <ResponsiveRow>
              <TextBlock>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/collaboration2.png"
                  width="100%"
                  alt="employees working around table"
                />
              </TextBlock>
              <TextBlock>
                <Card>
                  <h3 className="heading h3">
                    Discover The Power Of Creative Freedom with Align
                  </h3>
                  <p className={"text-grey"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card>
              </TextBlock>
            </ResponsiveRow>
            <ResponsiveRow>
              <TextBlock>
                <Card>
                  <h3 className="heading h3">
                    Discover The Power Of Creative Freedom with Align
                  </h3>
                  <p className={"text-grey"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Card>
              </TextBlock>
              <TextBlock>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/office.png"
                  width="100%"
                  alt="employees in an office"
                />
              </TextBlock>
            </ResponsiveRow>
          </section>
          <section className={"center section"}>
            <p className={"text-grey"}>Nisi ut aliquip ex ea commodo</p>
            <h2 className="heading h2">
              Share The Features That Help Your Customers
            </h2>
            <p className={"text-grey"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <ResponsiveRow>
              <div className={"flex-center flex-col-3"}>
                <IconBubble>
                  <FontAwesomeIcon icon={faCloud} />
                </IconBubble>
                <h4 className={"heading"}>Documentation</h4>
                <p className={"text-grey"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
              <div className={"flex-center flex-col-3"}>
                <IconBubble>
                  <FontAwesomeIcon icon={faUserAlt} />
                </IconBubble>
                <h4 className={"heading"}>Customers</h4>
                <p className={"text-grey"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
              </div>
              <div className={"flex-center flex-col-3"}>
                <IconBubble>
                  <FontAwesomeIcon icon={faBlog} />
                </IconBubble>
                <h4 className={"heading"}>Blog</h4>
                <p className={"text-grey"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
            </ResponsiveRow>
          </section>
          <section>
            <SignUpForm/>
          </section>
        </main>
      </Layout>
    </div>
  );
}
