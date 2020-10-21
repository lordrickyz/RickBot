const resume = require("./resume.json")

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {
        controller.hears(async (message) =>
          (message.text && message.text.toLowerCase() === 'experiences') ||
          (message.text && message.text.toLowerCase() === 'work') ||
          (message.text && message.text.toLowerCase() === 'work experience'),
          'message', async (bot, message) => {

          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: "What would you like to know? I have listed companies and startups I've worked and learned from in the past.",
                quick_replies: [
                  {
                    title: "App Academy Student",
                    payload: "fullstack app academy",
                  },
                  {
                    title: "World Financial Group",
                    payload: "life agent",
                  },
                  {
                    title: "Railcare Health",
                    payload: "railcare health",
                  },
                  {
                    title: "Go Back",
                    payload: "back",
                  },
                ]
            });
            }, 1000);
        });

        controller.hears(
          new RegExp("fullstack app academy"),
         'message', async (bot, message) => {
          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: `At App Academy, I learned and utilized languages and frameworks such as Javascript, React.js, Redux.js,  Ruby,  Ruby on Rails, Python3, Node.js, MongoDB and much more.`,
              });
              await bot.reply(message, {
                text: `Timeline: ${resume.work[2].startDate} til current`,
              });

              await bot.reply(message, {
                text: "What else would you like to know? If you would like to learn more, type 'contact' to connect with me.",
                quick_replies: [
                  {
                    title: "World Financial Group",
                    payload: "life agent",
                  },
                  {
                    title: "Railcare Health",
                    payload: "railcare health",
                  },
                  {
                    title: "Go Back",
                    payload: "back",
                  },
                ]
              });
            }, 1000);
        });

        controller.hears(
          new RegExp("railcare health"),
         'message', async (bot, message) => {
          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: `I worked as a ${resume.work[2].position} at ${resume.work[2].name}.`,
              });
              await bot.reply(message, {
                text: `Timeline: ${resume.work[2].startDate} til ${resume.work[2].endDate}`,
              });
              await bot.reply(message, {
                  text: `My responsibilities include: \n ${resume.work[2].summary}`,
              });

              await bot.reply(message, {
                text: "What else would you like to know? If you would like to learn more, type 'contact' to connect with me.",
                quick_replies: [
                  {
                    title: "Fullstack App Academy",
                    payload: "app academy",
                  },
                  {
                    title: "World Financial Group",
                    payload: "life agent",
                  },
                  {
                    title: "Go Back",
                    payload: "back",
                  },
                ]
              });
            }, 1000);
        });



        controller.hears(
          new RegExp("life agent"),
         'message', async (bot, message) => {
          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: `I worked as a ${resume.work[1].position} at ${resume.work[1].name}.`,
              });
              await bot.reply(message, {
                text: `Timeline: ${resume.work[1].startDate} til ${resume.work[1].endDate}`,
              });
              await bot.reply(message, {
                  text: `My responsibilities include: \n ${resume.work[1].summary}`,
              });

              await bot.reply(message, {
                text: "What else would you like to know? If you would like to learn more, type 'contact' to connect with me.",
                quick_replies: [
                  {
                    title: "Fullstack App Academy",
                    payload: "app academy",
                  },
                  {
                    title: "Railcare Health",
                    payload: "railcare health",
                  },
                  {
                    title: "Go Back",
                    payload: "back",
                  },
                ]
              });

            }, 1000);
        });

    }
}