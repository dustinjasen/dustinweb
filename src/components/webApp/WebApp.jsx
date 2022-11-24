import './webapp.scss';
import { useState } from "react";
import 'animate.css';

const WebApp = () => {
    const [openApps, setOpenApps] = useState(false);

    return (
        <div className="webAppContainer" onClick={() => { setOpenApps(!openApps) }}>
            <div className="content">
                <p className="webAppHeading">@pps</p>
                {openApps && (
                    <div className="openAppsContainer">
                        <p className="contentSubHeading  animate__animated animate__fadeInDown">full-stack builds</p>
                        <ul>
                            <li className='animate__animated animate__fadeInDown animate__delay-1s'>Mobile/Desktop apps</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-2s'>Cloud based solutions</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-3s'>Custom APIs</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-4s'>Functional databases</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-5s'>Scalable architecture</li>
                        </ul>
                    </div>
                )}

            </div>
        </div>
    )
}

export default WebApp