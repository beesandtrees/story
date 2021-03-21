const SceneArray = {
  scenes: [
    {
      acceptable_items: [4, 5, 6, 10, 15],
      accepted_text: `This is just what I've been looking for. Here is an **AMULET** to help you on your journey.`,
      content: `The old woman will accept any of these items in trade. Click one to make a trade. Inspect inventory to review details.`,
      declined_text: `You're missing out on a valuable item. I wish you luck.`,
      headline: "Make a trade",
      id: "1-amulet",
      links: [
        {
          id: "1-travellers-0",
          link_text:
            "Follow her directions and continue down the path to the right"
        }
      ],
      trade_item: 12,
      type: "trade"
    }
  ]
};

export default SceneArray;
