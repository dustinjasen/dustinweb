import "./skills.scss";
import { useState, useRef } from "react";
import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  HelpOutline,
  Lightbulb,
  QuestionMark
} from "@mui/icons-material";
import WebApp from "../webApp/WebApp";
import WebSite from "../webSites/WebSite";
import Management from "../manageMent/Management";
import SkillTree from "../skillTree/SkillTree";
import me from "../../components/profilePic.png";

const Skills = () => {
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

  const skillsWA = useRef(null)
  const skillsWS = useRef(null)
  const skillsMM = useRef(null)
  const skillsST = useRef(null)

  // const scrollToTop = () => {
  //   skillsWA.current.scrollIntoView({ behavior: 'smooth' });
  // }
  // const scrollDownAgain = () => {
  //   skillsWS.current.scrollIntoView({ behavior: 'smooth' });
  // }
  // const scrollNearBottom = () => {
  //   skillsMM.current.scrollIntoView({ behavior: 'smooth' });
  // }
  // const scrollRockBottom = () => {
  //   skillsST.current.scrollIntoView({ behavior: 'smooth' });
  // }

  const scrollForwardABit = () => {
    document.getElementById('screenThree').scrollIntoView();
  }
  const scrollBackABit = () => {
    document.getElementById('screenOne').scrollIntoView();
  }

  return (
    <div className="skillsContainer">
            <div className="scrollNextPage" onClick={scrollForwardABit}>next page</div>
            <div className="scrollPrevPage" onClick={scrollBackABit}>prev page | </div>
      <div className="tipsIconContainer">
        <HelpOutline
          className="aboutIcon"
          onClick={helpToggle}
        />
        <Lightbulb
          className="insightsIcon"
          onClick={insightToggle}
        />
      </div>

      <div className="helpContentContainer">
        {helpTip && (
          <div className="aboutTipContainer" onClick={helpToggle}>
            <QuestionMark className="aboutIconMark" />
            <div className="aboutTipText">
              <h3>Specialisms</h3>
              <p>
                Section has 4 clickable interactive headings.
                <br />
                Each heading contains points of expertise on touch or click.
                <br />
                Unlike the previous section, this is a vertical layout.
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
                This section has 5 nested components.
              </p>
              <p className="insightsText">
                Skill content is particularly difficult to balance.
                Relative arguments exist and comparison of standards is important to reflect upon before presenting abilities.<br />
                An attempt to quantify this can be found by clicking/touching the content in the "tech used".<br />
                Anything listed in this section can be performed to a high standard.<br />
                Ironically, my strongest skills are not technical - they are project delivery and people management.
              </p>
              <p className="insightsText">
                User interface and experience were lengthy considerations in this section, striking the right balance between content and context
                was one of the greater challenges of this web build. Readability, information impact, and user eye movement were considered.
                <br />If a heading and its content took longer than 6 seconds to read, it was altered.
                <br />The animation drops down at a timed rate of around 6 seconds to engage the average human attention span.
              </p>
              <p className="insightsText">
                The "tech used" heading content drops down in categories.
              </p>
              <p className="insightsText">
                The original design of this section had the kayaker avoiding on-screen objects,
                however, with the removal of scroll-based animation, this could no longer be a gamified feature.<br />
                The animation was simplified with a real-life occurrence whilst paddling, an over-correction of a rudderless boat causing a spin-out.
                There are 3 movements before the spin-out, straight, upward and downward - some Apple devices will not display the spin.
              </p>
              <p className="insightsText">
                <strong>Fun fact</strong><br />A future verison is in development using a
                physics module that will bounce the boat off of an object when a collision is detected </p>
            </div>
          </>
        )}
      </div>

      <div className="skillsWrapper">

        <div className="whatILoveDoingContainer">
          <div
            id="skillsOne"
            ref={skillsWA}>
            <WebApp />
          </div>
          <div
            id="skillsTwo"
            ref={skillsWS}>
            <WebSite />
          </div>
          <div
            id="skillsThree"
            ref={skillsMM}>
            <Management />
          </div>
          <div
            id="skillsFour"
            ref={skillsST}>
            <SkillTree />
          </div>
        </div>

      </div>
    </div >
  );
};

export default Skills;
