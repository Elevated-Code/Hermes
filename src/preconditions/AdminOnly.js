const { Precondition } = require('@sapphire/framework');

class AdminOnlyPrecondition extends Precondition {
  run(message) {
    return message.member.roles.cache.find(r => r.id === '967442552678670437')
      ? this.ok()
      : this.error({ message: 'Only the admins can use this command!' });
  }
}

module.exports = {
  AdminOnlyPrecondition
};