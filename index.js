const RealTimePackage = require('./lib/real-time-package')
module.exports = new RealTimePackage({
  workspace: atom.workspace,
  commands: atom.commands,
  clipboard: atom.clipboard,
  pusherKey: process.env.REAL_TIME_PUSHER_KEY,
  baseURL: process.env.REAL_TIME_BASE_URL
})
