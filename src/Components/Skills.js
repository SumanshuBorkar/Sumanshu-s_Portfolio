import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import images
import image1 from './../assets/img/reactjs-icon.svg';
import image2 from './../assets/img/nodejs-icon.svg';
import image3 from './../assets/img/mongodb-icon.svg';
import image4 from './../assets/img/expressjs-icon.svg';
import image5 from './../assets/img/css-icon.svg';
import image6 from './../assets/img/HTML.svg';
import image7 from './../assets/img/getbootstrap-icon.svg';
import image8 from './../assets/img/angular-icon.svg';
import image9 from './../assets/img/typescript.svg';
import figma from './../assets/img/figma-icon.svg';
import pyhton from '../assets/img/python-5.svg';
import javascript from '../assets/img/Javascript.svg'
import docker from '../assets/img/docker.svg';
import aws from '../assets/img/aws.svg';
import next from './../assets/img/next-js.svg';
import postgress from '../assets/img/postgresql.svg';
import Github from '../assets/img/Github-Icon.svg';
import fastAPI from '../assets/img/fastapi-icon.svg';
import NPM from '../assets/img/npm-icon.svg';
import sass from '../assets/img/sass-icon.svg';
import tailwind from '../assets/img/tailwind-icon.svg';
import jest from '../assets/img/jest-icon.svg';
import redis from '../assets/img/redis-icon.svg';
import Gulp from '../assets/img/gulp-icon.svg';
import Gemini from '../assets/img/gemini-icon.svg';
import deepseek from '../assets/img/deepseek-icon.svg';
import OpenAI from '../assets/img/openai-lcon.svg';
import claude from '../assets/img/claude-icon.svg';
import grok from '../assets/img/grok-icon.svg';
import langChain from '../assets/img/langchain-icon.svg'
import shadCN from "../assets/img/shadcn-ui_icon.svg";
import redux from "../assets/img/redux-icon.svg";
import threeJs from "../assets/img/threejs-light-icon.svg";
import JWT from "../assets/img/jwt-icon.svg";
import socketIO from "../assets/img/socketio-wordmark-dark.svg";
import AntDesing from "../assets/img/ant-design-dark-theme.svg";
import MUI from "../assets/img/material-ui-icon.svg";
import Storybook from "../assets/img/storybook-icon.svg";

function Skills() {
    // Array for cleaner rendering
    const skills = [
        { img: image6, name: "HTML" },
        { img: image5, name: "CSS" },
        { img: sass, name: "Sass"},
        { img: tailwind, name: "Tailwind"},
        { img: Gulp, name: "Gulp"},
        { img: javascript, name: "JavaScript"},
        { img: NPM, name: "NPM"},
        { img: image9, name: "TypeScript" },
        { img: image1, name: "React" },
        { img: next, name: "Next.js" },
        { img: image8, name: "Angular" },
        { img: image7, name: "Bootstrap" },
        { img: MUI, name: "Material UI"},
        { img: AntDesing, name: "Ant Design"},
        { img: shadCN, name: "Shadcn" },
        { img: redux, name: "redux" },
        { img: threeJs, name: "Three js" },
        { img: jest, name: "Jest"},
        { img: Storybook, name: "Storybook"},
        { img: figma, name: "Figma" },
        { img: image2, name: "Node.js" },
        { img: image4, name: "Express.js" },
        { img: pyhton, name: "Python" },
        { img: fastAPI, name: "fast API"},
        { img: image3, name: "MongoDB" },
        { img: postgress, name: "Postgress"},
        { img: Github, name: "Github"},
        { img: docker, name: "Docker"},
        { img: aws, name: "AWS"},
        { img: redis, name: "Redis"},
        { img: JWT, name: "JWT"},
        { img: socketIO, name: "Socket IO"},
        { img: Gemini, name: "Gemini API"},
        { img: deepseek, name: "Deepseek API"},
        { img: OpenAI, name: "Open AI API"},
        { img: grok, name: "Grok SDK"},
        { img: claude, name: "Claude API"},
        { img: langChain, name: "Lang Chain"},


    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>I am a passionate web developer eager to learn new tech.<br/>I am well versed in M.E.R.N. stack.</p>
                            
                            <Carousel 
                                responsive={responsive} 
                                infinite={true} 
                                autoPlay={true}
                                autoPlaySpeed={1200}
                                customTransition="all 0.5s linear"
                                containerClass="skill-slider-container"
                                itemClass="skill-item-padding"
                                className="owl-carousel owl-theme skill-slider"
                            >
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <div className="icon-box">
                                            <img src={skill.img} alt={skill.name} />
                                        </div>
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;