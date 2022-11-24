import './management.scss'
import 'animate.css';
import { useState } from "react";

const Management = () => {
    const [openApps, setOpenApps] = useState(false);

    return (
        <div className="managementContainer" onClick={() => { setOpenApps(!openApps) }}>
            <div className="content">
                <p className="managementHeading">management</p>
                {openApps && (
                    <div className="openAppsContainer">
                        <p className="contentSubHeading animate__animated animate__fadeInDown">softer skills</p>
                        <ul>
                            <li className='animate__animated animate__fadeInDown animate__delay-1s'>Client management</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-2s'>Business development/sales</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-3s'>People.</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-4s'>Investor & stakeholder relations</li>
                            <li className='animate__animated animate__fadeInDown animate__delay-5s'>Recruitment</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Management