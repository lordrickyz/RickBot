const resume = require("./resume.json")

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {
        controller.hears(async (message) =>
          (message.text && message.text.toLowerCase() === 'languages') ||
          (message.text && message.text.toLowerCase() === 'framework') ||
          (message.text && message.text.toLowerCase() === 'tech stack'),
          'message', async (bot, message) => {

          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                  text: "Here are the languages and frameworks I've used."
              });
              await bot.reply(message, {
                  text: "Languages: JavaScript, Ruby / Ruby on Rails, R, Python, SQL."
              });
              await bot.reply(message, {
                  text: "Database: PostgreSQL, SQLite3, MongoDB."
              });
              await bot.reply(message, {
                  text: "Technologies and Frameworks: Rails, React, Redux, Node.js, Express.js, Webpack, jQuery, Git, Heroku, HTML, CSS."
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