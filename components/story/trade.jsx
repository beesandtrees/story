import React, { useState } from "react";
import Links from "./links";
import Items from "../items";

export default ({
  activeItem,
  currentScene,
  items,
  links,
  setScene,
  useItem
}) => {
  const [showLinks, setShowLinks] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noTrade, setNoTrade] = useState(false);

  const useIt = id => {
    useItem(id, currentScene.trade_item);
    setAccepted(true);
    setShowLinks(true);
  };

  const makeNoTrade = () => {
    setNoTrade(true);
    setShowLinks(true);
  };

  const acceptableItems = items.filter(item => {
    if (
      !currentScene.acceptable_items ||
      currentScene.acceptable_items.includes(item.id)
    ) {
      return item;
    }
    return null;
  });

  return (
    <div className="wrapper">
      {!showLinks && (
        <Items
          active={activeItem}
          items={acceptableItems}
          theme="inset"
          useItem={useIt}
        />
      )}
      {!showLinks && (
        <button className="decline" onClick={makeNoTrade}>
          Decline Trade
        </button>
      )}
      {accepted && (
        <div>
          <h3>Trade accepted</h3>
          <p>{currentScene.accepted_text}</p>
        </div>
      )}
      {noTrade && (
        <div>
          <h3>Trade declined</h3>
          <p>{currentScene.declined_text}</p>
        </div>
      )}
      {showLinks && <Links links={links} setScene={setScene} />}
      <style jsx>{`
        h1 {
          font-size: 24px;
        }
        .wrapper {
          margin-top: 1rem;
        }
        .decline {
          border: 1px solid black;
          display: block;
          margin: 30px auto;
          padding: 1rem;
          text-align: center;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};
