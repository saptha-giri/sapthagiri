import React from 'react';

import './home.css';

const Home = (props)=>{
    
    return(
        <div className="homeContainer section">
            <div className="homeContentContainer section-content" id={props.id}>
                <div className="left">
                    <h1>High performance<br/>sevices for industries</h1>
                <p>We produce positive results from ever-growing<br/>industrial & manufacturing estates</p>
                </div>
                <div className="right">
                    
                </div>
            </div>
        </div>
    );
}

export default Home;