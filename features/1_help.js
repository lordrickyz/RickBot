const resume = require("./resume.json")

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {
        controller.hears(async (message) =>
            (message.text && message.text.toLowerCase() === 'back') ||
            (message.text && message.text.toLowerCase() === 'help'),
            'message', async (bot, message) => {

            await bot.reply(message, {type: 'typing'});
            setTimeout(async () => {

              await bot.changeContext(message.reference);
                await bot.reply(message, {
                  text: "What would you like to know?",
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
                    }
                  ]
                });
            }, 1000);
        });
    }
}