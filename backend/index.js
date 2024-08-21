require("dotenv").config();
const { Telegraf } = require("telegraf");

const token = process.env.token;
const webAppURL = "https://horoscopebot.netlify.app/";
const bot = new Telegraf(token);
bot.on("message", async (ctx) => {
  const text = ctx.message.text;
  if (text === "/start") {
    await ctx.sendMessage(
      "Нажми кнопку ниже, чтобы получить прогноз на сегодня",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Открыть прогноз", web_app: { url: webAppURL } }],
          ],
        },
      }
    );
  }
});
bot.launch();
