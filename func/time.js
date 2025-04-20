module.exports = {
  config: {
    name: "time",
    description: "Show current time & date",
    usage: "time",
    cooldown: 5,
  },
  run: async ({ api, event }) => {
    const date = new Date();
    const options = { timeZone: "Asia/Dhaka", hour12: true };
    const time = date.toLocaleTimeString("en-US", options);
    const day = date.toLocaleDateString("en-GB");
    return api.sendMessage(`⏰ Date: ${day}\n🕒 Time: ${time}`, event.threadID);
  }
};
