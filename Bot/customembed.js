const{ SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Client } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('customembed')
		.setDescription('Create your own embed!')
    .addStringOption(option =>
      option.setName("title")
          .setDescription("The title of the embed.")
          .setRequired(true))
    .addStringOption(option =>
        option.setName("description")
          .setDescription("The description of the embed. Pro Tip: Use \n to force a new line!")
          .setRequired(true))          
    .addStringOption(option =>
        option.setName("colour")
          .setDescription("The embeds colour, you must send a HEX with no #.")
          .setRequired(true)),
                    
                    
                    
                    
                    
                    
	async execute(interaction) {

      const title = interaction.options.getString("title")
      const desc = interaction.options.getString("description")
      const colour = interaction.options.getString("colour")
    
      const B = new MessageEmbed()
        .setTitle(`${title}`)
        .setDescription(`${desc}`)
        .setTimestamp()
        .setColor(`${colour}`)

    
         interaction.reply({ embeds: [B] })

	},
};