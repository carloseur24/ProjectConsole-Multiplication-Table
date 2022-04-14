const{colors} = require('./personalice/colors.js')
const {
    createfile
} = require('./helpers/multiplication.js')
const {
    argv
} = require('./config/yargs')

console.clear();
console.log(argv)

createfile(argv.b, argv.l,argv.t)
    .then(creating => console.log(creating, `Done, has been created successfully`.italic))
    .catch(err => console.log('has happened an erro', err));


// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// =====================
// const base = 2;
// =====================