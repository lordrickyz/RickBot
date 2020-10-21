const resume = require("./resume.json")

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {
        controller.hears(async (message) =>
          (message.text && message.text.toLowerCase() === 'education') ||
          (message.text && message.text.toLowerCase() === 'study') ||
          (message.text && message.text.toLowerCase() === 'school'),
          'message', async (bot, message) => {

          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: "What would you like to know? I have added my education history.",
                quick_replies: [
                  {
                    title: "App Academy - Fullstack Engineering",
                    payload: "app academy",
                  },
                  {
                    title: "UNC-Chapel Hill",
                    payload: "UNC",
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
          new RegExp("app academy"),
         'message', async (bot, message) => {
          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: `An Immersive software development course with focus on full stack development with < 3% acceptance rate.`,
              });
              
              await bot.reply(message, {
                text: `At App Academy, I learned and utilized languages and frameworks such as Javascript, React.js, Redux.js,  Ruby,  Ruby on Rails, Python3, Node.js, MongoDB and much more.`,
              });

              await bot.reply(message, {
                text: "What else would you like to know? If you would like to learn more, type 'contact' to connect with me.",
                quick_replies: [
                  {
                    title: "UNC-Chapel Hill",
                    payload: "UNC",
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
          new RegExp("UNC"),
         'message', async (bot, message) => {
          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                text: `University of North Carolina at Chapel Hill. At UNC, I majored in biology and focused on primary healthcare and research utilizing R language.`,
              });
              await bot.reply(message, {
                text: "What else would you like to know? If you would like to learn more, type 'contact' to connect with me.",
                quick_replies: [
                  {
                    title: "App Academy - Fullstack Engineering",
                    payload: "app academy",
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