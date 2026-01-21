import React, { useState } from 'react'; // Added useState
import { Container, Row, Col, Nav, Tab, Modal, Carousel } from 'react-bootstrap'; // Added Modal
import ProjectCard from './ProjectCard';
import img1 from './../assets/img/Resume.png';
import img3 from './../assets/img/Flub.png';
// import img4 from "./../assets/img/Vegi.png";
// import img5 from "./../assets/img/PDFProcessor.jpg";
import python from '../assets/img/fastapi-icon.svg';

function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { title: 'Resume', description: "resume", imgUrl: [img1], redirect: 'https://drive.google.com/...' },
    { title: 'Real Time Healthcare Translation app', description: 'AI powered translation', descriptionlong: `This is a real-time medical translation web app that breaks down language barriers in healthcare settings. Built with React and powered by Groq's LLaMA 3.3 AI model, it lets doctors and patients communicate instantly through voice. Just speak in your language, and it translates medical conversations in real-time with proper terminology. The app uses Web Speech API for voice recognition and text-to-speech, while the Node.js backend handles AI-powered translations. It's designed with security in mind—rate limiting, CORS protection, and no data storage. Perfect for multilingual clinics where quick, accurate communication can literally save lives.`, imgUrl: ['https://res.cloudinary.com/dxs2abkug/image/upload/v1768934875/Screenshot_2026-01-21_001344_k6ftr8.png', 'https://res.cloudinary.com/dxs2abkug/image/upload/v1768934875/Screenshot_2026-01-21_001258_d6iis9.png', 'https://res.cloudinary.com/dxs2abkug/image/upload/v1768934874/Screenshot_2026-01-21_001507_ugbafe.png', 'https://res.cloudinary.com/dxs2abkug/image/upload/v1768934874/Screenshot_2026-01-21_001639_dj7cqy.png'], redirectToDocs: 'https://github.com/SumanshuBorkar/Healthcare-Translation-Web-App-with-Generative-AI---Frontend/blob/main/README.md', redirectToGithub:'https://github.com/SumanshuBorkar/Healthcare-Translation-Web-App-with-Generative-AI---Frontend', redirectToLiveApp:'https://healthcare-translation-web-app-with-six.vercel.app/' },
    { title: 'Casual Conversation with AI Avatar', description: 'HeyGen realistic AI avatars', descriptionlong: `This interactive web app lets you have natural, casual conversations with Jane Smith, an AI-powered avatar who acts like a friendly coworker at the water cooler. Built with React and LiveAvatar's technology, it supports both text and voice chat with real-time lip-sync and natural language processing. The backend uses Node.js/Express to manage sessions with LiveAvatar's API, while LiveKit handles the real-time video/audio streaming. Users can type messages or use push-to-talk and continuous voice modes for a realistic conversational experience. Perfect for practicing casual workplace chats or just having a friendly conversation with a virtual colleague.`, imgUrl: ['https://res.cloudinary.com/dxs2abkug/image/upload/v1768940629/Screenshot_2026-01-11_230208_sngblr.png'], redirectToLiveApp: 'https://ai-avatar-frontend-pi.vercel.app/', redirectToGithub: 'https://github.com/SumanshuBorkar/AI-Avatar-Frontend', redirectToDocs: 'https://github.com/SumanshuBorkar/AI-Avatar-Frontend/blob/main/README.md' },
    { title: 'Web Scraper', description: 'Python fast API web scraping tool', imgUrl: [python], redirect: 'https://ai-recipt...' },
    { title: 'Car Rental App', description: 'M.E.R.N Project', descriptionlong : `Lore Ipsum.`, imgUrl: ["https://res.cloudinary.com/dxs2abkug/image/upload/v1768922426/Screenshot_2026-01-20_204034_qbafo5.png", "https://res.cloudinary.com/dxs2abkug/image/upload/v1768922445/Screenshot_2026-01-20_204159_v1x4mu.png", "https://res.cloudinary.com/dxs2abkug/image/upload/v1768922422/Screenshot_2026-01-20_204256_sebraq.png", "https://res.cloudinary.com/dxs2abkug/image/upload/v1768922422/Screenshot_2026-01-20_204356_n7biou.png", "https://res.cloudinary.com/dxs2abkug/image/upload/v1768922421/Screenshot_2026-01-20_204333_v5xwoa.png", "https://res.cloudinary.com/dxs2abkug/image/upload/v1768922421/Screenshot_2026-01-20_204843_ypziow.png"], redirect: 'https://car-rental...' },
    { title: 'Flub', description: 'Social Media App', imgUrl: [img3], redirect: 'https://flub-fontend...' },
    // { title: 'Vegi Store', description: 'E-Commerce', imgUrl: [img4], redirect: 'https://vegi-store...' },
    // { title: 'AI-Recipt-Processor', description: 'Full-stack PDF Analysis', imgUrl: [img5], redirect: 'https://ai-recipt...' },

  ];

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const itemsPerPage = 6;
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += itemsPerPage) {
    projectChunks.push(projects.slice(i, i + itemsPerPage));
  }

  return (
    <section className="project" id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <div className="project-header">
              <h2>Projects & Docs</h2>
              <p>A collection of my recent works.</p>
            </div>

            <Tab.Container id="projects-tabs" defaultActiveKey="page-0">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                {projectChunks.map((_, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={`page-${index}`}>Tab {index + 1}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content>
                {projectChunks.map((chunk, index) => (
                  <Tab.Pane eventKey={`page-${index}`} key={index}>
                    <Row className="gy-4">
                      {chunk.map((project, idx) => (
                        <ProjectCard
                          key={idx}
                          {...project}
                          onViewClick={() => handleShowModal(project)} // Passing function to card
                        />
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      {/* --- PROJECT MODAL --- */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg" className="project-modal">
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='project-Modal-body'>
              {/* Added Carousel for multiple images */}
              <Carousel interval={null} indicators={true} className="modal-carousel">
                {selectedProject.imgUrl.map((url, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-img-container">
                      <img
                        src={url}
                        alt={`${selectedProject.title} slide ${index}`}
                        className="d-block w-100 modal-project-img"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              <p className="modal-description">{selectedProject.descriptionlong}</p>

              <div className="modal-info mt-4 d-flex gap-2">
                <a href={selectedProject.redirectToLiveApp} target="_blank" rel="noreferrer" className="vvd-modal-btn">
                  Live App
                </a>
                <a href={selectedProject.redirectToGithub} target="_blank" rel="noreferrer" className="vvd-modal-btn">
                  Github
                </a>
                <a href={selectedProject.redirectToDocs} target="_blank" rel="noreferrer" className="vvd-modal-btn">
                  Docs
                </a>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
}

export default Project;