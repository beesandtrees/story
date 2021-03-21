// import CONSTANTS from "../constants";
const castlePath = {
  scenes: [
    {
      id: "1-castle-0",
      headline: "At the gate",
      content:
        "You arrive at the castle gate as the sun is setting. As you walk to the gate it swings open and a carriage rumbles out and down the path.",
      links: [
        {
          id: "1-castle-1",
          link_text: "Hurry through the gate"
        }
      ]
    },
    {
      id: "1-castle-1",
      headline: "Inside the courtyard",
      content:
        "You walk to the door of the castle, suddenly afraid to make a sound. You feel like you're being watched. You knock on the door a tall man in a long cloak opens it.",
      links: [
        {
          id: "1-castle-dialogue",
          link_text: "Talk to the man"
        }
      ]
    },
    {
      id: "1-castle-2",
      headline: "In the room",
      content:
        "You get tired very quickly and fall asleep. You wake in the night encircled by wolves, people in robes and the tall man. You think this must be a dream, but you can't seem to wake up. As the people draw closer you pass out from fright. You know you will never leave the castle.",
      links: [null]
    },
    {
      id: "1-castle-3",
      headline: "In the room",
      content:
        "You're tired but feel like you shouldn't fall asleep. This might not have been a good idea. You look around the room and find that in the corner there are piles of gold and jewels. This doesn't make any sense.",
      links: [
        {
          id: "1-castle-denouement",
          link_text: "You hear something"
        }
      ]
    },
    {
      id: "1-castle-denouement",
      headline: "Face the monster",
      content:
        "You hear someone or something appraoching in the corridor. You reach for your bag. What do you have that can help you now?",
      failure:
        "The tall man walks in, laughing. He says, 'You don't have what you need to defeat me.' You know you will never leave the castle alive.",
      itemsNeeded: [
        {
          text: "Use the knife to whittle the walking stick into a spear",
          items: [5, 9]
        },
        {
          text: "Put the crucifix around your neck",
          items: [11]
        },
        {
          text: "Crush the garlic and sprinkle it around you",
          items: [13]
        }
      ],
      links: [null],
      minMatch: 2,
      success:
        "The tall man walks in. You defeat him after a long struggle. You're exhausted but exhilarated. Take the gold and run. You won!",
      type: "withItems"
    },
    {
      id: "1-castle-dialogue",
      headline: "Conversation with the Tall Man",
      type: `dialog`,
      dialog: {
        who: `Tall man`,
        questions: [
          {
            id: 0,
            question: `Good evening. How can I help you?`,
            options: [
              {
                id: 1,
                text: `I'm on a journey to trade a rare object from my village. I thought someone who lives in such a lovely home might be interested.`
              }
            ]
          },
          {
            id: 1,
            question: `Ahhh, how interesting. Please come inside.`,
            options: [
              {
                id: 2,
                text: `Ok great!`
              }
            ]
          },
          {
            id: 2,
            setting: `Inside the castle it's very dark. There are candellabras covered in cobwebs on tables. You see stairs and a long hallway.`,
            question: `Please come in. Can I offer you a drink?`,
            options: [
              {
                id: 3,
                text: `No. Thank you, though!`
              },
              {
                id: 4,
                text: `Oh yes, that would be so lovely`
              }
            ]
          },
          {
            id: 3,
            setting: `The Tall man looks disappointed.`,
            question: `You must be tired. Let me show you to a room. You can take a rest`,
            options: [
              {
                id: `1-castle-3`,
                text: `Follow him`,
                newScene: true
              }
            ]
          },
          {
            id: 4,
            setting: `The Tall pours you a drink. It looks like wine, but it's very thick.`,
            question: `You must be tired. Let me show you to a room. You can take the drink with you`,
            options: [
              {
                id: `1-castle-2`,
                text: `Follow Him`,
                newScene: true
              }
            ]
          }
        ],
        get: function(id) {
          const isMatch = element => element.id.toString() === id.toString();
          return this.questions.find(isMatch);
        }
      }
    }
  ]
};

export default castlePath;
