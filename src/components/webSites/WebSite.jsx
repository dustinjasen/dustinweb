import './webSite.scss';
import 'animate.css';
import { useState } from "react";

const WebSite = () => {
    const [openApps, setOpenApps] = useState(false);

    return (
        <div className="webSiteContainer" onClick={() => { setOpenApps(!openApps) }}>
            <div className="content">
                <p className="webSiteHeading">websites</p>
                {openApps && (
                    <div className="openAppsContainer">
                        <p className="contentSubHeading animate__animated animate__fadeInDown">engaging designs</p>
                        <ul>
                            <li className='animate__animated animate__fadeInDown animate__delay-1s'>Mobile/Desktop websites</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-2s'>Responsive & adaptive content</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-3s'>Engaging & interactive elements</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-4s'>Search engine friendly</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-5s'>Clean, easily updatable code</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WebSite