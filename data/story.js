import CONSTANTS from "./constants";
import amuletTrade from "./scenes/amulet";
import castle from "./scenes/castle.path";
import cityGates from "./scenes/city.gates";
import hutPath from "./scenes/witches.hut";
import leftPath from "./scenes/left.path";
import merchant from "./scenes/merchant";
import mountainPass from "./scenes/mountain.pass";
import otherTravellers from "./scenes/other.travellers";

const SceneArray = {
  scenes: [
    {
      content: `You've been walking all morning along the path that leads away from your village. You have a few small items and a bundle of food to last 4 days. You also have the ${CONSTANTS.macguffin} to trade.`,
      id: 0,
      links: [
        {
          id: 1,
          link_text: "Look around"
        }
      ]
    },
    {
      content: `Ahead you see a fork in the road, but the sign has fallen. It's impossible to tell which way leads to your destination.\nNear the path on the left you see a small hut. It looks run-down and deserted. If someone lives there they may know which direction to take. But what kind of person would live in such a spooky little shack?`,
      id: 1,
      links: [
        {
          id: `1-hut-0`,
          link_text: "Go to the Hut and ask directions"
        },
        {
          id: `1-travellers-0`,
          link_text: "Take the path on the right"
        },
        {
          id: `1-left-0`,
          link_text: "Take the path on the left"
        },
        {
          id: 2,
          link_text: "Flip a coin to choose a path"
        }
      ]
    },
    {
      content: "You flip a coin and it lands on heads. You...",
      id: 2,
      links: [
        {
          id: `1-travellers-0`,
          link_text: "Take the path on the right"
        },
        {
          id: `1-left-0`,
          link_text: "Take the path on the left"
        }
      ],
      type: "random"
    },
    ...amuletTrade.scenes,
    ...castle.scenes,
    ...cityGates.scenes,
    ...hutPath.scenes,
    ...leftPath.scenes,
    ...merchant.scenes,
    ...mountainPass.scenes,
    ...otherTravellers.scenes
  ],
  all: function () {
    return this.scenes;
  },
  get: function (id) {
    const isMatch = (element) => element.id.toString() === id.toString();
    return this.scenes.find(isMatch);
  }
};

export default SceneArray;
