import { EmailOutlined, WhatsApp } from "@mui/icons-material";
import axios from "axios";
import { useState, useRef } from "react";
import "./email.scss";
import cord from "./discordWhite.png";
import { HelpOutline, Lightbulb, QuestionMark } from "@mui/icons-material";
import me from "../../components/profilePic.png";
import "animate.css";

const Email = () => {
  //Help container states
  const [inputInfo, setInputInfo] = useState({});
  const [helpTip, setHelpTip] = useState(false);
  const [insights, setInsights] = useState(false);

  //Custom form validation states
  const [nameErr, setNameErr] = useState(false);

  const [openEmail, setOpenEmail] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const [openWhatsApp, setOpenWhatsApp] = useState(false);
  const [whatsAppErr, setWhatsAppErr] = useState(false);

  const [openDiscord, setOpenDiscord] = useState(false);
  const [discordErr, setDiscordErr] = useState(false);

  //help container handling
  const helpToggle = () => {
    setInsights(false);
    setHelpTip(!helpTip);
  };

  const insightToggle = () => {
    setHelpTip(false);
    setInsights(!insights);
  };

  //handleTogglingOfContactPref
  const handleEmailOpen = () => {
    setOpenDiscord(false);
    setOpenEmail(!openEmail);
    setOpenWhatsApp(false);
    setWhatsAppErr(false);
    setDiscordErr(false);
  };
  const handleWhatsAppOpen = () => {
    setOpenDiscord(false);
    setOpenEmail(false);
    setOpenWhatsApp(!openWhatsApp);
    setEmailErr(false);
    setDiscordErr(false);
  };
  const handleOpenDiscord = () => {
    setOpenDiscord(!openDiscord);
    setOpenEmail(false);
    setOpenWhatsApp(false);
    setEmailErr(false);
    setWhatsAppErr(false);
  }

  //handle input changes
  const onChangeOfInput = (e) => {
    setInputInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //handle submit
  const submitEmail = (e) => {
    e.preventDefault();
    const emailContent = { ...inputInfo };
    const getKayakerIDfromDOM = document.getElementById("kayaker");
    getKayakerIDfromDOM.className = "kayakSendOff";
    // axios.post('http://localhost:3001/public/php/sendEmail.php', emailContent)

    const successScreen = () => {
      document.getElementById("confirmContact").style.display = "none";
      document.getElementById("successScreen").style.display = "flex";
    };

    try {
      axios.post("./php/sendEmail.php", emailContent).then({ successScreen });
    } catch (err) {
      console.log(err);
    }
  };

  const scrollBackABit = () => {
    document.getElementById("screenThree").scrollIntoView();
  };

  const validateName = useRef();

  const nameInputValidation = () => {
    const lettersOnly = /^[A-Za-z]+$/;
    if (validateName.current.value.match(lettersOnly)) {
      setNameErr(false);
      document.getElementById("contactName").style.display = "none";
      document.getElementById("contactReason").style.display = "flex";
    } else {
      setNameErr(true);
    }
  };

  const contactReasonValidation = () => {
    document.getElementById("contactReason").style.display = "none";
    document.getElementById("contactPref").style.display = "flex";
  };

  const validateEmail = useRef();
  const validateDiscord = useRef();
  const validateNumber = useRef();

  const contactDetailsValidationEmail = () => {
    const validEmailAddress = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validateEmail.current.value.match(validEmailAddress)) {
      setEmailErr(false);
      document.getElementById("confirmContact").style.display = "flex";
      document.getElementById("contactPref").style.display = "none";
    } else {
      setEmailErr(true);
    }
  }

  const contactDetailsValidationNumber = () => {
    const numberTooShort = validateNumber.current.value.length < 7;
    const numberNotaNumber = isNaN(validateNumber.current.value);

    if (numberTooShort || numberNotaNumber) {
      setWhatsAppErr(true);
    } else {
      setWhatsAppErr(false);
      document.getElementById("confirmContact").style.display = "flex";
      document.getElementById("contactPref").style.display = "none";
    }

  }

  const contactDetailsValidationDiscord = () => {
    const emptyDiscord = "";
    if (validateDiscord.current.value > emptyDiscord) {
      setDiscordErr(false);
      document.getElementById("confirmContact").style.display = "flex";
      document.getElementById("contactPref").style.display = "none";
    } else {
      setDiscordErr(true);
    }
  }

  const handleReset = () => {
    setInputInfo({});
    setOpenEmail(false); setOpenWhatsApp(false); setOpenDiscord(false)
    document.getElementById("contactName").style.display = "flex";
    document.getElementById("contactReason").style.display = "none";
    document.getElementById("contactPref").style.display = "none";
    document.getElementById("confirmContact").style.display = "none";
  };

  return (
    <div className='emailmeContainer'>
      <div
        className='animate__animated animate__fadeOut animate__delay-5s animate__slower'
        id='instructionFadeOut'
      >
        After entering your details, touch or click anywhere on the screen to
        continue
      </div>

      <div
        className='scrollPrevPage'
        onClick={scrollBackABit}
      >
        prev page
      </div>

      <div className='tipsIconContainer'>
        <HelpOutline
          className='aboutIcon'
          onClick={helpToggle}
        />
        <Lightbulb
          className='insightsIcon'
          onClick={insightToggle}
        />
      </div>

      <div className='helpContentContainer'>
        {helpTip && (
          <div
            className='aboutTipContainer'
            onClick={helpToggle}
          >
            <QuestionMark className='aboutIconMark' />
            <div className='aboutTipText'>
              <p>
                The final section of this website - but not the least in
                importance.
              </p>
              <p>
                Mobile users - tap your screen to continue to another input
                <br />
                Desktop users - press tab, or click the screen to continue
                <br />
                For further information on the design, use the insights bulb.
              </p>
              <h4> Thanks for visiting and browsing this far! </h4>
            </div>
          </div>
        )}

        {insights && (
          <>
            <img
              src={me}
              className='myBubbleHead'
              alt=''
            />
            <div className='insightsPointer'></div>
            <div
              className='insightsContainer'
              onClick={insightToggle}
            >
              <div className='insightsText'>
                <p className='insightsHeading'>Dustin's Insights</p>
                <p>
                  Contact forms are easily the most underrated area of any
                  website or application. It is the doorway to engagement with
                  users.
                </p>
                <p>
                  The form - as with the entire site - has been redeveloped
                  multiple times.
                  <br />I have tried to make this process as friendly and warm as possible.
                  There is no need to think about a custom message to write,
                  I can reach out from this point.
                </p>
                <p>
                  Methods of contact have been expanded to include email, WhatsApp
                  and for gamers who enjoy Discord - I thought it
                  important and appropriate in 2022 to place in these options.
                </p>
                <p>
                  During your input, a custom-designed JavaScript validation takes place.
                  You cannot enter a number for your name,
                  letters in your phone number or construct an incomplete email.
                  Errors are shown by using React's state management as opposed to setCustomValidity.
                  The reason behind this was due to the design of the form. Layout and HTML/DOM tree defaults
                  were an important consideration, a solution had to be found that worked around this.
                </p>
                <p>
                  The backend of the form has been built with PHP. AXIOS sits in the front and
                  bundles your contact information then sends it as a JSON object.
                  PHP (PHPMailer utilised as well) decodes the JSON object received by AXIOS.
                  <br />
                  And then the real 1971 magic happens... ... ...I get an email
                  :)
                </p>
                <p>
                  The mobile and desktop sites were originally built adaptively
                  to ensure that all screens and devices can use this form.
                  Samsung, Apple, Huawei etc., have creative ways of displaying their onscreen
                  keyboards. The solution, to keep aligned with the theme, was to build a clean
                  screen and contact form.
                </p>
                <p>
                  Unfortunately, there are no fun facts... The kayaker ends his
                  journey here with you, by either zooming off on send when used
                  with a desktop or immediately on mobile (screen size vs clutter played a
                  deciding factor here).
                </p>
                <p>
                  Thanks so much for reading, visiting and taking the time out
                  of your day!
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className='emailmeWrapper'>
        <form
          id='contactForm'
          onSubmit={submitEmail}
        >
          <div className='inputContainer'>
            <div id='contactName'>
              <p className='contactSubHeading'>whats your name?</p>
              <input
                placeholder="...let's talk!..."
                type='text'
                id='yourName'
                name='yourName'
                onChange={onChangeOfInput}
                maxLength={20}
                onBlur={nameInputValidation}
                ref={validateName}
                required
              />
              {nameErr && (
                <div className="errorPopUp">Your name can only contain letters</div>
              )}
            </div>

            <div id='contactReason'>
              <p className='contactSubHeading'>
                hey {inputInfo.yourName}! choose a topic
              </p>
              <div className='contactRadioOptions'>
                <label
                  htmlFor='workTogether'
                  className='formLabel'
                >
                  <input
                    type='radio'
                    id='workTogether'
                    name='contactReason'
                    value='to work together'
                    onChange={onChangeOfInput}
                    onBlur={contactReasonValidation}
                  />
                  work together
                </label>

                <label
                  htmlFor='CV'
                  className='formLabel'
                >
                  <input
                    type='radio'
                    id='CV'
                    name='contactReason'
                    value='me to send you my CV'
                    onChange={onChangeOfInput}
                    onBlur={contactReasonValidation}
                  />
                  request profile
                </label>

                <label
                  htmlFor='talk'
                  className='formLabel'
                >
                  <input
                    type='radio'
                    id='talk'
                    name='contactReason'
                    value='to chat!'
                    onChange={onChangeOfInput}
                    onBlur={contactReasonValidation}
                  />
                  chew fat
                </label>
              </div>
              <p className='contactSubHeading'>i'll reply & break the ice!</p>
            </div>

            <div id='contactPref'>
              <p className='contactSubHeading'>pick your fav method</p>

              <div className='contactMethodContainer'>

                <div className="contactIconContainer">
                  <EmailOutlined
                    className='contactIconEmail'
                    onClick={handleEmailOpen} />

                  {openEmail && (
                    <input
                      placeholder='email? awesome!'
                      id='yourEmail'
                      type='text'
                      name='yourEmail'
                      onChange={onChangeOfInput}
                      onBlur={contactDetailsValidationEmail}
                      ref={validateEmail}
                    />
                  )}
                  {emailErr && (<div className="errorPopUp">please check your email address</div>)}
                </div>

                <div className="contactIconContainer">
                  <WhatsApp
                    className='contactIconWhatsApp'
                    onClick={handleWhatsAppOpen} />
                  {openWhatsApp && (
                    <input
                      placeholder="i'll text you!"
                      type='text'
                      id='yourNumber'
                      name='yourEmail'
                      onChange={onChangeOfInput}
                      onBlur={contactDetailsValidationNumber}
                      ref={validateNumber}
                      maxLength={15}
                    />
                  )}
                  {whatsAppErr && (<div className="errorPopUp">please check your number</div>)}
                </div>

                <div className="contactIconContainer">

                  <img
                    src={cord}
                    className='contactIconDiscord'
                    alt=''
                    onClick={handleOpenDiscord}
                  />

                  {openDiscord && (
                    <input
                      placeholder="whats your tag"
                      type='text'
                      id='yourDiscord'
                      name='yourEmail'
                      onChange={onChangeOfInput}
                      onBlur={contactDetailsValidationDiscord}
                      ref={validateDiscord}
                    />
                  )}
                  {discordErr && (<div className="errorPopUp">please check your tag</div>)}

                </div>

              </div>
            </div>

            <div id='confirmContact'>
              <p className='contactSubHeading'>are these details correct?</p>

              <div className='contactMethodContainer'>
                <div className='contactInfoConfirm'>
                  you are {inputInfo.yourName}
                </div>
                <div className='contactInfoConfirm'>
                  i'll reach you @ {inputInfo.yourEmail}
                </div>
                <div className='contactInfoConfirm'>
                  you'd like {inputInfo.contactReason}
                </div>

                <div className='contactInfoButtons'>
                  <button
                    className='correctInfo'
                    type='submit'
                  >
                    perfect!
                  </button>
                  <button
                    className='goBack'
                    type='reset'
                    onClick={handleReset}
                  >
                    nope, try again
                  </button>
                </div>
              </div>
            </div>

            <div id='successScreen'></div>

            {/* <button id="emailButton" type="submit" onClick={submitEmail}>
              <span>push to send</span>
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
