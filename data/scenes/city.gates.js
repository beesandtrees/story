import CONSTANTS from "../constants";
const hut = {
  scenes: [
    {
      id: `1-city-0`,
      headline: "City Gates",
      content:
        "You reach the gates to the city and encounter a guard. He tells you there is no entry without a password",
      links: [
        {
          id: `1-city-1`,
          link_text: "Tell him the password"
        },
        {
          id: `1-city-2`,
          link_text: "Offer him a bribe"
        }
      ]
    },
    {
      answer: "Rutabaga",
      correct: `Yep! That's it! Come on in`,
      incorrect: `Where did you hear that? Get out of here!`,
      id: `1-city-1`,
      headline: `Password`,
      content: `Well what is it?`,
      links: [
        {
          id: `1-city-4`,
          link_text: `Enter ${CONSTANTS.destination}`
        },
        {
          id: `1-city-3`,
          link_text: `Move on`
        }
      ],
      type: "question"
    },
    {
      id: `1-city-2`,
      headline: `Bribe him`,
      content: `What do you take me for, a hoodlum like you? I could lose my job over something like this. Get out of here before I get really mad.\nYou walk away dejected. You'll never get into ${
        CONSTANTS.destination
      } now.`,
      links: null
    },
    {
      id: `1-city-3`,
      headline: `Dang`,
      content: `You walk away dejected. You'll never get into ${
        CONSTANTS.destination
      } now.`,
      links: null
    },
    {
      id: `1-city-4`,
      headline: `Inside the gates`,
      content: `You meet another traveller who directs you to a local merchant where you can sell the ${
        CONSTANTS.macguffin
      }`,
      links: [
        {
          id: `1-merchant-0`,
          link_text: `Find the merchant`
        }
      ]
    }
  ]
};

export default hut;
