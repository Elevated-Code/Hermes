const { Listener } = require('@sapphire/framework');

class ReadyListener extends Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            once: true,
            event: 'ready'
        });
    }
    run(client) {
        const { username, id } = client.user;
        this.container.logger.info(`Successfully logged in as ${username} (${id})`);
        this.updateActivity(client)
        setTimeout(() => {
            this.updateActivity(client)
        }, 60000);
    }

    updateActivity(client) {
        const guild = client.guilds.cache.first()
        client.user.setActivity(`over ${guild.memberCount} users`, {type: 'WATCHING'});
    }
}

module.exports = {
    ReadyListener
};