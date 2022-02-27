import React, { useState } from "react";

const Question = ({ currentScene, links, setScene }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [nextLink, setNextLink] = useState(0);
  const [finalText, setfinalText] = useState(null);

  function handleChange(evt) {
    const value = evt.target.value;
    if (value.length >= currentScene.answer.length) {
      if (value.toLowerCase() === currentScene.answer.toLowerCase()) {
        setShowLinks(true);
        setfinalText(currentScene.correct);
      } else {
        setNextLink(1);
        setfinalText(currentScene.incorrect);
      }
    }
  }
  return (
    <React.Fragment>
      <input onChange={handleChange} type="text" />
      {showLinks && (
        <div>
          <p>{finalText}</p>
          <button onClick={() => setScene(links[nextLink].id)}>
            {links[nextLink].link_text}
          </button>
        </div>
      )}
      <style jsx>{`
        h1 {
          font-size: 24px;
        }
        input {
          margin-bottom: 1rem;
          padding: 4px;
          width: 220px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Question;
