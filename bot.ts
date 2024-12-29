import { Client, Interaction } from "discord.js";
import * as commands from "./modules";
import { Constants } from "./utils/constants";
import { Logger } from "./utils/logger";

export const startBot = () => {

    const client = new Client({
        intents: Constants.intents
    });

    initializeListeners(client);

    client.login(process.env.TOKEN)
}

function initializeListeners(client: Client) {

    client.on("ready", (client) => {
        Logger.info(`Bot started: ${client.user.username}`);
    });

    client.on("interactionCreate", async (interaction: Interaction) => {
        const startTime = Date.now();
        Logger.info(`Interaction created: ${interaction}`)

        if (interaction.isChatInputCommand()) {
            const command = Object.values(commands).find(cmd => cmd.commandData.name === interaction.commandName);
            if (!command) {
                Logger.error(`Invalid Chat Input Interaction: ${interaction}`);
                return;
            }
            command.handler(interaction);
        }

        Logger.info(`Interaction [${interaction}] completed in ${Date.now() - startTime}ms`)
    })
}