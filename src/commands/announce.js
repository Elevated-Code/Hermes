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
        const mention = await args.pick('boolean')
        const title = await args.pick('string')
        const description = await args.rest('string')
        const embed = MessageEmbed(title, description, client, message);
        if (message.attachments.first()) {
            embed.setImage(message.attachments.first().url)
        }
        if (mention) {
            return channel.send({ 
                content: '||@here||',
                embeds: [embed]
             });
        } else {
            return channel.send({ embeds: [embed] })
        }
    }
}

module.exports = {
    RulesCommand
};