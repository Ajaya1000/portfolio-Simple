import React from 'react';

const Project = ({ img, alt, desc, isWorkOnProgress, link }) => (
  <div className="project">
    <img src={img} alt={alt} />
    <div className="caption">
      <p>
        {desc.split('\n').map((item, index) => (
          <React.Fragment key={index}>
            {item}
            <br />
          </React.Fragment>
        ))}
      </p>
      <a
        className={isWorkOnProgress ? 'wop' : 'cv'}
        target={isWorkOnProgress ? '_self' : '_blank'}
        rel="noopener noreferrer"
        href={link}
      >
        {isWorkOnProgress ? 'Work On Progress' : ' Visit Website'}
      </a>
    </div>
  </div>
);
export default Project;
