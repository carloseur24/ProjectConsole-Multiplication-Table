const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'This is base to multiplication table'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: true,
        describe: 'This is an option to shows the table on screen'
    })
    .option('t', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'This is an option to choose how many numbers you want this table to be'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Base must be a number'.inverse
        }
        return true;
    })
    .check((argv, options) => {
            if (isNaN(argv.t)) {
                throw `You must put the command ${'-t'.black.bgBlue} or ${'--limit'.black.bgBlue} followed by a number.\nFor example ${'-t'.black.bgBlue} ${'15'.magenta} to get a proper result.`
            }
            return true;
        })
        .argv;

        module.exports = {
            argv
        }