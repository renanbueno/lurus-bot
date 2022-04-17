import { fromEvent } from "rxjs";
import { createAudioPlayer, joinVoiceChannel, VoiceConnectionStatus, createAudioResource } from "@discordjs/voice";

const player = createAudioPlayer();
const resource = createAudioResource("../resources/woof.mp3");

export const init = async (client) => {
  fromEvent(client, "messageCreate").subscribe((message) => {
    if (message.content === "auau") {
      const channel = message.member?.voice.channel;

      try {
        const connection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator,
        });

        connection.on(VoiceConnectionStatus.Ready, () => {
          console.log("The connection has entered the Ready state - ready to play audio!");
          const subscription = connection.subscribe(player);

          player.play(resource);

          player.on("error", (error) => {
            console.log("Failed playing resource!");
          });

          player.on(AudioPlayerStatus.Idle, () => {
            const newResource = createAudioResource("../resources/woof.mp3");
            player.play(newResource);
          });

          setTimeout(() => subscription.unsubscribe(), 5_000);
        });
      } catch (error) {
        console.log("Failed joining voice!");
      }
    }
  });
};
