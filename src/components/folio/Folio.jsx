import "./folio.scss";
import {
  crmPhotos,
  mapPhotos,
  mhwAll,
} from "./data/photos";
import { devLogos } from "../skillBox/logos";
import { useState } from "react";
import {
  HelpOutline,
  Lightbulb,
  QuestionMark,
  TipsAndUpdates,
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
  Link,
  LinkOff,
} from "@mui/icons-material";
import me from "../../components/profilePic.png";

const Folio = () => {
  const [slideImageNumberCRM, setSlideImageNumberCRM] = useState(0);
  const [slideImageNumberMHW, setSlideImageNumberMHW] = useState(0);
  const [slideImageNumberMAP, setSlideImageNumberMAP] = useState(0);
  const [openCRM, setOpenCRM] = useState(false);
  const [openCRMinfo, setOpenCRMinfo] = useState(false);

  const [openMAP, setOpenMAP] = useState(false);
  const [openMAPinfo, setOpenMAPinfo] = useState(false);

  const [openMHW, setOpenMHW] = useState(false);
  const [openMHWinfo, setOpenMHWinfo] = useState(false);

  const [helpTip, setHelpTip] = useState(false);
  const [insights, setInsights] = useState(false);

  const helpToggle = () => {
    setInsights(false);
    setHelpTip(!helpTip)
  };

  const insightToggle = () => {
    setHelpTip(false);
    setInsights(!insights)
  };

  const handleCRMSlideShow = (direction) => {
    let newSlideImage;

    const crmMx = crmPhotos.length;
    const crmMax = crmMx - 1;

    if (direction === "leftCRM") {
      newSlideImage = slideImageNumberCRM <= 0 ? crmMax : slideImageNumberCRM - 1;
    } else {
      newSlideImage = slideImageNumberCRM >= crmMax ? 0 : slideImageNumberCRM + 1;
    };

    setSlideImageNumberCRM(newSlideImage);

  };

  const handleMHWSlideShow = (direction) => {
    let newSlideImage;

    const mhwMx = mhwAll.length;
    const MHWMax = mhwMx - 1;

    if (direction === "leftMHW") {
      newSlideImage = slideImageNumberMHW <= 0 ? MHWMax : slideImageNumberMHW - 1;
    } else {
      newSlideImage = slideImageNumberMHW >= MHWMax ? 0 : slideImageNumberMHW + 1;
    };

    setSlideImageNumberMHW(newSlideImage);

  };

  const handleMAPSlideShow = (direction) => {
    let newSlideImage;

    const mapMx = mapPhotos.length;
    const mapMax = mapMx - 1;

    if (direction === "leftMAP") {
      newSlideImage = slideImageNumberMAP <= 0 ? mapMax : slideImageNumberMAP - 1;
    } else {
      newSlideImage = slideImageNumberMAP >= mapMax ? 0 : slideImageNumberMAP + 1;
    };

    setSlideImageNumberMAP(newSlideImage);

  };

  const scrollForwardABit = () => {
    document.getElementById('screenFour').scrollIntoView();
  }
  const scrollBackABit = () => {
    document.getElementById('screenTwo').scrollIntoView();
  }

  return (
    <div className="folioContainer">

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
              <p>
                Three featured projects are displayed in this section
              </p>
              <li><strong>Specks</strong> - a global encyclopedia</li>
              <li><strong>DIR</strong> - a basic CRUD system with redundancy functions [Dummy data loaded]</li>
              <li><strong>myHealthWard</strong> - a health tech web application</li>

              <p>
                Use the light bulbs next to the logos for project details
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
                Dustin's Insights:
              </p>
              <p className="insightsText">
                The overlapping of the logos highlight the link between the projects.
              </p>
              <p className="insightsText">
                Specks and DIR were originally two 'graduation' projects for my coding coursework. <br />
                <strong>Specks</strong>, in its original form, was a basic lightweight API map. It has since been upgraded. <br />
                You can view the map at https://specks.online, or click the link on the main page.
                The map utilises just under 400,000 local data points and a few hundred thousand more in live API requests.
                This is being increased regularly and new features will be added periodically. There is no end point in sight as of yet.
              </p>
              <p className="insightsText">
                <strong>DIR</strong> is a create/read/update/delete (CRUD) full-stack application. Further details can be found on the bulb icon next to its logo.<br />
                The reason for it being featured - DIR has been built from scratch, contains seamless UX with a super easy UI across mobile
                and desktop.
              </p>
              <p className="insightsText">
                <strong>myHealth Ward</strong> is a bespoke solution to the health industry, an automated, socially interactive, all-in-one app that allows
                straightforward secure transactions between users, specialists and health clubs.
                <br />
                It provides a platform which allows health professionals to develop their business in
                an online marketplace and socially interact with their clients, plus the wider community.
                As with the others, further info can be found near the image.
                <br /> A live link is not included as the application is still in development, however, a demo can be produced on request.
              </p>
              <p className="insightsText">
                This website section required a hand-full of React hooks (as the previous section does), and well-thought out styling. The kayaker uses a CSS perspective to dive and shoot up, this solution was implemented
                as it was interfering with the custom designed slideshow due to the load order. <br />
                The slideshow is custom as the available NPM packages were unnecessarily heavy for something that can be written in a 10 line short-function.
                <br /> Clean, simple and low dependency code is my preference.
              </p>
              <p className="insightsText">
                Fun fact:<br /> Whilst building this section of the website, I paused the project for 3 days and focused on the Specks Map.
                This prompted me to give its' own domain and offer the app as an educational resource to schools.</p>
            </div>
          </>
        )}
      </div>

      <p className="folioHeading">
        examples
      </p>

      <div className="folioWrapper">

        <div className="folioContent">

          <div className="folioLogoContainer">

            <div className="folioThumbContainer">
              <img src={devLogos[13].mhw}
                className="folioThumbMHWImage"
                alt="MHW logo"
                onClick={() => setOpenMHW(!openMHW)} />
              <TipsAndUpdates
                className="folioInfoMHW" onClick={() => setOpenMHWinfo(!openMHWinfo)} />
              <LinkOff className="folioLinkMHW" />
            </div>

            <div className="folioThumbContainer">
              <img src={devLogos[14].dir}
                className="folioThumbDIRImage"
                alt="DIR logo"
                onClick={() => setOpenCRM(!openCRM)} />
              <TipsAndUpdates
                className="folioInfoDIR" onClick={() => setOpenCRMinfo(!openCRMinfo)} />
              <a href="https://dustinsmith.tech/DIR" target="_blank" rel="noreferrer">
                <Link className="folioLinkDIR" />
              </a>
            </div>

            <div
              className="folioThumbContainer" >
              <img src={devLogos[15].specks}
                className="folioThumbMAPImage"
                alt="Specks logo"
                onClick={() => setOpenMAP(!openMAP)} />
              <TipsAndUpdates
                className="folioInfoSpecks" onClick={() => setOpenMAPinfo(!openMAPinfo)} />

              <a href="https://specksmap.online" target="_blank" rel="noreferrer">
                <Link className="folioLinkSpecks" />
              </a>
            </div>

          </div>
        </div>

        {openCRM && (
          <div
            className="folioCustomSlider"
          >
            <ArrowCircleLeftOutlined className="goRight"
              onClick={() => handleCRMSlideShow("leftCRM")} />
            <ArrowCircleRightOutlined className="goLeft"
              onClick={() => handleCRMSlideShow("prevCRM")} />
            <div className="folioSliderWrapper" onClick={() => setOpenCRM(!openCRM)}>
              <img src={crmPhotos[slideImageNumberCRM].image} className="folioImg" alt="crm slide images" />
              <p className="slideCaption">{crmPhotos[slideImageNumberCRM].caption}</p>
            </div>
          </div>
        )}

        {openMAP && (
          <div className="folioCustomSlider">

            <ArrowCircleLeftOutlined className="goRight"
              onClick={() => handleMAPSlideShow("leftMAP")} />
            <ArrowCircleRightOutlined className="goLeft"
              onClick={() => handleMAPSlideShow("prevMAP")} />

            <div className="folioSliderWrapper" onClick={() => setOpenMAP(!openMAP)}>
              <img src={mapPhotos[slideImageNumberMAP].image} className="folioImg" alt="specks map slides" />
              <p className="slideCaption">{mapPhotos[slideImageNumberMAP].caption}</p>
            </div>

          </div>
        )}

        {openMHW && (
          <div className="folioCustomSlider">

            <ArrowCircleLeftOutlined className="goRight"
              onClick={() => handleMHWSlideShow("leftMHW")} />
            <ArrowCircleRightOutlined className="goLeft"
              onClick={() => handleMHWSlideShow("prevMHW")} />

            <div className="folioSliderWrapper" onClick={() => setOpenMHW(!openMHW)}>
              <img src={mhwAll[slideImageNumberMHW].image} className="folioImg" alt="myhealth ward slides" />
              <p className="slideCaption">{mhwAll[slideImageNumberMHW].caption}</p>
            </div>

          </div>
        )}

        {openMHWinfo && (
          <div className="folioInfoContainer">
            <div className="folioInfoWrapper" onClick={() => setOpenMHWinfo(!openMHWinfo)}>

              <p className="folioProjectTextBlock">
                myHealth Ward<br />
                A cloud based, health tech app, built on a social media platform
                <br />
                Status: In development
              </p>

              <p className="folioProjectTextBlock">
                Stats<br />
                Total development time (so far) - approx 12 months<br />
                Research time - approx 40%<br />
                Coding time - approx 35%<br />
                Design time - approx 25%<br />
              </p>

              <p className="folioProjectTextBlock">
                Custom file architecture<br />
                88 JSX<br />
                74 SCSS<br />
                7 CSS<br />
                47 JavaScript<br />
              </p>

              <p className="folioProjectTextBlock">
                App architecture<br />
                28 Pages<br />
                55 Components<br />
                8 Database models<br />
                27 unique NPM packages<br />
              </p>
              <p className="folioProjectTextBlock">
                Payment system<br />
                PayPal<br />
              </p>
              <p className="folioProjectTextBlock">
                Technology stack<br />
                MongoDB<br />
                Express<br />
                React<br />
                Node<br />
              </p>
            </div>
          </div>
        )}

        {openMAPinfo && (
          <div className="folioInfoContainer">
            <div className="folioInfoWrapper" onClick={() => setOpenMAPinfo(!openMAPinfo)}>
              <p className="folioProjectTextBlock">
                SPECKS MAP<br />
                Leaflet based map application, serving detailed information on 260+ countries globally.
                Parsing over 500,000 / half a million points of data into a lightning fast application.
                <br />
                Status: Beta release complete, with continuous updates

              </p>

              <p className="folioProjectTextBlock">
                Stats<br />
                Total development time - approx 12 weeks, increasing<br />
                Research time - approx 45%<br />
                Coding time - approx 35%<br />
                Design time - approx 20%<br />
              </p>

              <p className="folioProjectTextBlock">
                Features<br />
                Internal database with 397,839 static entries<br />
                API access to another 200,000+ live entries<br />
                Live weather and raw data turned graphical<br />
                Pinned points of interest<br />
                Flight paths<br />
                Hiking trails<br />
                Oceanography<br />
                more features coming…<br />
              </p>

              <p className="folioProjectTextBlock">
                Custom file architecture<br />
                24 PHP<br />
                3 CSS<br />
                1 HTML<br />
                1 JavaScript<br />
                1 JSON
              </p>

              <p className="folioProjectTextBlock">
                App architecture<br />
                SPA (Single Page Application)<br />
                Numerous databases accessed via API<br />
                No C-U-D functions, Read Only<br />
              </p>
              <p className="folioProjectTextBlock">
                Technology stack<br />
                HTML<br />
                PHP<br />
                JavaScript (jQuery, Leaflet, D3)<br />
                CSS (Bootstrap)<br />
              </p>
            </div>
          </div>
        )}

        {openCRMinfo && (
          <div className="folioInfoContainer">
            <div className="folioInfoWrapper" onClick={() => setOpenCRMinfo(!openCRMinfo)}>
              <p className="folioProjectTextBlock">
                DIR<br />
                Company directory CRUD app
                <br />
                Status: Complete, no further updates
              </p>

              <p className="folioProjectTextBlock">
                Stats<br />
                Total development time - approx 6 weeks<br />
                Research time - approx 20%<br />
                Coding time - approx 55%<br />
                Design time - approx 25%<br />
              </p>

              <p className="folioProjectTextBlock">
                File architecture<br />
                20 PHP<br />
                1 CSS<br />
                1 JavaScript<br />
              </p>

              <p className="folioProjectTextBlock">
                App architecture<br />
                SPA (Single Page Application)<br />
                3 Database models in mySQL<br />
              </p>
              <p className="folioProjectTextBlock">
                Technology stack<br />
                PHP<br />
                JavaScript (jQuery)<br />
                CSS (Bootstrap)<br />
                mySQL<br />
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Folio;
