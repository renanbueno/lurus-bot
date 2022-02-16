import express from "express";

const server = express();

server.all("/", (req, res) => {
  res.send("Server is running!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Bot is alive!");
  });
}

export const start = async (client) => {
  (await import("./functions/chat.js")).init(client);
  (await import("./functions/voice.js")).init(client);
  (await import("./functions/commands.js")).init(client);
  keepAlive();
};
