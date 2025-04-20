module.exports = {
  config: {
    name: "emotion",
    aliases: ["feel"],
    description: "Emotion er reply dey",
    usage: "",
    cooldown: 3,
  },
  run: async ({ api, event, args }) => {
    const input = args.join(" ").toLowerCase();

    if (input.includes("dukho") || input.includes("broken")) {
      return api.sendMessage("Tui ekta strong soul. Sab thik hoye jabe, ami achi.", event.threadID);
    } else if (input.includes("bhalobashi") || input.includes("love")) {
      return api.sendMessage("Bunny bolche: Ami o bhalobashi tomake!", event.threadID);
    } else if (input.includes("prem") || input.includes("valobasha")) {
      return api.sendMessage("Prem ekta misti osudh... kintu overdose e chotto golpo hoye jai.", event.threadID);
    } else {
      return api.sendMessage("Ami bujhte parini, abar bolo?", event.threadID);
    }
  },
};
