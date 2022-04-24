const { Command } = require('@sapphire/framework');

class ClearCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'clear',
            aliases: ['wipe'],
            description: 'Clear the last 10 messages',
            preconditions: ['StaffOnly']
        });
    }

    async messageRun(message, args) {
        await message.delete()
        await message.channel.bulkDelete(await args.pick('number'))
    }
}

module.exports = {
    ClearCommand
};