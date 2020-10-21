const resume = require("./resume.json")

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {
        controller.hears(async (message) =>
          (message.text && message.text.toLowerCase() === 'summary') ||
          (message.text && message.text.toLowerCase() === 'tell me about your self'),
          'message', async (bot, message) => {

          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                  text: "Hello, my name is Ricky Zheng."
              });
              await bot.reply(message, {
                  text: "I am life insurance agent turned software engineer who loves tackling complex problems and someone who always enjoys challenges, teamwork, and surpassing any goals set forth on me or my team."
              });
              await bot.reply(message, {
                  text: "I have experiences in JavaScript, Ruby, Rails, React, Python3, and more. I am adaptable, open-minded, value all learning experiences and eager to expand on what I already know."
              });
              await bot.reply(message, {
                  text: "I am currently open to work. I hope to connect with you soon."
              });

              await bot.reply(message, {
                text: "Would you like to know anything else?",
                quick_replies: [
                  {
                    title: "Experiences",
                    payload: "experiences",
                  },
                  {
                    title: "Education",
                    payload: "education",
                  },
                  {
                    title: "Languages",
                    payload: "languages",
                  },
                  {
                    title: "Projects",
                    payload: "projects",
                  },
                  {
                    title: "Contact",
                    payload: "contact",
                  },
                  {
                    title: "help",
                    payload: "help",
                  },
                ]
            });
            }, 1000);
        });
  }
}