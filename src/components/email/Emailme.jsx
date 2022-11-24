import { EmailOutlined, WhatsApp } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import "./email.scss";
import cord from "./discordWhite.png";
import {
  HelpOutline,
  Lightbulb,
  QuestionMark,
} from "@mui/icons-material";
import me from "../../components/profilePic.png";


const Email = () => {

  const [inputInfo, setInputInfo] = useState({})

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

  const onChangeOfInput = (e) => {
    setInputInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const submitEmail = (e) => {
    e.preventDefault();
    const emailContent = { ...inputInfo };
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakSendOff";
    console.log(emailContent)
    axios.post('./php/sendEmail.php', emailContent)
      .then(result => {
        if (result.data.sent) {
          setmailSent(result.data.sent)
          setError(false)
        } else {
          setError(true)
        }
      })
      .catch(error => setError(error.message));
  }

  const scrollBackABit = () => {
    document.getElementById('screenThree').scrollIntoView();
  }

  return (
    <div className="emailmeContainer">

      <div className="scrollPrevPage" onClick={scrollBackABit}>prev page</div>

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
                The final section of this website - but not the least in importance.
              </p>
              <p>
                It appears in two adaptive forms, desktop and mobile.<br />
                The desktop site contains the entire form on one screen<br />
                The mobile verison spans across three screens.<br />
                For further information on the design, use the insights bulb.
              </p>
              <h4> Thanks for visiting and browsing this far! </h4>
            </div>

          </div>
        )}

        {insights && (
          <>
            <img src={me} className="myBubbleHead" alt="" />
            <div className="insightsPointer"></div>
            <div className="insightsContainer" onClick={insightToggle}>
              <div className="insightsText">
                <p className="insightsHeading">Dustin's Insights</p>
                <p>
                  Contact forms are easily the most underrated area of any website or application. It is the doorway to engagement with users.
                </p>
                <p>
                  The form - as with the entire site - has been redeveloped multiple times.<br />
                  I originally included a validated form, with rulesets and alike - the usual industry standard.
                  However, there was, and remains, absolutely no reason to ask any visitor to write a message to me -
                  you are reading this and visiting my site...The emphasis should on the developer to respond with a meaningful conversation. 
                </p>
                <p>
                  Therefore, I have limited contact with three options and methods. Recognising that people, such as myself,
                  prefer WhatsApp or, gamer's, who enjoy Discord - I thought it important and appropriate in 2022 to place in these options.
                </p>
                <p>
                  The form has been built with AXIOS and PHP. AXIOS bundles your name, the reason for contact and your preferred method of reply.
                  This is sent across as a JSON object to a PHP file. At which point, the PHP (PHPMailer utilised as well) file decodes the JSON object.<br />
                  And then the real 1971 magic happens... ... ...I get an email :)
                </p>
                <p>
                  The mobile adaptive version has 3 screens to it and the reason for this is to accommodate all devices when a keyboard appears for input.
                  I want visitors to see what they are writing, without feeling cramped. Therefore, mobile users - swipe after each section and
                  push the big red button when you are done!
                </p>
                <p>Unfortunately, there are no fun facts... The kayaker ends his journey here with you,
                  by either zooming off on send when used with a desktop or immediately on mobile
                  (screen size played a deciding factor here). 
                </p>
                <p>
                  The big red button had to be done. Just... because...!
                </p>
                <p> Thanks so much for reading, visiting and taking the time out of your day! </p>

              </div>

            </div>
          </>
        )}
      </div>
      <div className="emailmeWrapper">
        <form id="contactForm" onSubmit={submitEmail}>

          <div className="inputContainer">

            <div className="contactName">
              <p className="contactSubHeading">
                whats your name?
              </p>
              <input
                placeholder="...let's chat!..."
                type="text"
                id="yourName"
                name="yourName"
                onChange={onChangeOfInput}
                maxLength={20}
                required
              />
              <hr className="shortHR" />
            </div>

            <div className="contactReason">
              <p className="contactSubHeading">
                i'll reply & break the ice
              </p>
              <div className="contactRadioOptions">
                <label
                  htmlFor="workTogether"
                  className="formLabel">
                  <input
                    type="radio"
                    id="workTogether"
                    name="contactReason"
                    value="workTogether"
                    onChange={onChangeOfInput}
                  />
                  Work together</label>

                <label
                  htmlFor="CV"
                  className="formLabel">
                  <input
                    type="radio"
                    id="CV"
                    name="contactReason"
                    value="CVrequest"
                    onChange={onChangeOfInput} />
                  Request profile</label>

                <label
                  htmlFor="talk"
                  className="formLabel">
                  <input
                    type="radio"
                    id="talk"
                    name="contactReason"
                    value="chat"
                    onChange={onChangeOfInput} />
                  Chew fat</label>
              </div>
              <hr className="shortHR" />
            </div>

            <div className="contactPref">
              <p className="contactSubHeading">
                how should we chat?
              </p>

              <div className="contactMethodContainer">

                <details>
                  <summary>
                    <EmailOutlined className="contactIconEmail" />
                  </summary>
                  <input
                    placeholder="...email here..."
                    type="email"
                    id="yourEmail"
                    name="yourEmail"
                    onChange={onChangeOfInput}
                  />
                </details>

                <details>
                  <summary><WhatsApp className="contactIconWhatsApp" />
                  </summary>
                  <input
                    placeholder="...number here..."
                    type="number"
                    id="yourNumber"
                    name="yourEmail"
                    maxLength={12}
                    onChange={onChangeOfInput}
                  />
                </details>

                <details>
                  <summary>
                    <img src={cord} className="contactIconDiscord" alt="" />
                  </summary>
                  <input
                    placeholder="...tag here..."
                    type="text"
                    id="yourDiscord"
                    name="yourEmail"
                    onChange={onChangeOfInput}
                  />
                </details>

              </div>
            </div>

          </div>

          <button id="emailButton" type="submit">
            <span>push me</span>
          </button>

        </form>
      </div>
    </div >
  );
};

export default Email;
