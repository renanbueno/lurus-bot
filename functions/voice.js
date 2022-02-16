import { fromEvent } from "rxjs";
import { createAudioPlayer, joinVoiceChannel, VoiceConnectionStatus, createAudioResource } from "@discordjs/voice";

const player = createAudioPlayer();
const resource = createAudioResource("../resources/woof.mp3");

export const init = async (client) => {
  fromEvent(client, "messageCreate").subscribe((message) => {
    if (message.author.bot) return;

    if (!message.guild) return;

    if (message.content === "auau") {
      const channel = message.member?.voice.channel;

      if (channel) {
        try {
          const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
          });

          connection.on(VoiceConnectionStatus.Ready, () => {
            console.log("The connection has entered the Ready state - ready to play audio!");

            // Subscribe the connection to the audio player (will play audio on the voice connection)
            const subscription = connection.subscribe(player);

            // subscription could be undefined if the connection is destroyed!
            if (subscription) {
              player.play(resource);

              player.on("error", (error) => {
                console.error(error);
              });

              player.on(AudioPlayerStatus.Idle, () => {
                const newResource = createAudioResource("../resources/woof.mp3");
                player.play(newResource);
              });
              // Unsubscribe after 5 seconds (stop playing audio on the voice connection)
              setTimeout(() => subscription.unsubscribe(), 5_000);
            }
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("Failed joining voice!");
      }
    }
  });
};
