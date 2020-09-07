const commands = require('./helpers/commands')
const yargs = require('yargs')

commands.forEach(command =>  yargs.command(command))

yargs.parse()




