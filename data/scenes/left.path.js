import CONSTANTS from "../constants";
const leftPath = {
  scenes: [
    {
      id: `1-left-0`,
      headline: "The path on the left",
      content:
        "The slight grade quickly turns into a steep grade. The trees along the path begin to get denser until you are in a thick forest. It's long past noon and you haven't eaten yet.\n\nYou see a small clearing through the trees that looks like a perfect lunch spot.",
      links: [
        {
          id: `1-left-1`,
          link_text: "Stay on the path and eat by the road"
        },
        {
          id: `1-left-2`,
          link_text: "Go check out the clearing"
        }
      ]
    },
    {
      id: `1-left-1`,
      headline: "Have a quick bite",
      content:
        "You were warned to never leave the path. You feel like you made the responsible decision.",
      links: [
        {
          id: `1-left-3`,
          link_text: "Time to keep going!"
        }
      ]
    },
    {
      id: `1-left-2`,
      headline: "In the Clearing",
      content:
        "You step into the clearing. There's a tiny stream and next to it a honeysuckle bush with something glittering underneath it.\n\nYou kneel to pick up the glittering object. It's a small crucifix. You put it in your pouch.",
      item: 11,
      links: [
        {
          id: `1-left-3`,
          link_text: "Finish lunch and get back on the path"
        }
      ],
      type: "acquire"
    },
    {
      id: `1-left-3`,
      headline: "The path at the crooked fork",
      content: `You notice a smaller path that twists up towards a castle. Maybe the people there would be interested in the ${
        CONSTANTS.macguffin
      }`,
      links: [
        {
          id: `1-castle-0`,
          link_text: "Continue on to the castle"
        },
        {
          id: `1-left-4`,
          link_text: "Continue on and look for a town"
        }
      ]
    },
    {
      id: `1-left-4`,
      headline: "You continue walking",
      content:
        "You follow the path into a valley and you are soon at a village even smaller than your own. The villagers say there is a castle nearby, but warn you from going there.\n\nIt's already getting dark and the city you wanted to reach is 2 days journey further. This wasn't the right path and now you'll have to cross the mountains to get to it. Maybe the castle would be your best bet.\n\nYou decide to wait til morning and then...",
      links: [
        {
          id: `1-left-5`,
          link_text: "Go to the Castle"
        },
        {
          id: `1-left-6`,
          link_text: "Go to through the Mountains to the City"
        }
      ]
    },
    {
      acceptable_items: [0, 2, 4, 8, 15],
      accepted_text: `God be with you! Be safe!`,
      content: `The town's people warn you to trade for supplies before you go to the castle. They will trade for a bunch of garlic and offer to bless you water. Select an item from your inventory to trade for the garlic.`,
      headline: "Get supplies for your travels",
      id: "1-left-5",
      links: [
        {
          id: "1-castle-0",
          link_text: "Leave and go to the castle"
        }
      ],
      trade_item: 13,
      type: "trade"
    },
    {
      acceptable_items: [0, 2, 4, 8, 15],
      accepted_text: `God be with you! Here are some Be safe!`,
      content: `You will need more food for your extended trip. Trade for added supplies`,
      headline: "Get supplies for your travels",
      id: "1-left-6",
      links: [
        {
          id: "1-mountain-pass-0",
          link_text: "Head across the mountain to the city"
        }
      ],
      trade_item: 1,
      type: "trade"
    }
  ]
};

export default leftPath;
