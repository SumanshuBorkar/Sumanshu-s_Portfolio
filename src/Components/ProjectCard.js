import React from 'react';
import { Col } from 'react-bootstrap';

function ProjectCard({ title, description, imgUrl, onViewClick }) {
  return (
    <Col sm={6} md={6} lg={4} className="project-card-container">
      <div className="proj-imgbx">
        <img src={imgUrl[0]} alt={title} className="proj-img" />
        <div className="proj-txtx">
          <div className="proj-content">
            <h4>{title}</h4>
            <span>{description}</span>
            <div className="proj-links">
              {/* Changed from <a> to <button> for better semantics */}
              <button onClick={onViewClick} className="proj-btn">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;