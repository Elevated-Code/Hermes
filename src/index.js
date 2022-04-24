const { SapphireClient } = require('@sapphire/framework');
require('dotenv').config()

const client = new SapphireClient({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
    defaultPrefix: '!'
});

client.login(process.env.DISCORD_TOKEN);