import travel from "./new-scenes/travel";

const SceneArray = {
  scenes: [
    {
      content: `You're walking on the beach. You're completely alone. It's warm and pleasant. You hear a song drifting toward you on the breeze. A sea shanty of sorts? Reggae? But it sounds sort of electronic. What is this? Where is it coming from? Something is wrapped around your legs. Seaweed? What is going on?`,
      id: 0,
      links: [
        {
          id: 1,
          link_text: "Look down"
        }
      ]
    },
    {
      content: `You blink a few times. Your legs are wrapped in your sheets. You wonder not for the first time why you chose 'By The Seaside' as your alarm.`,
      id: 1,
      links: [
        {
          id: `2`,
          link_text: "Hit the snooze"
        },
        {
          id: `3`,
          link_text: "Turn off your alarm completely. You're awake now."
        }
      ]
    },
    {
      content:
        "Back on the beach you see some people walking toward you. It's the Sea Captain from 'The Simpsons' and Bob Marley. They call out a warm greeting as you hear the song begin to play again. You open your eyes in the real world and look at your phone.",
      id: 2,
      links: [
        {
          id: `2a`,
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
