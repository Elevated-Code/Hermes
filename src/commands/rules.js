const { Command } = require('@sapphire/framework');
const MessageEmbed = require('../Util/MessageEmbed')

class RulesCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'rules',
            description: 'Create/edit the server rules',
            preconditions: ['AdminOnly']
        });
    }

    async messageRun(message, args) {
        const { client } = this.container
        const channel = await args.pick('channel')
        const embed = MessageEmbed('Rules', "Membership of this server is governed by a few simple rules.\n\n1. Don't be an idiot. No unnecessary arguments or anything like that.\n2. If someone asks you to stop then you should.\n 3. Whether you like it or not, we trust the judgement of our staff team and so should you. Their word is final.\n 4. Swearing is tolerated as long as you have a purpose - when it's just for the sake of it then it's not allowed.", client, message);
        // await channel.bulkDelete(100)
        channel.messages.fetch().then(messages => {
            messages.forEach(async (message) => {
                await message.delete();
            });
        })
        return channel.send({ embeds: [embed] })
    }
}

module.exports = {
    RulesCommand
};