import React from 'react';

import './contact.css';

const Contact = (props)=>{
    return(
        <div className="contactContainer section">
            <div className="contact-content section-content" id={props.id}>
                <h1>Contact</h1>
                <div className="details-container">
                        <div className="left-contact">
                            <div className="form-items">
                                <h3>Reginal Office </h3>
                                <p>4th Floor Guna Building <br/>Annex 443 Anna Salai Taynampet<br/>Chennai 600 018</p>
                                <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i> &nbsp;: 91 (0) 044-32220757<br/>
                                <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;: ksservices@ksserv.in</p>
                            </div>
                            <div className="form-items">
                            <h3>Factory Address </h3>
                            <p>D-99 ,DP Estate ,Thuvakudy<br/>Tiruchirapalli -620015<br/>Tamil Nadu INDIA</p>
                            <p><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;: admin@ksserv.in</p>
                            </div>

                        </div>
                        <div className="right-contact">
                            <div className="right-content">
                                <div className="cDetails">
                                    <h3>S.V.N RAJU - CEO</h3>
                                    <p><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;  svnraja@ksserv.in<br/>
                                    <i class="fa fa-mobile fa-2x" aria-hidden="true"></i> &nbsp;  +91-7397105010<br/>
                                    <i class="fa fa-phone fa-lg" aria-hidden="true"></i> &nbsp;+91-9444000569</p>
                                </div>

                                <div className="cDetails">
                                    <h3>NV NAMBIAR - GM Marketing</h3>
                                    <p><i class="fa fa-envelope" aria-hidden="true"></i> &nbsp;  nambiar@ksserv.in<br/>
                                    <i class="fa fa-mobile fa-2x" aria-hidden="true"></i> &nbsp;  +91-9080850156</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;