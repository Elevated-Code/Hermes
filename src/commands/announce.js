const { Command } = require('@sapphire/framework');
const MessageEmbed = require('../Util/MessageEmbed')

class RulesCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'announce',
            description: 'Create an announcement',
            preconditions: ['StaffOnly']
        });
    }

    async messageRun(message, args) {
        const { client } = this.container
        const channel = await args.pick('channel')
        const title = await args.pick('string')
        const description = await args.rest('string')
        const embed = MessageEmbed(title, description, client, message);
        await channel.bulkDelete(100)
        return channel.send({ embeds: [embed] })
    }
}

module.exports = {
    RulesCommand
};