import express from "express";
import * as https from "https";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const server = express();

server.all("/", (req, res) => {
  console.log("Server is running!");
});

function keepAlive() {
  server.listen(PORT, HOST, () => {
    console.log("Bot is alive!");

    setInterval(function () {
      https.get("https://lurus-bot.herokuapp.com/");
    }, 300000);
  });
}

export const start = async (client) => {
  (await import("./functions/chat.js")).init(client);
  (await import("./functions/voice.js")).init(client);
  (await import("./functions/commands.js")).init(client);
  keepAlive();
};
