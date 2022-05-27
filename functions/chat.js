import { fromEvent } from "rxjs";

const azarList = [
  "https://media.discordapp.net/attachments/621819585603043328/830651247643328512/ezgif-6-a56e1c15c8d3.gif",
  "https://media.discordapp.net/attachments/399723055389212683/748710591014764554/monkey.gif",
  "https://media.discordapp.net/attachments/717498714259980378/975409427249238117/416F9FC0-1709-4A7E-B81F-055F6CBC604E.gif",
  "https://media.discordapp.net/attachments/680928395399266314/855121519561539614/image0.gif",
  "https://media.discordapp.net/attachments/717498714259980378/925778772857323610/catsay.gif",
  "https://media.discordapp.net/attachments/717498714259980378/912315907626369024/caption-1-3.gif",
  "https://i.giphy.com/media/LUEpnHzlqQJUA9NuEW/giphy.mp4",
  "https://c.tenor.com/J1RoW9KoisUAAAAd/really-oh.gif",
  "https://media.discordapp.net/attachments/535532517806047232/931288653429370950/rubber.gif",
  "https://c.tenor.com/7RwSnuvmJc4AAAAd/ratio-didnt-ask.gif",
];

export const init = async (client) => {
  fromEvent(client, "messageCreate").subscribe((message) => {
    const msg = message.content.toString().toLowerCase();
    const azar = Math.round(Math.random() * 99) + 1;

    if (message.author.bot) return;

    if (msg.includes("bostil")) return message.reply("⠀");

    if (msg.includes("arthur") || msg.includes("arthries")) return message.reply("https://c.tenor.com/LH7vzP6ewfQAAAAC/dog-mad.gif");

    if (msg.includes("lol") && msg.includes("ruan")) return message.reply("https://c.tenor.com/XfXF2GGYA9IAAAAC/lolzinho.gif");

    if (msg.includes("lol")) return message.reply("https://c.tenor.com/hIZ8pn7zjgkAAAAS/ishowspeed-speed.gif");

    if (msg.includes("cachorro")) return message.reply("https://tenor.com/view/peegeepee-dog-doggo-d0gg0-d0g-gif-21177135");

    if (msg.includes("comida")) return message.reply("https://c.tenor.com/JKfGgk_xqbIAAAAC/teehee-doggo.gif");

    if (msg.includes("mata esse bot") || msg.includes("mata esse cachorro")) return message.reply("https://c.tenor.com/Or_pMDyHdygAAAAd/no-no-no-nope.gif");

    if (msg.includes("bot") || msg.includes("cachorro")) return message.reply("https://c.tenor.com/fDPxJ6UJG24AAAAS/wavetro-wavetro-hq.gif");

    if (msg.includes("vo te mata") || msg.includes("mata")) return message.send("https://c.tenor.com/fSS2_V2AvuIAAAAd/breaking-bad-gus.gif");

    if (msg == "não" || msg == "nao" || msg == "n") return message.channel.send("");

    if (azar <= 1) return message.channel.send(azarList[Math.floor(Math.random() * (9 - 0 + 1)) + 0]);
  });
};
