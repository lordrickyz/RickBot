// Greeting Function for BotKit
const { BotkitConversation } = require('botkit');

module.exports = function (controller) {
    controller.on("hello", greeting);
    controller.on("welcome_back", greeting);

    function greeting(bot, message) {
        bot.reply(message, {
          text: "Hello I'm Ricky Zheng's Personal Bot.",
        });
        bot.reply(message, {
          text: "Ricky is currently open to work. Feel free to type 'contact' to get in touch."
        });
        bot.reply(message, {
          text: "You can ask me anything! What would you like to know about me?",
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
              title: "Contact",
              payload: "contact",
            },
            {
              title: "Help",
              payload: "help",
            }
          ],
        });
      }
  }