import { ChatInputCommandInteraction } from 'discord.js';
import { ChatInputCommand } from '../../utils/types';

export let pingCommand: ChatInputCommand = {
    commandData: {
        name: "ping",
        description: "Pong!"
    },

    handler: async (interaction: ChatInputCommandInteraction) => {
        interaction.reply("Pong!");
    }
}