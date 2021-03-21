import React, { useState } from "react";
import Links from "./links";

const checkItems = (items, subset) => {
  if (items) {
    if (items.filter(item => subset.includes(item.id)).length > 0) {
      return true;
    }
  }
  return false;
};

export default ({ currentScene, items, setScene }) => {
  const [win, setWin] = useState(false);

  let itemsNeeded = currentScene.itemsNeeded;
  let count = 0;
  let itemsAvailable = itemsNeeded.map(available => {
    if (checkItems(items, available.items)) {
      count++;
      return <p>{available.text}</p>;
    }
    return null;
  });

  if (count >= 2 && !win) {
    setWin(true);
  }

  return (
    <React.Fragment>
      <br />
      <div>{itemsAvailable}</div>
      <br />
      {!!win && <div>{currentScene.success}</div>}
      {win === false && <div>{currentScene.failure}</div>}
      <Links links={currentScene.links} setScene={setScene} />
    </React.Fragment>
  );
};
