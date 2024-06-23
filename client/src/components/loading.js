import React from "react";
import './loading.css';

const Loading = ({ onStart }) => {
  return (
    <div className="loading-screen">
      <img src="https://goldeneagle.ai/media/media/uploads/docker.gif" alt="Loading..." className="background-gif" />
      <div className="content">
       
        <button onClick={onStart} className="start-button">Suivant</button>
      </div>
      <footer className="footer">
    
        <a href="https://github.com/sony-level/dockerManager" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="github-logo" />
        </a>
      </footer>
    </div>
  );
};


export default Loading;

