import CONSTANTS from "../constants";
const hut = {
  scenes: [
    {
      id: `1-hut-0`,
      headline: `Knock on the Door`,
      content: `You walk over to the hut and tap on the door. You think you hear someone stirring inside. The door creaks open and a shrivelled old lady peaks out at you.`,
      links: [
        {
          id: `1-hut-1`,
          link_text: `Continue`
        }
      ]
    },
    {
      id: `1-hut-FINAL`,
      headline: `The room fades`,
      content: `You wake up by the fork in the road. All of your items are gone. You have no choice but to walk back to your village in failure.`,
      links: null
    },
    {
      id: `1-hut-1`,
      headline: `Talk to the old lady`,
      type: `dialog`,
      dialog: {
        who: `Old lady`,
        questions: [
          {
            id: 0,
            question: `Hello, my dear, you look lost. Why don't you come in and have a cup of tea?`,
            options: [
              {
                id: 1,
                text: `I'd hate to trouble you. I just wanted to ask for directions.`
              },
              {
                id: 2,
                text: `Thank you. That would be nice.`
              }
            ]
          },
          {
            id: 1,
            question: `It's no trouble at all. Please come in.`,
            options: [
              {
                id: 2,
                text: `Ok sure! Thanks.`
              },
              {
                id: 3,
                text: `I'm really not thirsty right now. I'm in a hurry to reach ${
                  CONSTANTS.destination
                }`
              }
            ]
          },
          {
            id: 2,
            setting: `Inside the hut is even darker and more run down than it seemed from outside. You see spiders building webs in every corner.`,
            question: `It's so nice to have a guest. I can't remember the last time I had a visitor. Would you like sugar in your tea? How about a nice cookie?`,
            options: [
              {
                id: 7,
                text: `No. Just the tea.`
              },
              {
                id: 5,
                text: `No sugar, thank you! But, I'd love a cookie. I must admit I was getting pretty hungry.`
              }
            ]
          },
          {
            id: 7,
            setting: `The Witch draws closer. You begin to feel woozy. What was in that tea?`,
            question: `If a witch offers you a cookie, it's polite to accept it.`,
            options: [
              {
                id: `1-hut-FINAL`,
                text: `Continue`,
                newScene: true
              }
            ]
          },
          {
            id: 5,
            setting: `The old lady hands you your tea and a small cookie. You sit and chat for a while. The cookie is delicious, and the tea makes you feel warm and comfortable.`,
            question: `Now my dear, I'll tell you how to get to ${
              CONSTANTS.destination
            }.\nI also have a small trinket to help you on your journey... if you'd like to make a trade.`,
            options: [
              {
                id: "1-amulet",
                text: `Agree to a trade.`,
                newScene: true
              },
              {
                id: "1-travellers-0",
                text: `Say no to the trade and thank her for the directions.`,
                newScene: true
              }
            ]
          },
          {
            id: 3,
            setting: `The Old Witch slams the door in your face.`,
            question: `That's not very polite. Why should I help you? I'm not in the habit of helping rude strangers. Next time you meet a witch, remember to be more polite!`,
            options: [
              {
                id: `1-right-0`,
                text: "Take the path on the right",
                newScene: true
              },
              {
                id: `1-left-0`,
                text: "Take the path on the left",
                newScene: true
              },
              {
                id: 2,
                text: "Flip a coin to choose a path",
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

export default hut;
