import "./home.scss";
import "animate.css/animate.css";
import kForward from "./kForward.gif";
import { useHorizontalScroll } from "../../customHooks/horScroll";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Folio from "../../components/folio/Folio";
import Emailme from "../../components/email/Emailme";
import { kayakAmination } from "../../customHooks/kayakAmination";

const Home = () => {
  const horScroll = useHorizontalScroll()

  // ref={horScroll}

  return (
    <div
      className="homePage"
      onScroll={kayakAmination}
    >
      <div id="screenOne">
        <About />
      </div>
      <div id="screenTwo">
        <Skills />
      </div>
      <div id="screenThree">
        <Folio />
      </div>
      <div id="screenFour">
        <Emailme />
      </div>
      <div className="kayakStart" id="kayaker">
        <img id="kayakImg" src={kForward} alt="" />
      </div>
    </div>
  );
};

export default Home;
