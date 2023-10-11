import React, { useEffect, useState } from 'react';
import styles from "./ProjectCard.module.css"
import { ProjectHeadline } from './ProjectHeadline';

export const ProjectCard = ({ repo }) => {

  return (
    <div className="projectWrapper">
      <div className='projectContainer'>
        <img src="" />
        <div className="projectDescription">
          <ProjectHeadline repo={repo} />
          <div className="projectDescription">
            <p>{repo.description}</p>
          </div>
          <div className="project-tags"></div>
          <div className="project-buttons"><button>test</button></div>
        </div>
      </div>
    </div>
  );
};
