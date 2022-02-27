import React, { useEffect, useState } from "react";

const RandomLink = ({ links, setScene }) => {
  const [selectedScene, selectScene] = useState({
    scene: null,
    link_text: null
  });

  useEffect(() => {
    if (selectedScene.scene === null) {
      console.log(selectedScene);
      const link = links[Math.floor(Math.random() * links.length)];
      selectScene({
        scene: link ? link.id : 0,
        link_text: link ? link.link_text : "Start Over"
      });
    }
  }, [links, selectedScene, selectScene]);

  return (
    <React.Fragment>
      <button onClick={() => setScene(selectedScene.scene || 0)}>
        {selectedScene.link_text}
      </button>
      <style jsx>{`
        h1 {
          font-size: 24px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default RandomLink;
