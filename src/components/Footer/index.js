import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../assets/css/footer.css';

function Footer() {
    
    return (
        <footer className="flex-row justify-center align-center px-2">
            <a href="https://github.com/arslan-razi" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} className="mr-1" />
            </a>
            <a href="https://www.linkedin.com/in/arslanrazi/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
            </a>
        </footer>
    );
};

export default Footer;