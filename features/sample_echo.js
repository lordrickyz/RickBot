/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/* */
module.exports = function(controller) {

  controller.on('message,direct_message', async(bot, message) => {
    await bot.reply(message, {
      text: "I am afraid I can't answer that for now. Would you like to ask me a different question?", 
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
        }
      ],
    });
  });

}
