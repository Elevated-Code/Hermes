const { Precondition } = require('@sapphire/framework');

class StaffOnlyPrecondition extends Precondition {
  run(message) {
    return message.member.roles.cache.find(r => r.id === '967442552678670437' || r.id === '967442663953530962' || r.id === '967442411758440558' || r.id === '967442864432877568')
      ? this.ok()
      : this.error({ message: 'Only staff members can use this command!' });
  }
}

module.exports = {
  StaffOnlyPrecondition
};