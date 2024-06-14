import React from "react";
import './loading.css';

const Loading = ({ onStart }) => {
  return (
    <div className="loading-screen">
      <img src="https://goldeneagle.ai/media/media/uploads/docker.gif" alt="Loading..." className="background-gif" />
      <div className="content">
        <h1>Bienvenue</h1>
        <p>Auteur: Level sony</p>
        <a href="https://github.com/votre-projet" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="github-logo" />
        </a>
        <button onClick={onStart} className="start-button">Commencer</button>
      </div>
    </div>
  );
};

export default Loading;
