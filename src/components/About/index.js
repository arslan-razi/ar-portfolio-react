import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import arslan from '../../assets/images/arslan.jpg';
import '../../assets/css/about.css';

function About () {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <h2 className="text-center w100 mb-2">About <span className="text-primary">Me</span></h2>
                <div className="text-center" id="my-picture">
                    <img className="circle" id="profile-pic" src={arslan} alt="Arslan Razi" />
                    <a href="https://github.com/arslan-razi" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} className="mx-2 icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/arslanrazi/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="mx-2 icon" />
                    </a>
                </div>
                <div className="w75" id="about-me">
                    
                    <p> Outstanding Product Management Professional with over 10 years of experience in multiple industries.
Strong analytical thinking and problem-solving skills with extensive experience leading complex enterprise
<span className="bold text-primary"> software development</span> projects.  

                    </p>
                    <p>
                    Excellent communication skills and interpersonal skills, great in building
lasting relationships with clients. Exceptional organization skills, with proven experience in research and
documentation of business and solution requirements.
                    </p>
                    <p>
                    Advocate for professional development through
continuous learning. Certified <span className="bold text-primary"> Business Analyst</span> from the University of Toronto. <span className="bold text-primary"> Software Product
Management (SPM®)</span> Certificate from Silicon Valley based Product School.
 
                    </p>
                    <p>
                    Currently enrolled in University of Toronto School of Continuing Studies <span className="bold text-primary"> Coding Boot Camp</span>. Lots of learning in just six months. It's a roller coaster ride and I am loving it.  
                    </p>
                    
                </div>
            </div>
        </section>
    );
}

export default About;