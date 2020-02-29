import React from 'react';

import './about.css';

const About = (props)=>{
    return(
        <div className="aboutContainer section">
            <div className="aboutContentContainer section-content" id={props.id}>
            <h1>About Me</h1>
                <div style={{
                        display:"flex",
                        justifyContent:"center"
                    }}>
                    <div className="aboutLeftContainer">
                    <p>Financial growth in INR lakhs</p>
                    <ul className="chart">
                            <li>
                                <span style={{height:'90%'}} title="HTML 5"></span>
                            </li>
                            <li>
                                <span style={{height:'80%'}} title="css"></span>
                            </li>
                            <li>
                                <span style={{height:'85%'}} title="javascript"></span>
                            </li>
                            <li>
                                <span style={{height:'95%'}} title="React js"></span>
                            </li>
                        </ul>    
                </div>

                <div className="aboutRightContainer">
                    <p>KS SERVICES is an engineering and construction company providing versatile and comprehensive service in power and infrastructure industries. The core activities of the Company include three major business lines Erection, Testing and Commissioning of BTG and Maintenance, renovation and modernization of power plants and supply of components. </p>

                    <p>The company has undertaken projects of all types, sizes and in all environments in India and abroad which Super Critical Thermal Power Projects, Sub Critical Power Projects, Heat Recovery Steam Generator, Waste Heat Recovery Steam Generator, maintenance, renovation, modernization and annual maintenance of running plants. </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;