module.exports = {
  config: {
    name: "time",
    description: "বর্তমান সময় বলে",
    usage: "",
    cooldown: 3,
  },

  run: async ({ api, event }) => {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Dhaka',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const timeString = now.toLocaleTimeString('bn-BD', options);

    const response = `এখন সময় হচ্ছে: ${timeString}`;
    api.sendMessage(response, event.threadID);
  }
};
