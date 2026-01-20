import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Make sure to replace this with your actual image path!
import profileImg from '../assets/img/Sumanshu.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="align-items-center justify-content-between">
          {/* Left Side: Image */}
          <Col xs={12} md={5} lg={5} className="mb-5 mb-md-0">
            <div className="about-img-wrapper animate-float">
              <img src={profileImg} alt="Profile" className="img-fluid" />
              <div className="about-shape"></div>
            </div>
          </Col>

          {/* Right Side: Text Content */}
          <Col xs={12} md={7} lg={6} className="about-content-wrapper">
            <div className="section-tagline">Let me introduce myself</div>
            <h2 className="section-title">About <span className="highlight-text">Me</span></h2>

            <p className="about-para main-para">
            I’m a Full Stack Software Engineer with 2+ years of experience building fast, scalable, and user-focused products in startup environments. I work end-to-end across modern JavaScript and TypeScript stacks, crafting responsive front ends with React, Angular, and Vue.js, and powering them with robust backends using Node.js, NestJS, Express, and FastAPI.
            </p>

            <p className="about-para">
            I have hands-on experience integrating AI-driven features such as AI-powered applications, RAG systems, AI avatars, NLP and chatbots, turning complex ideas into production-ready solutions.

Comfortable wearing multiple hats, I thrive in fast-paced teams, adapt quickly to change, and take ownership from concept to deployment—focused on building products that scale and deliver real business value.
            </p>


            {/* Optional: Quick Highlight bullets */}
            <div className="about-highlights">
              <Row>
                <Col sm={6}>
                  <ul className="highlight-list">
                    <li>⚡ Solved 150+ DSA problems</li>
                    <li>⚡ Strong Fundamentals</li>
                    <li>⚡ Good Communication skills</li>
                    <li>⚡ 2+ yrs of hands-on experience</li>
                    <li>⚡ System Design basics</li>

                  </ul>
                </Col>
                <Col sm={6}>
                  <ul className="highlight-list">
                    <li>⚡ Built 30+ projects across stacks</li>
                    <li>⚡ Continuous Learner</li>
                    <li>⚡ Team Player</li>
                    <li>⚡ Database knowledge</li>
                    <li>⚡ Full stack developer</li>
                  </ul>
                </Col>
              </Row>
            </div>

            <a href='https://drive.google.com/file/d/1pUjGhAeAs2yvRPEA576ZW1GdO-E1UQHA/view?usp=sharing'>
            <button className="vvd mt-4" onClick={() => console.log('Download CV')}>
              <span>Download CV</span>
            </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;