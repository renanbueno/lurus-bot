import { fromEvent } from "rxjs";

const azarList = [
  "https://media.discordapp.net/attachments/621819585603043328/830651247643328512/ezgif-6-a56e1c15c8d3.gif",
  "https://media.discordapp.net/attachments/399723055389212683/748710591014764554/monkey.gif",
  "https://media.discordapp.net/attachments/535532517806047232/836410033126113320/ezgif-2-c5acb8338198.gif",
  "https://media.discordapp.net/attachments/680928395399266314/855121519561539614/image0.gif",
  "https://media.discordapp.net/attachments/717498714259980378/925778772857323610/catsay.gif",
  "https://media.discordapp.net/attachments/717498714259980378/912315907626369024/caption-1-3.gif",
  "https://c.tenor.com/qZDvDAaCRXQAAAAC/dont-care-didnt-ask.gif",
  "https://c.tenor.com/J1RoW9KoisUAAAAd/really-oh.gif",
  "https://media.discordapp.net/attachments/535532517806047232/931288653429370950/rubber.gif",
  "https://c.tenor.com/7RwSnuvmJc4AAAAd/ratio-didnt-ask.gif",
];

export const init = async (client) => {
  fromEvent(client, "messageCreate").subscribe((message) => {
    const msg = message.content.toString().toLowerCase();
    const azar = Math.round(Math.random() * 99) + 1;
    console.log(message);

    if (message.author.bot) return;

    if (msg.includes("bostil")) return message.reply("⠀");

    if (msg.includes("arthur") || msg.includes("arthries") || msg.includes("@!508019922656559104")) return message.reply("https://c.tenor.com/LH7vzP6ewfQAAAAC/dog-mad.gif");

    if (msg.includes("@!185783175740522497") && msg.includes("lol")) return message.reply("https://c.tenor.com/XfXF2GGYA9IAAAAC/lolzinho.gif");

    if (msg.includes("late")) return message.reply("https://tenor.com/view/peegeepee-dog-doggo-d0gg0-d0g-gif-21177135");

    if (msg.includes("comida")) return message.reply("https://c.tenor.com/JKfGgk_xqbIAAAAC/teehee-doggo.gif");

    if (msg == "não" || msg == "nao" || msg == "n") return message.channel.send("https://c.tenor.com/Or_pMDyHdygAAAAd/no-no-no-nope.gif");

    if (azar <= 5) return message.channel.send(azarList[Math.floor(Math.random() * (9 - 0 + 1)) + 0]);
  });
};
