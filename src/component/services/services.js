import React from 'react';

import './services.css';

const Services = (props)=>{
    return(
        <div className="expContainer section">
            <div className="section-content expContent" id={props.id}>
                <h1>Our Services</h1>

                <div className="experiences">
                    <div className="expe">

                        <div className="expe-heading">
                            <h3>Erection</h3>
                        </div>
                        <div>
                            <ul className="expe-list">
                                <li>Our Erection Works business includes erection, testing and commissioning of boilers, turbines and generators and balance of plant (BOP) works for the power sector as well as other allied industries including petrochemicals, steel and cement..</li>
                                <li>We have established a track record of successfully executing ETC-BTG and BOP contracts for large power projects including for 600 MW unit capacity super-critical projects.</li>
                                <li>We provide ETC-BTG and BOP works for power plants including ultra-mega power plants (UMPPs) and super-critical power plants with unit capacities ranging from 150 MW to 800 MW. We also provide erection works services to gas and combined cycle power projects, HRSG, WHRB, CFBC boilers, steam turbine generators, steam generators including auxiliaries, ESPs, hydro turbines and BOP packages, including structural steel works, ash handling, coal handling, fuel oil systems and high-pressure piping works.</li>
                            </ul>
                        </div>

                    </div>
                    <div className="expe">

                        <div className="expe-heading">
                            <h3>Supply</h3>
                        </div>
                        <div>
                            <ul className="expe-list">
                                <li>DProducts made by KS SERVICES include Boilers and Boiler components to various industries including Power, Paper, Sugar, non-ferrous, Carbon black and many more Process industries having Steam Generation; Combined Cycle Power plants; De-salination systems, to national / international standards, meeting Statutory or Regulatory provisions, be it IBR, ASME, equipments to PED provisions with CE marking GB specializes in Mechanical Design, Manufacture & Supply of.</li>
                                <li>Fired Boilers.</li>
                                <ul className="expe-list">
                                    <li>Atmospheric Fluidized Bed Boilers (AFBC).</li>
                                    <li>Circulating Fluidized Bed Boilers (CFBC).</li>
                                    <li>Blast Furnace Gas Fired Boilers (BFG / COG).</li>
                                    <li>Pulverized Coal Fired Boilers (PF).</li>
                                    <li>Oil Fired Boilers.</li>
                                    <li>Bio-mass Fired Boilers.</li>
                                </ul>
                            </ul>
                        </div>

                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Services;