import { useEffect, useRef, useState } from "react";
import Loyout from "./loyout/Loyout";
import { Container } from "./styleComponents.jsx/HomeStyle";
import Axios from "../utils/httpClient";
import { Link } from "react-router-dom";
import StackItem from "./StackItem";
import { lightTheme, darkTheme } from "./loyout/theme";
import ProjectItem from "./ProjectItem";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import AnimatedText from "../components/loyout/AnimatedText";

import { wrap } from "@motionone/utils";
import { SectionScroll } from "./styleComponents.jsx/loyout/SectionScrollStyle";
const GitHub = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
      fill="#666666"
    />
  </svg>
);
const Twitter = () => (
  <svg
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.875 0.875C7.59152 0.875 0.875 7.59152 0.875 15.875C0.875 24.1585 7.59152 30.875 15.875 30.875C24.1585 30.875 30.875 24.1585 30.875 15.875C30.875 7.59152 24.1585 0.875 15.875 0.875ZM23.0837 12.1819C23.0937 12.3393 23.0937 12.5033 23.0937 12.6641C23.0937 17.5792 19.3504 23.2411 12.51 23.2411C10.4007 23.2411 8.44531 22.6283 6.79799 21.5737C7.09933 21.6071 7.38728 21.6205 7.69531 21.6205C9.43638 21.6205 11.0368 21.0312 12.3125 20.0335C10.6786 20 9.3058 18.9286 8.83705 17.4554C9.4096 17.5391 9.92522 17.5391 10.5145 17.3884C9.67319 17.2175 8.91699 16.7605 8.37438 16.0953C7.83178 15.43 7.53623 14.5973 7.53795 13.7388V13.692C8.03013 13.9699 8.60938 14.1406 9.2154 14.1641C8.70595 13.8245 8.28814 13.3645 7.99903 12.8249C7.70993 12.2852 7.55845 11.6825 7.55804 11.0703C7.55804 10.3772 7.73884 9.74442 8.06362 9.19531C8.99744 10.3449 10.1627 11.2851 11.4837 11.9548C12.8047 12.6245 14.2518 13.0088 15.731 13.0826C15.2054 10.5547 17.0938 8.50893 19.3638 8.50893C20.4353 8.50893 21.3996 8.95759 22.0792 9.6808C22.9196 9.52344 23.7232 9.2087 24.4397 8.78683C24.1618 9.64732 23.5792 10.3739 22.8058 10.8326C23.5558 10.7522 24.279 10.5446 24.9487 10.2533C24.4431 10.9967 23.8103 11.6562 23.0837 12.1819Z"
      fill="#666666"
    />
  </svg>
);
const Linkedin = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z"
      fill="#666666"
    />
  </svg>
);

function Home() {
  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const [replay] = useState(true);
  const { theme } = useSelector((state) => state.main);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    getUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUser = () => {
    setMainLoading(true);
    Axios()
      .get("/api/v1/user")
      .then((res) => {
        setData(res?.data?.data);
      })
      .catch((res) => {
        console.log(res, "err");
      })
      .finally(() => {
        setMainLoading();
      });
  };

  const placeholderText = [{ type: "span", text: "Humoyun Elmurodov" }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const setMainLoading = (l = false) => {
    dispatch({ type: "SET_LOADING", payload: l });
  };
  // eslint-disable-next-line react/prop-types
  function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Loyout>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <div>
            <Container>
              <div className="home-section">
                <div className="home-section-title">
                  <motion.h1
                    animate={replay ? "visible" : "hidden"}
                    initial="hidden"
                    variants={container}
                  >
                    Hi 👋,
                    <br />
                    My name is <br />{" "}
                    {placeholderText.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                  </motion.h1>

                  <Link
                    target="_blank"
                    to={data?.social?.download}
                    className="download"
                    download
                  >
                    <div className="button" data-tooltip="Size: 20Mb">
                      <div className="button-wrapper">
                        <div className="text">Download</div>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="2em"
                            height="2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                <motion.div
                  initial={{ x: 200 }}
                  animate={{ x: 0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="home-section-img"
                >
                  <img src={data?.image} alt="" />
                </motion.div>
              </div>
            </Container>
            <SectionScroll>
              <section>
                <ParallaxText baseVelocity={-5}>Laravel PHP  MySQL  API </ParallaxText>
                <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
              </section>
            </SectionScroll>
            <Container>
              <div className="section-stack">
                <h2>My Tech Stack</h2>
                <p>Technologies I’ve been working with recently</p>
                <StackItem />
              </div>
              <motion.div className="section-project">
                <h2 style={{ textAlign: "center" }}>Projects</h2>
                <p style={{ textAlign: "center" }}>Things I’ve built so far</p>
                <ProjectItem />
              </motion.div>
              <div className="bottom-link">
                <div className="navbar-right">
                  <h2 className="logo">Humoyun</h2>
                  <ul>
                    <li>
                      <Link to={"tel:+998909934887"}>+998 90 993 48 87</Link>
                    </li>
                    <li>{data?.email}</li>
                  </ul>
                </div>
                <div className="navbar-left">
                  <a
                    className="icons"
                    target="_blank"
                    href={`${data?.social?.github}`} rel="noreferrer"
                  >
                    <GitHub />
                  </a>
                  <Link className="icons" to={data?.social?.twitter}>
                    <Twitter />
                  </Link>
                  <Link className="icons" to={data?.social?.linkedin}>
                    <Linkedin />
                  </Link>
                </div>
              </div>
              <hr />
              <div className="footer">
                <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to={"/stack"}>Tech Stack</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
            </Container>
          </div>
        </Loyout>
      </ThemeProvider>
    </div>
  );
}

export default Home;
