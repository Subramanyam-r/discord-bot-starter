import { ApplicationCommandType, ChatInputApplicationCommandData, ChatInputCommandInteraction } from "discord.js";

export type ChatInteractionCommandHandler = (interaction: ChatInputCommandInteraction) => Promise<void>

export type ChatInputCommand = {
    commandType?: ApplicationCommandType.ChatInput,
    commandData: ChatInputApplicationCommandData,
    handler: ChatInteractionCommandHandler
}