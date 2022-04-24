const { Listener } = require('@sapphire/framework');

class CommandDeniedListener extends Listener {
  run(error, { message }) {
    return message.channel.send(error.message);
  }
}

module.exports = {
  CommandDeniedListener
};