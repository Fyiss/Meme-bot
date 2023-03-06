import axios from "axios";
import Discord from "discord.js";
const memeCommand = new Discord.SlashCommandBuilder();

memeCommand.setName("meme");
memeCommand.setDescription("Sends meme");
const memeCommandInteraction = async (interaction) => {
  const res = await axios("https://meme-api.com/gimme");
  const embed = new Discord.EmbedBuilder();
  embed.setTitle("Meme");
  embed.setImage(res.data.url);
  console.log(interaction);
  interaction.reply({
    embeds :[embed]
  })
};
export default {
  data: memeCommand,
  execute: memeCommandInteraction,
};
