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
                                <h3>Reg.Office </h3>
                                <p>4th Floor Guna Building <br/>Annex 443 Anna Salai Taynampet<br/>Chennai 600 018</p>
                                <p>Phone : 91 (0) 044-32220757<br/>Email : ksservices@ksserv.in</p>
                            </div>
                            <div className="form-items">
                            <h3>Factory Address </h3>
                            <p>D-99 ,DP Estate ,Thuvakudy<br/>Tiruchirapalli -620015<br/>Tamil Nadu INDIA</p>
                            <p>Email : admin@ksserv.in</p>
                            </div>

                        </div>
                        <div className="right-contact">
                            <div className="right-content">
                                <h3>SVN Raju <br/> CEO</h3>
                                <p>svnraja@ksserv.in<br/>+91-7397105010<br/>+91-9444000569</p>

                                <h3>NV NAMBIAR<br/>GM-Marketing</h3>
                                <p>nambiar@ksserv.in<br/>+91-9080850156</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;