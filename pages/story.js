import React, { useEffect, useState } from "react";
import StoryLayout from "./components/layouts/story-layout";
import Content from "./components/story/content";
import Items from "./components/items";
import Item from "./components/item-details";

import SceneArray from "../data/story";
import Inventory from "../data/items";

export default () => {
  const [activeItem, setItem] = useState(0);
  const [scene, setScene] = useState(0);
  const [currentInventory, setInventory] = useState(null);
  const [detailsModal, setOpen] = useState(false);

  const currentScene = SceneArray.get(scene);
  const currentItem = Inventory.get(activeItem);

  useEffect(() => {
    if (!currentInventory) {
      setInventory(Inventory.init());
    }
  }, [currentInventory, setInventory]);

  const acquireItem = (id) => {
    const addItem = Inventory.get(id);
    if (currentInventory.filter((x) => x.id === id).length === 0) {
      setInventory([...currentInventory, addItem]);
      setItem(id);
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = (id) => {
    setItem(id);
    setOpen(true);
  };

  const tradeItem = (remove, add) => {
    if (remove === add) {
      console.log(remove, add);
    } else {
      const addItem = Inventory.get(add);
      const updatedInventory = currentInventory.filter((x) => x.id !== remove);
      setInventory([...updatedInventory, addItem]);
      setItem(add);
    }
  };

  return (
    <StoryLayout title="Story">
      <Content
        activeItem={activeItem}
        acquireItem={acquireItem}
        currentScene={currentScene}
        items={currentInventory}
        setScene={setScene}
        useItem={tradeItem}
      />
      <Items
        activeItem={activeItem}
        items={currentInventory}
        theme="drawer"
        useItem={openModal}
      />
      <Item item={currentItem} open={detailsModal} closeModal={closeModal} />
    </StoryLayout>
  );
};
