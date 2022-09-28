import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Feature from "./components/Feature.js";
import Section from "./components/Section.js";
import Highlight from "./components/Highlight.js";
import Robot from "./components/Robot.js";

import styles from "./styles.module.css";
import {
  features,
  ExampleRobotCode
} from "../constants.js";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} · ${siteConfig.tagline}`}
      description={`${siteConfig.tagline}`}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            <Robot />
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              to="https://www.thebluealliance.com/team/5590"
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
            >
              The Blue Alliance
            </Link>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/docs/")}
            >
              Team Documentation
            </Link>
            <Link
              to="https://buttondown.email/alumiboti5590"
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
            >
              Team Newsletter
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <Section isDark>
            {features.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </Section>
        )}
        <Highlight
          img={<img src="/img/team-picture.jpg" />}
          reversed
          title="Meet the Alumiboti"
          text={
            <>
              <p>
                The Alumiboti are FIRST Robotics team 5590 based out of 
                <a href="https://www.sjci.com">St. Joseph&apos;s Collegiate Institute</a> in Buffalo, New York.
              </p>
              <p>
                We are a team focused on developing individuals into the best versions of themselves through innovation, creativity, and fun!
              </p>
              <p>
                Read more about us <a href="./docs/#who-are-the-alumiboti">in our team documentation</a>.
              </p>
            </>
          }
        />
        <Highlight
          img={
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WlK7S7-Kx70"
              frameBorder="0"
              allowFullScreen
            />
          }
          isDark
          title="What is FIRST?"
          text={
            <>
              <p>
                FIRST inspires young people to be science and technology leaders and innovators by engaging
                them in exciting mentor-based programs that build science, engineering, and technology
                skills, that inspire innovation, and that foster well-rounded life capabilities including
                self-confidence, communication, and leadership.
              </p>
              <p>
                The <a href="https://www.firstinspires.org/">FIRST Robotics Competition</a> is much more than just a competition, combining gracious professionalism
                with technology to create an environment that fosters a deeper appreciation for science and technology.
                .
              </p>
              <p>
                For more information, you can read about FIRST <a href="./docs/#what-is-first">in our team documentation</a>.
              </p>
            </>
          }
        />
        <Highlight
          img={<img src="/img/lab.jpg" />}
          reversed
          title="Innovate &amp; Collaborate Through Robotics"
          text={
            <>
              <p>
                FIRST encourages students to be their best selves through yearly
                robotics competitions that feature a six to ten week build season,
                followed by regional competitions where students get to test their
                designed &amp; built robots against peers from other schools.
              </p>
              <p>
                Through the challenges presented by FIRST through the robotics
                competition, scholarship funds, team management, and public
                relations, students from any background with any interest can
                find a home on the team to discover, learn, and contribute!
              </p>
            </>
          }
        />
        <Highlight
          img={
            <CodeBlock className="js" children={ExampleRobotCode}></CodeBlock>
          }
          isDark
          title="Learn Programming Concepts"
          text={
            <>
              <p>
                Robots need software to run, and teams are responsible for designing,
                testing, and implementing their coding solutions to make the robots
                operate as expected.
              </p>
              <p>
                Alumiboti mentors work with students to understand computer science
                concepts, abstract away problems, and implement potential solutions
                before deploying them out to a real, 120 lb. robot built by them &amp;
                their peers.
              </p>
              <div>
                <h4>Development Areas Include:</h4>
                <a
                  href="https://www.java.com/en/"
                  className={styles.frameworkLogos}
                >
                  <img
                    src="./img/concepts/java.svg"
                    alt="Java Programming"
                  />
                </a>
                <a href="https://git-scm.com/" className={styles.frameworkLogos}>
                  <img src="./img/concepts/git.png" alt="Git" />
                </a>
                <a href="https://github.com/" className={styles.frameworkLogos}>
                  <img src="./img/concepts/github.svg" alt="GitHub" />
                </a>
                <a
                  href="https://github.com/wpilibsuite"
                  className={styles.frameworkLogos}
                >
                  <img src="/img/concepts/wpisuite.png" alt="WPI Suite" />
                </a>
              </div>
            </>
          }
        />
      </main>
    </Layout>
  );
}

export default Home;
