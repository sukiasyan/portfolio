import React from 'react';
import Facebook from '../../../assets/images/contacts/Facebook.png';
import Github from '../../../assets/images/contacts/Github.png';
import Linkedin from '../../../assets/images/contacts/Linkedin.png';
import './Contacts.css';

const contacts = () => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m12 skills-title-main">Contacts</div>
            </div>
            <div className="row">
                <div className="col s6 m6 contact-pics">
                    <p><img src={Facebook} alt=""/></p><br/>
                    <p><img src={Github} alt=""/></p><br/>
                    <p><img src={Linkedin} alt=""/></p><br/>
                </div>
                <div className="col s6 m6">
                    <p><a href="https://www.facebook.com/yaks10">Facebook</a></p>
                    <p><a href="https://github.com/sukiasyan">Github</a></p>
                    <p><a href="https://www.linkedin.com/in/hakob-sukiasyan-8269a519/">Linkedin</a></p>
                </div>
            </div>
        </div>
    )
};
export default contacts;