import './skillbox.scss';
import 'animate.css';
import { devLogos } from "./logos.js"
import {
  HourglassEmpty,
  Psychology,
  StarRate,
} from "@mui/icons-material";

const SkillBox = ({ boxType }) => {
  let data;

  switch (boxType) {
    case "reactSkills":
      data = {
        title: <img src={devLogos[8].react} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-3s" /></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "htmlSkills":
      data = {
        title: <img src={devLogos[2].html} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-3s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-3s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-3s" /></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "sassSkills":
      data = {
        title: <img src={devLogos[9].sass} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-3s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-3s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-3s" /></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "jSSkills":
      data = {
        title: <img src={devLogos[3].javaS} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-3s" /></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
      };
      break;
    case "cssSkills":
      data = {
        title: <img src={devLogos[1].css} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-3s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-3s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-3s" /></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "phpSkills":
      data = {
        title: <img src={devLogos[7].php} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "sqlSkills":
      data = {
        title: <img src={devLogos[6].sql} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "noSQLSkills":
      data = {
        title: <img src={devLogos[10].mongo} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-3s" /></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "bootSkills":
      data = {
        title: <img src={devLogos[0].boot} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-3s" /></td>
                <td></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-3s" /></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "jquerySkills":
      data = {
        title: <img src={devLogos[4].jquery} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-2s" /></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "nodeSkills":
      data = {
        title: <img src={devLogos[11].node} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-2s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-3s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-3s" /></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
    case "expressSkills":
      data = {
        title: <img src={devLogos[12].express} alt="" className="devLogo" />,
        levels:
          <table>
            <tbody>
              <tr>
                <th className="levelsHeading">Rank</th>
                <th className="levelsHeading">Concept</th>
                <th className="levelsHeading">Utilisation</th>
                <th className="levelsHeading">Skill</th>
              </tr>
              <tr>
                <td>Novice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn" /></td>
              </tr>
              <tr>
                <td>Apprentice</td>
                <td><StarRate className="skillIcon animate__animated animate__bounceInDown animate__delay-1s" /></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-1s" /></td>
                <td><Psychology className="skillIcon animate__animated animate__bounceIn animate__delay-1s" /></td>
              </tr>
              <tr>
                <td>Adept</td>
                <td></td>
                <td><HourglassEmpty className="skillIcon animate__animated animate__flipInX animate__delay-2s" /></td>
                <td></td>
              </tr>
              <tr>
                <td>Expert</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Master</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table >
      };
      break;
  }

  return (
    <div className='skillBoxContainer'>
      <div className="skillBoxData">
        <div className="skillTitle">
          {data.title}
        </div>
        <div className="skillStats">
          {data.stats}</div>
        <div className="levelsTable">
          {data.levels}
        </div>
      </div>
    </div>
  )
}

export default SkillBox