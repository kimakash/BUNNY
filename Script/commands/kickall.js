module.exports.config = {
  name: "kickall",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Customized by ChatGPT",
  description: "Force kick all group members except the bot and sender.",
  commandCategory: "box chat",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID);

  const botID = api.getCurrentUserID();
  const senderID = event.senderID;

  const listUserID = participantIDs.filter(id => id !== botID && id !== senderID);

  api.sendMessage(`› Starting to kick all members...`, event.threadID);

  for (let id of listUserID) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // delay to avoid rate limit
    api.removeUserFromGroup(id, event.threadID);
  }

  return api.sendMessage(`› Done! All members have been removed.`, event.threadID);
};
