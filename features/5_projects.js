const resume = require("./resume.json")

module.exports = function(controller) {

    if (controller.adapter.name === 'Web Adapter') {
        controller.hears(async (message) =>
          (message.text && message.text.toLowerCase() === 'projects'),
          'message', async (bot, message) => {

          await bot.reply(message, {type: 'typing'});
          setTimeout(async () => {
            await bot.changeContext(message.reference);
              await bot.reply(message, {
                  text: `You can check my projects at my <a href="https://lordrickyz.github.io/">Portfolio Link</a>`
              });
              await bot.reply(message, {
                  text: `<a href="https://lordrickyz.github.io/">GroupRide</a>: MERN stack application that allows users to schedule and create biking events with safest routes. Utilizes MongoDB, Express.js, React, Node.js, Webpack. `
              });

              await bot.reply(message, {
                  text: `<a href="https://jelloz.herokuapp.com/#/">Jello</a>: React and Ruby on Rails Kanban tool; collaboration tool that organizes your projects into boards. Languages and frameworks include JavaScript, React, Redux, Ruby on Rails(RoR), PostgreSQL, CSS3, Webpack.`
              });
              await bot.reply(message, {
                  text: `<a href="https://lordrickyz.github.io/bubble-pop/">Bubble Pop</a>: Interactive JavaScript game where users shoot bubbles to match other bubbles until the board is cleared. Impleted collision detection and incorporated JavaScript, CSS3, HTML5, Heroku, Webpack.`
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