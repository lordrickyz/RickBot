const resume = require("./resume.json")

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {
        controller.hears(async (message) =>
          (message.text && message.text.toLowerCase() === 'contact'),
          'message', async (bot, message) => {

          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                  text: "You can connect with me through LinkedIn or Email"
              });
              await bot.reply(message, {
                  text: `LinkedIn: <a href="https://www.linkedin.com/in/rickyzhengs/">LinkedIn Link</a>`
              });
              await bot.reply(message, {
                  text: `Email: <a href="mailto:rickyzheng@ymail.com">rickyzheng@ymail.com</a>`
              });
              await bot.reply(message, {
                  text: `You can also visit my portfolio where I showcase my projects: <a href="https://lordrickyz.github.io/">Portfolio Link</a>`
              });
              await bot.reply(message, {
                  text: "I hope to connect with you soon."
              });

              await bot.reply(message, {
                text: "Would you like to know anything else?",
                quick_replies: [
                  {
                    title: "Summary",
                    payload: "summary",
                  },
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
                    title: "help",
                    payload: "help",
                  },
                ]
            });
            }, 1000);
        });
  }
}