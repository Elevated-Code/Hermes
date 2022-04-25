const { MessageEmbed } = require("discord.js");

module.exports = embed = (title, description, client, message) => {
  return new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setColor("#0000ff")
    .setTimestamp(message.createdAt)
    .setThumbnail(
      message.guild.iconURL()
    );
};