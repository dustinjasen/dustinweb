import "./skilltree.scss";
import Ripples from "react-ripples";
import SkillBox from "../../components/skillBox/SkillBox";
import { useState } from "react";
import {
    HourglassEmpty,
    Psychology,
    StarRate,
    PriorityHigh,
} from "@mui/icons-material";

const SkillTree = () => {
    const [openApps, setOpenApps] = useState(false);

    const [openREACT, setOpenREACT] = useState(false);
    const [openHTML, setOpenHTML] = useState(false);
    const [openSASS, setOpenSASS] = useState(false);
    const [openJavaS, setOpenJavaS] = useState(false);
    const [openCSS, setOpenCSS] = useState(false);
    const [openPHP, setOpenPHP] = useState(false);
    const [openSQL, setOpenSQL] = useState(false);
    const [openNOSQL, setOpenNOSQL] = useState(false);
    const [openBOOT, setOpenBOOT] = useState(false);
    const [openJQUERY, setOpenJQUERY] = useState(false);
    const [openNODE, setOpenNODE] = useState(false);
    const [openEXPRESS, setOpenEXPRESS] = useState(false);
    const [openDefinitions, setOpenDefinitions] = useState(false);

    const handleREACT = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenNOSQL(false);
        setOpenDefinitions(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenREACT(!openREACT)
    }

    const handleHTML = () => {
        setOpenREACT(false);
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenNOSQL(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenHTML(!openHTML);
    }

    const handleSASS = () => {
        setOpenHTML(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenNOSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenSASS(!openSASS);
    }

    const handleJS = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenNOSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenJavaS(!openJavaS);
    }

    const handleCSS = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenNOSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenCSS(!openCSS);
    }

    const handlePHP = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenSQL(false);
        setOpenNOSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenPHP(!openPHP);
    }

    const handleSQL = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenNOSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenSQL(!openSQL);
    }

    const handleNOSQL = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenNOSQL(!openNOSQL);
    }

    const handleBOOT = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNOSQL(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenJQUERY(false);
        setOpenBOOT(!openBOOT);
    }

    const handleJQUERY = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNOSQL(false);
        setOpenNODE(false);
        setOpenEXPRESS(false);
        setOpenBOOT(false);
        setOpenJQUERY(!openJQUERY);
    }

    const handleNODE = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNOSQL(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenEXPRESS(false);
        setOpenNODE(!openNODE);
    }

    const handleEXPRESS = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenREACT(false);
        setOpenDefinitions(false);
        setOpenNOSQL(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenNODE(false);
        setOpenEXPRESS(!openEXPRESS);
    }

    const handleDefinition = () => {
        setOpenHTML(false);
        setOpenSASS(false);
        setOpenJavaS(false);
        setOpenCSS(false);
        setOpenPHP(false);
        setOpenSQL(false);
        setOpenREACT(false);
        setOpenNOSQL(false);
        setOpenJQUERY(false);
        setOpenBOOT(false);
        setOpenEXPRESS(false);
        setOpenNODE(false);
        setOpenDefinitions(!openDefinitions)
    }

    return (
        <div className="skillTree" onClick={() => { setOpenApps(!openApps) }}>

            <div className="content">
                <p className="techHeading">tech used</p>
                {openApps && (
                    <div className="openAppsContainer">
                        <div className="languageContainer">
                            <span className='animate__animated animate__fadeInDown animate__delay-1s'>
                                <Ripples
                                    color="#e44d26"
                                    during={1200}
                                    onClick={handleHTML}>
                                    HTML
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-2s'>
                                <Ripples
                                    color="#2062af"
                                    during={1200}
                                    onClick={handleCSS}>
                                    CSS
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-3s'>
                                <Ripples
                                    color="#e6a329"
                                    during={1200}
                                    onClick={handleJS}>
                                    JavaScript
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-1s'>
                                <Ripples
                                    color="#607fb4"
                                    during={1200}
                                    onClick={handlePHP}>
                                    PHP
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-5s'>
                                <Ripples
                                    color="#005269"
                                    during={1200}
                                    onClick={handleSQL}>
                                    mySQL
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-5s'>
                                <Ripples
                                    color="#58aa50"
                                    during={1200}
                                    onClick={handleNOSQL}>
                                    MongoDB
                                </Ripples>
                            </span>
                        </div>

                        <div className="libraryContainer">
                            <span className='animate__animated animate__fadeInDown animate__delay-3s'>
                                <Ripples
                                    color="#60d9fa"
                                    during={1200}
                                    onClick={handleREACT}>
                                    React
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-3s'>
                                <Ripples
                                    color="#0867ac"
                                    during={1200}
                                    onClick={handleJQUERY}>
                                    jQuery
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-2s'>
                                <Ripples
                                    color="#ce6399"
                                    during={1200}
                                    onClick={handleSASS}>
                                    SASS
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-1s'>
                                <Ripples
                                    color="#5b4282"
                                    during={1200}
                                    onClick={handleBOOT}>
                                    Bootstrap
                                </Ripples>
                            </span>

                            <span className='animate__animated animate__fadeInDown animate__delay-3s'>
                                <Ripples
                                    color="#58aa50"
                                    during={1200}
                                    onClick={handleNODE}>
                                    Node
                                </Ripples>
                            </span>
                            <span className='animate__animated animate__fadeInDown animate__delay-3s'>
                                <Ripples
                                    color="#58aa50"
                                    during={1200}
                                    onClick={handleEXPRESS}>
                                    Express
                                </Ripples>
                            </span>
                        </div>

                        <div className="defoIcon">
                            <span className="animate__animated animate__fadeInDown animate__delay-5s">
                                <Ripples
                                    color="darkblue"
                                    during={1200}
                                    onClick={handleDefinition}>
                                    <PriorityHigh className="defoLogo" />
                                </Ripples>
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <div className="skillTreeModalContainer">
                {openREACT && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #60d9fa' }}
                        onClick={handleREACT}>
                        <SkillBox boxType="reactSkills" />
                    </div>
                )}
                {openHTML && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #e44d26' }}
                        onClick={handleHTML}>
                        <SkillBox boxType="htmlSkills" />
                    </div>
                )}
                {openSASS && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #ce6399' }}
                        onClick={handleSASS}>
                        <SkillBox boxType="sassSkills" />
                    </div>
                )}
                {openJavaS && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #e6a329' }}
                        onClick={handleJS}>
                        <SkillBox boxType="jSSkills" />
                    </div>
                )}
                {openCSS && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #2062af' }}
                        onClick={handleCSS}>
                        <SkillBox boxType="cssSkills" />
                    </div>
                )}
                {openPHP && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #607fb4' }}
                        onClick={handlePHP}>
                        <SkillBox boxType="phpSkills" />
                    </div>
                )}
                {openSQL && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #005269' }}
                        onClick={handleSQL}>
                        <SkillBox boxType="sqlSkills" />
                    </div>
                )}
                {openNOSQL && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #58aa50' }}
                        onClick={handleNOSQL}>
                        <SkillBox boxType="noSQLSkills" />
                    </div>
                )}
                {openBOOT && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #5b4282' }}
                        onClick={handleBOOT}>
                        <SkillBox boxType="bootSkills" />
                    </div>
                )}
                {openJQUERY && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #0867ac' }}
                        onClick={handleJQUERY}>
                        <SkillBox boxType="jquerySkills" />
                    </div>
                )}
                {openNODE && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #58aa50' }}
                        onClick={handleNODE}>
                        <SkillBox boxType="nodeSkills" />
                    </div>
                )}
                {openEXPRESS && (
                    <div className="skillDetails"
                        style={{ border: '5px solid #58aa50' }}
                        onClick={handleEXPRESS}>
                        <SkillBox boxType="expressSkills" />
                    </div>
                )}

                {openDefinitions && (
                    <div className="skillDetails"
                        style={{ border: '5px solid darkblue' }}
                        onClick={handleDefinition}>
                        <div className="skillLevelDefinitionContainer">
                            <p className="skillLevelDefined">
                                <span className="skillDefHeading">
                                    <Psychology className="skillLevelDefinedIcon" /> Skill level</span>
                                Ability to construct code
                                without referring to documentation
                            </p>
                            <p className="skillLevelDefined">
                                <span className="skillDefHeading">
                                    <StarRate className="skillLevelDefinedIcon" /> Concept level</span>
                                Understanding of the limitations in the language, library or framework
                            </p>
                            <p className="skillLevelDefined">
                                <span className="skillDefHeading">
                                    <HourglassEmpty className="skillLevelDefinedIcon" /> Utilisation level</span>
                                Usage in hours per week of a language, library or framework.
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div >
    )
}

export default SkillTree