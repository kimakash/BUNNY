module.exports = {
  config: {
    name: "emotion",
    description: "Detect emotion and reply with comfort",
    usage: "!",
    cooldown: 3,
  },
  run: async ({ api, event }) => {
    const msg = event.body.toLowerCase();

    const replies = {
      sad: [
        "সব ঠিক হয়ে যাবে, মন খারাপ করিস না।",
        "তোর কষ্টের কথা শুনে মন খারাপ হয়ে গেল...",
        "ভাঙিস না মন, Bunny তোকে ভালোবাসে।"
      ],
      happy: [
        "তুই হাসলে Bunny-র মন ভালো হয়ে যায়!",
        "যেভাবে তুই খুশি, ওইরকমই থাক সবসময়!",
        "ওয়াও, চল একসাথে খুশি হই!"
      ],
      angry: [
        "রাগ কমা, কে রাগাইছে তোকে?",
        "ধৈর্য ধর ভাই, সব ঠিক হয়ে যাবে।",
        "Bunny চায়ের সাথে একটু শান্তি আনছে।"
      ]
    };

    let foundEmotion = null;
    if (msg.includes("দুঃখ") || msg.includes("মন খারাপ") || msg.includes("কষ্ট")) foundEmotion = "sad";
    else if (msg.includes("ভালো লাগছে") || msg.includes("খুশি") || msg.includes("হাসছি")) foundEmotion = "happy";
    else if (msg.includes("রাগ") || msg.includes("ঝগড়া") || msg.includes("বিরক্ত")) foundEmotion = "angry";

    if (foundEmotion) {
      const replyList = replies[foundEmotion];
      const randomReply = replyList[Math.floor(Math.random() * replyList.length)];
      return api.sendMessage(randomReply, event.threadID);
    }
  }
};
