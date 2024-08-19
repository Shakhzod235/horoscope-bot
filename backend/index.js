require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.token;
const webAppURL = process.env.webAppURL;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    await bot.sendMessage(
      chatId,
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
