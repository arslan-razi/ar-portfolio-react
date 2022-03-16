import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import myResume from '../../assets/pdf/20220123_ArslanRaziResume.pdf';
import experience from '../../lib/resume';
import '../../assets/css/resume.css';

function Resume() {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <div className="side-container">
                    <div className="resume-block">
                        <h2 className="mb-1">Arslan <span className="text-primary">Razi</span></h2>
                        <h4>Software Product Manager</h4>
                        <form method="get" action={myResume} target="_blank">
                            <button type="submit" className="btn">
                                <FontAwesomeIcon icon={faFileDownload} className="mr-1" />
                                Download Resume
                            </button>
                        </form>
                    </div>
                    <div className="resume-block">
                        <h4>Skills</h4>
                        Software Development Life Cycle (Agile - Scrum), Business Requirements Document (BRD), System Requirements Specification (SRS), Data Modeling, Process Modeling & UML (use cases, scenarios, activity, sequence diagrams), User Stories, Acceptance Criteria, Test Strategy, Test Plans, Backlog Grooming, & Sprint Planning, Java, JavaScript, microservices, RESTful APIs, AWS, SQL and NoSQL databases, GIT, Node.js, HTML, Adobe Photoshop, Adobe Illustrator, Camtasia Studio, Snagit, Visio, draw.io, JIRA, Confluence,Presentations and Walkthroughs, Product Strategy, QA, Digital Market Strategy, Investigate & resolve Technical Issues, Data Management, Excellent Customer Support, Analytical Skill, Wireframes, Mockups, Engineering, Design, Cloud, User Interface, UX/UI, CSS.
                    </div>
                    <div className="resume-block">
                        <h4>Education</h4>
                        <ul className="resume-list">
                            {/* <li>Software Product Management (SPM®) Certificate</li> */}
                            <li>Master of Business Administration (MBA) - Finance and Banking</li>
                        </ul>
                    </div>
                    <div className="resume-block">
                        <h4>Certifications</h4>
                        <ul className="resume-list">
                            <li>
                            Software Product Management (SPM®) Certificate <br />
                                <span className="italic text-small">Product School</span>
                            </li>
                            <li>
                            Certificate in Business Analysis <br />
                                <span className="italic text-small">University of Toronto </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="experience-container">
                    <h3>Experience</h3>
                    {/* renders job experience from experience array in lib folder */}
                    {experience.map(job => (
                        <div className="resume-block" key={job.id}>
                            <h4 className="text-primary">{job.title}</h4>
                            <h5>{job.company}</h5>
                            <h5 className="resume-date">{job.dates}</h5>
                            <ul className="experience-list">
                                {job.description.map(listItem => (
                                    <li>{listItem}</li>))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume;