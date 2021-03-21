import CONSTANTS from "../constants";
const merchant = {
  scenes: [
    {
      id: `1-merchant-0`,
      headline: `Arrive at the Shop`,
      content: `You enter the merchant's shop and see an old man with tiny spectacles. He's leaning over a counter inspecting a small item you can't see.`,
      links: [
        {
          id: `1-merchant-1`,
          link_text: `Go talk to him`
        }
      ]
    },
    {
      id: `1-merchant-FINAL`,
      headline: `Outside the city gates`,
      content: `You can't believe you sold the ${
        CONSTANTS.macguffin
      } for so little. You hope it will be enough to get the village through the winter, but you're not sure. You start for home feeling drained and wishing they'd sent someone else to do this job.`,
      links: null
    },
    {
      id: `1-merchant-FINAL-WIN`,
      headline: `Outside the city gates`,
      content: `You can't believe you sold the ${
        CONSTANTS.macguffin
      } for so much. You know it will be enough to get the village through the winter, and even longer. You start for home feeling exhilarated!`,
      links: null
    },
    {
      id: `1-merchant-1`,
      headline: `Talk to the Merchant`,
      type: `dialog`,
      dialog: {
        who: `Merchant`,
        questions: [
          {
            id: 0,
            setting:
              "The shop is packed full of trinkets and treasures. You are overwhelmed by the variety and think that the contents of the store would keep your village afloat for many years.",
            question: `Welcome to my shop how can I help you?`,
            options: [
              {
                id: 1,
                text: `I've come from afar to sell an item of great value. Can you tell me how much you can offer me for this ${
                  CONSTANTS.macguffin
                }?`
              }
            ]
          },
          {
            id: 1,
            question: `Oh yes of course. please bring it over. \n--\n Hmmmm, yes I think I've seen one of these before. In fact I'm sure I've seen quite a few.\nCommon thing really.\nI could offer you...\nSOME SMALL AMOUNT`,
            options: [
              {
                id: 2,
                text: `Oh dear, are you sure? It's been in the hands of the village elders for generations. I know we're not from a big city like this, but surely you could do a bit better.`
              }
            ]
          },
          {
            id: 2,
            question: `I'm sorry, that's my final offer unless you have something else to trade.`,
            options: [
              {
                required: 12,
                id: 3,
                text: `Take out the amulet`
              },
              {
                exclude: 12,
                id: 4,
                text: `Offer to trade something from your napsack`
              }
            ]
          },
          {
            id: 3,
            setting: `As you take the amulet from your bag the room seems to get brighter. It seems the sun has come out from behind a cloud. The little man's face is bathed in light. He blinks several times before speaking again.`,
            question: `What have you got there? I feel a little funny. How much did I say I would give you for the ${
              CONSTANTS.macguffin
            }?`,
            options: [
              {
                id: 5,
                text: `A SMALL AMOUNT`
              }
            ]
          },
          {
            id: 5,
            question: `Oh dear me, I must have been mistaken. It's worth 100 times that amount.\nWhat am I saying?\n Oh dear. Why did I tell you that?\n\nWill you accept my offer?`,
            options: [
              {
                id: 6,
                text: `For 100 times the amount? Yes of course! Oh thank you sir!! You have saved my village with your honesty`
              }
            ]
          },
          {
            id: 6,
            setting: `The dazed man waves you away as he hands you the money.`,
            question: `Yes, my honesty, of course. I'm always very honest. I must have just mispoken before.`,
            options: [
              {
                id: `1-merchant-FINAL-WIN`,
                text: "Leave the shop",
                newScene: true
              }
            ]
          },
          {
            id: 4,
            question: `Is this all you've got? No, I don't want any of that junk.\nAll I can give you is A SMALL AMOUNT.`,
            options: [
              {
                id: "1-merchant-FINAL",
                text: `Ok, I guess I'll take it.`,
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

export default merchant;
