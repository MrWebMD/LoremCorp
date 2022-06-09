import Head from "next/head";
import Layout from "../components/layout/Layout";
import SignUpForm from "../components/ui/SignUpForm";
import Discover from "../components/Home/Discover";
import Features from "../components/Home/Features";
import Header from "../components/Home/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile'
    });
  }, []);

  return (
    <div>
      <Head>
        <title>LoremCorp</title>
        <meta
          name="description"
          content="Welcome to LoremCorp. No flags to see here.. or secret endpoints.."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Header/>
        <main>
          <Discover/>
          <Features />
          <section  data-aos="fade-up">
            <SignUpForm />
          </section>
        </main>
      </Layout>
    </div>
  );
}
