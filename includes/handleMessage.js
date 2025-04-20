const badWords = ["gadha", "bokachoda", "fuck"]; // eto customize korte parbi

module.exports = async function handleMessage({ api, event }) {
  const message = event.body.toLowerCase();

  if (badWords.some(word => message.includes(word))) {
    api.removeUserFromGroup(event.senderID, event.threadID, err => {
      if (err) return api.sendMessage("Kick dite parlam na...", event.threadID);
      api.sendMessage("Bunny bolche: Bhalo thakte shikho, bye!", event.threadID);
    });
  }
};
