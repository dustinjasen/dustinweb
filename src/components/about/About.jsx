import { HelpOutline, Lightbulb, QuestionMark } from "@mui/icons-material";
import { useState, useRef } from "react";
import "./about.scss";
import "animate.css";
import me from "../../components/profilePic.png";

const About = () => {

  const [helpTip, SetHelpTip] = useState(false);
  const [insights, SetInsights] = useState(false);

  const helpToggle = () => {
    SetInsights(false);
    SetHelpTip(!helpTip)
  };

  const insightToggle = () => {
    SetHelpTip(false);
    SetInsights(!insights)
  };

  const aboutOne = useRef(null)
  const aboutTwo = useRef(null)
  const aboutThree = useRef(null)
  const aboutFour = useRef(null)

  const scrollThatWay = () => {
    aboutTwo.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollThatWayAgain = () => {
    aboutThree.current.scrollIntoView({ behavior: 'smooth' });
  }
  const scrollThatWayAndAgain = () => {
    aboutFour.current.scrollIntoView({ behavior: 'smooth' });
  }
  // const scrollBack = () => {
  //   aboutOne.current.scrollIntoView({ behavior: 'smooth' });
  // }

  const scrollForwardABit = () => {
    document.getElementById('screenTwo').scrollIntoView();
  }


  return (
    <div className="aboutContainer">
      <div className="scrollNextPage" onClick={scrollForwardABit}>next page</div>

      <div className="tipsIconContainer">
        <HelpOutline
          className="aboutIcon animate__animated animate__headShake animate__delay-1s"
          onClick={helpToggle}
        />
        <Lightbulb
          className="insightsIcon animate__animated animate__jello animate__repeat-3 animate__delay-2s"
          onClick={insightToggle}
        />
      </div>
      <div className="helpContentContainer">
        {helpTip && (
          <div className="aboutTipContainer" onClick={helpToggle}>
            <QuestionMark className="aboutIconMark" />
            <div className="aboutTipText">
              <p>
                <h3>Overview</h3>
                This website has been designed with React version 18.2.
                It has been optimised for most mobile devices and desktops, with some navigation issues on obsolete iOS devices.
              </p>
              <p>
                <h3>Navigation</h3>
                <strong>Desktop -</strong> Click the screen, icons and headings for access. A thin scrollbar at the bottom provides site navigation.<br />
                <strong>Mobile -</strong> Tap the screen to move, open or access features (such as this one), otherwise swipe left to right.<br />
                <strong>All devices -</strong> Next & prev page at the top will move to the next section. Any unseen content will be skipped too.<br />
                <strong>Note:</strong> Apple devices may require two-finger scrolling on this site.
              </p>
              <p>
                Click or touch the bulb/light icon on each page for further insights.<br />
                <h3>Have an amazing day & thanks for visiting!</h3>
              </p>
            </div>
          </div>
        )}

        {insights && (
          <>
            <img src={me} className="myBubbleHead" alt="" />
            <div className="insightsPointer"></div>
            <div className="insightsContainer" onClick={insightToggle}>
              <p className="insightsHeading">
                Dustin's Insights
              </p>
              <p className="insightsText">
                This site has been designed for mobile and desktop, with the latter
                having a little more eye candy. Design, development, testing and deployment lasted roughly 12 days.
              </p>
              <p className="insightsText">
                React was chosen after my original site suffered breaking changes following an update of the Chromium engine.
                <br />A small node package of React-Router,
                MUI, Animate.css, SASS and AXIOS have been implemented.
                This site consists of 10 JSX, 10 SCSS, 4 JavaScript and 1 PHP custom files.
                <br />(excluding Index.js, App.js, Index.html/css defaults)
              </p>
              <p className="insightsText">
                Keeping the site clean and concise has been the priority. Simple has been difficult.
              </p>
              <p className="insightsText">
                The mouse wheel was originally rotated on desktop to scroll left to right,
                however, a better user experience has been achieved with scroll snapping. 
                The code exists but remains unused.<br />
                I chose a horizontal site layout to break away from traditional vertical scrolling.
                ...also so the kayaker doesn't fall off of the boat... :)
              </p>
              <p className="insightsText">
                The kayaker animation is custom and has been redesigned about...25 times.
                Movement was originally based on scroll activity. With the redesign to scroll snapping, fluid CSS animation
                was implemented which is triggered on the start of every new section.
              </p>
              <p className="insightsText">
                <strong>Fun fact</strong><br />
                The kayaker colour scheme represents 90% of my paddling gear (And 100% in racing)
              </p>
            </div>
          </>
        )}
      </div>

      <div className="aboutWrapper">

        <div className="aboutContent">
          <div className="aboutOne" ref={aboutOne} onClick={scrollThatWay}>
            <p className="aboutHeading">
              I'm Dustin.
            </p>
          </div>
          <div className="aboutTwo" ref={aboutTwo} onClick={scrollThatWayAgain}>
            <p className="aboutMe">
              I'm a customer facing developer and client manager
            </p>
          </div>
          <div className="aboutThree" ref={aboutThree} onClick={scrollThatWayAndAgain}>
            <p className="aboutMe">
              who loves design and coding
            </p>
          </div>

          <div className="aboutFour" ref={aboutFour}>
            <p className="aboutMe">
              otherwise... I'm paddling!
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default About;
