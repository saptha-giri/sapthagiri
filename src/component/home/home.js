import React from 'react';
import myBg from '../../assets/bgv.png';

import './home.css';

const Home = (props)=>{
    
    return(
        <div className="homeContainer section">
            <div className="homeLeftContainer section-content" id={props.id}>
                <div>
                    <h1>I'm Sapthagiri</h1>
                    <h3 className="homeSubContent">Web & Mobile application <br/> Developer</h3>

                    <button className="mybutton">Hire Me</button>
                </div>
            </div>

            <div className="homeRightContainer">
                <img width="90%" height="100%"src={myBg}/>
            </div>
        </div>
    );
}

export default Home;