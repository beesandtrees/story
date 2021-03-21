import CONSTANTS from "./constants";

const ItemArray = {
  items: [
    {
      id: 0,
      item_name: "Travel Bag",
      notes: "Medium travel bag with pockets. Will hold various items",
      qty: 1,
      rarity: 2,
      init: true
    },
    {
      id: 1,
      item_name: "Bread",
      notes: "A loaf of bread",
      qty: 1,
      rarity: 1,
      init: true
    },
    {
      id: 2,
      item_name: "Cheese",
      notes: "Small block of cheddar. Enough to last 3-4 days.",
      qty: 1,
      rarity: 1,
      init: true
    },
    {
      id: 3,
      item_name: "Sausage",
      notes: "Spicy sausage",
      qty: 2,
      rarity: 2,
      init: true
    },
    {
      id: 4,
      item_name: "Lucky Coin",
      notes: `Its worth is more than its value.`,
      qty: 1,
      rarity: 3,
      init: true
    },
    {
      id: 5,
      item_name: "Pocket Knife",
      notes: "Pocket knife with one blade. Fairly sharp. Be careful with it!",
      qty: 1,
      rarity: 3,
      init: true
    },
    {
      id: 6,
      item_name: CONSTANTS.macguffin,
      notes:
        "Item of great value given to you by your village elders to trade.",
      qty: 1,
      rarity: 10,
      init: true
    },
    {
      id: 7,
      item_name: "Water in Flask",
      notes:
        "Leather corked bottle with strap to hold enough water for a day or 2.",
      qty: 1,
      rarity: 3,
      init: true
    },
    {
      id: 8,
      item_name: "Blanket",
      notes: "Warm blanket for camping under the stars",
      qty: 1,
      rarity: 3,
      init: true
    },
    {
      id: 9,
      item_name: "Walking Stick",
      notes:
        "Solid wood stick, made from the limb of a tree from your home village. About 4 feet in length.",
      qty: 1,
      rarity: 2,
      init: true
    },
    {
      id: 10,
      item_name: "Matches",
      notes: `Round metal tube with cap to hold matches.`,
      qty: 1,
      rarity: 3,
      init: true
    },
    {
      id: 11,
      item_name: "Crucifix",
      notes: "Wooden crucifix with silver metal figure and chain",
      qty: 1,
      rarity: 5
    },
    {
      id: 12,
      item_name: "Amulet",
      notes: `Multi-color amulet of unknown origin and powers. Hangs from a thin gold chain.`,
      qty: 1,
      rarity: 9
    },
    {
      id: 13,
      item_name: "Garlic",
      notes: `Garlic is a strong-smelling, pungent-tasting herb. It eases the symptoms of common cold, lowers blood pressure, and can be used to ward off certain villains.`,
      qty: 1,
      rarity: 3
    },
    {
      id: 15,
      item_name: "Handkerchief",
      notes:
        "Handkerchief given to you by your grandmother before you left on the trip.",
      qty: 1,
      init: true,
      rarity: 2
    }
  ],
  all: function() {
    return this.items;
  },
  get: function(id) {
    const isMatch = element => element.id.toString() === id.toString();
    return this.items.find(isMatch);
  },
  init: function() {
    const isMatch = element => element.init;
    return this.items.filter(isMatch);
  }
};

export default ItemArray;
