import  { useEffect, useState } from "react";
import Loyout from "./loyout/Loyout";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./loyout/theme";
import { AboutStyle } from "./styleComponents.jsx/AboutStyle";
import Axios from "../utils/httpClient";

const About = () => {
  const [about, setAbout] = useState([]);
  const [aboutEx, setAboutEx] = useState([]);
  const { theme } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  useEffect(() => {
    getAbout();
    getAboutEx();
  }, []);

  const getAbout = () => {
    setMainLoading(true);
    Axios()
      .get("/api/v1/education")
      .then((res) => {
        setAbout(res?.data?.data);
      })
      .finally(() => {
        setMainLoading(false);
      });
  };
  const setMainLoading = (l = false) => {
    dispatch({ type: "SET_LOADING", payload: l });
  };

  const getAboutEx = () => {
    setMainLoading(true);
    Axios()
      .get("/api/v1/experience")
      .then((res) => {
        setAboutEx(res?.data?.data);
      })
      .finally(() => {
        setMainLoading(false);
      });
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Loyout>
       
        <AboutStyle>
          <div className="about-items">
            <h2>About Me</h2>
            <div className="about-p">
              The Generator App is an online tool that helps you to export
              ready-made templates ready to work as your future website. It
              helps you to combine slides, panels and other components and
              export it as a set of static files: HTML/CSS/JS.
            </div>
            <h2>Work Experience</h2>
            {aboutEx.map((item) => (
              <>
                <div className="work-experience">
                  <div className="work-experience__items">
                    <div className="job">
                      <div className="job-space">{item?.job}</div>
                      <div className="company-right">
                        <div className="company-right-LLC company-item">
                          <img src="/img/mdi_office-building.svg" alt="" />
                          <span>{item?.office}</span>
                        </div>
                        <div className="company-right-location company-item">
                          <img src="/img/carbon_location.svg" alt="" />
                          <span>{item?.office_address}</span>
                        </div>
                      </div>
                     
                    </div>
                    <div className="company">
                    <div className="job-time">{item?.job_type}</div>
                      <div className="company-left company-item">
                        <img src="/img/gg_calendar-dates.svg" alt="" />
                        <span>Sep 2021 - Dec 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
            <h2>Education</h2>
            {about.map((item) => (
              <>
                 <div className="work-experience">
                  <div className="work-experience__items">
                    <div className="job">
                      <div className="job-space">{item?.school}</div>
                      <div className="company-right">
                        <div className="company-right-LLC company-item">
                          <img src="/img/mdi_office-building.svg" alt="" />
                          <span>{item?.study}</span>
                        </div>
                        <div className="company-right-location company-item">
                          <img src="/img/carbon_location.svg" alt="" />
                          <span>{item?.school_address}</span>
                        </div>
                      </div>
                    </div>
                    <div className="company">
                      <div className="job-time">{item?.study_type}</div>
                      <div className="company-left company-item">
                        <img src="/img/gg_calendar-dates.svg" alt="" />
                        <span>Sep 2021 - Dec 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </AboutStyle>
      </Loyout>
    </ThemeProvider>
  );
};

export default About;
