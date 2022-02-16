import { fromEvent } from "rxjs";
import { Client, Intents } from "discord.js";

const TOKEN = "OTQyMjU5OTUxMzkxMzQyNjEz.Ygh59g.KoRfQJxc5F7gWlBWrDQUEx1m5wY";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES],
});

console.log("Starting...");

fromEvent(client, "ready").subscribe(async (_) => {
  console.log(`Logged in as ${client.user.tag}!`);
  (await import("./bot.js")).start(client);
});

client.login(TOKEN);
