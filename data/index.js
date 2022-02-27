import travel from "./new-scenes/travel";

const SceneArray = {
  scenes: [
    {
      content: `You wake up Saturday morning feeling groggy. There's an envelope on the bedside table next to you. It has an address on it along with a name. \nYou went to a party with your friend Sarah last night. You started talking to a man in a gray suit. The party was outdoors and not very well lit. He seemed strange and kept turning into the shadows so you couldn't see his face very well, but you kept talking to him hoping to catch a glimpse. \nAfter chatting for half an hour or so he handed you an envelope and told you he would give you $1,000 to deliver it to an office in a building downtown, but you must not look in the envelope or tell anyone who sent you. You laughed and said that seemed excessive - and honestly a little crazy, but then you started to feel woozy. Maybe you shouldn't have let him get the last round?\n Now it's morning and you wonder how you got home.`,
      id: 0,
      links: [
        {
          id: 1,
          link_text: "Open the envelope immediately."
        },
        {
          id: 2,
          link_text: "Get dressed and go deliver the envelope."
        },
        {
          id: 3,
          link_text: "Throw the envelope away."
        }
      ]
    },
    {
      content: `"I am not delivering something if I don't know what's in it!"\nYou carefully unseal the envelope making sure you can seal it back so no one will know you opened it.\nInside are some sort of plans. They look like architectural plans. It doesn't seem like something that would need to be delivered in secret.`,
      id: 1,
      links: [
        {
          id: 4,
          link_text:
            "Take photos of everything inside, then seal it back up and go deliver it."
        },
        {
          id: 5,
          link_text:
            "Stick it in the mail. It'll get there and you don't even have to go anywhere."
        }
      ]
    },
    {
      content:
        "You drive downtown and park in front of the office building. You don't have money for the meter.",
      id: 2,
      links: [
        {
          id: `2a`,
          link_text: "Run in to drop off the envelope anyway."
        },
        {
          id: `2b`,
          link_text: "Ask people walking by for change."
        }
      ]
    },
    {
      content:
        "Back on the beach you see some people walking toward you. It's the Captain from 'The Captain and Tenille' and Jacob Marley. That's weird. They call out a warm greeting as you hear the song begin to play again. You open your eyes in the real world and look at your phone.",
      id: "2a",
      links: [
        {
          id: `2b`,
          link_text: "Hit the snooze again"
        },
        {
          id: `3`,
          link_text: "Turn off your alarm completely. You're awake now."
        }
      ]
    },
    {
      content:
        "Back on the beach you see some figures walking toward you. It's Captain Lou Albano walking Marley the dead dog from that depressing sounding movie. Maybe this is heaven? They call out a warm greeting as you hear the song begin to play again. You open your eyes in the real world and look at your phone.",
      id: "2b",
      links: [
        {
          id: `2c`,
          link_text: "Hit the snooze again (Why?)"
        },
        {
          id: `3`,
          link_text: "Turn off your alarm completely. You're awake now."
        }
      ]
    },
    {
      content:
        "Back on the beach you see some figures walking toward you. It's Lou Grant from 'The Mary Tyler Moore Show' and Marlo Thomas from 'That Girl'. \nAm I in a 70s TV Movie? \nThey call out a warm greeting as you hear the song begin to play again. You open your eyes in the real world and look at your phone.",
      id: "2c",
      links: [
        {
          id: `2`,
          link_text: "Hit the snooze again"
        },
        {
          id: `3`,
          link_text: "Turn off your alarm completely. You're awake now."
        }
      ]
    },
    {
      content:
        "On the beach, once again, you see some people walking toward you. It's Tenille from the 'Captain and Tenille' and Blackbeard from the 'Queen Anne's Revenge'. They call out a warm greeting as you wonder where they came from. There aren't any houses around here.\nA piercing alarm starts to sound. It's like an air rade. Tenille hides behind Blackbeard and they both crouch sheilding their heads with their hands. You do the same, but the ground shakes and you trip. There's a huge crash. It feels like you've been hit. A bomb? \nYou open your eyes to survey the damage. Your phone is ringing and you're laying on the floor with half the contents of your bedside table.",
      id: 3,
      links: [
        {
          id: `travel-1`,
          link_text: "It's work. Avoid the call. You already know you're late."
        },
        {
          id: `travel-2`,
          link_text:
            "It's work. Turn your phone off completely. Maybe they'll think you're underground somewhere."
        }
      ]
    },
    ...travel.scenes
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
