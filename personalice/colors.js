const colors = require('colors');

// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.black) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass
//here any option to set your console text
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});
// outputs red text
// console.log("this is an error".info);
// outputs yellow text
// console.log("this is a warning".warn);
output=''
outputconsole=''
const multiples = (base) => {
    
    for (let i = 1; i <= 10; i++) {
        output += `${base}x${i} = ${base*i}\n`;
        outputconsole += base+'x'.green+i+'='.red+base*i+'\n';
    }
}

multiples(base =5);
console.log(outputconsole.warn)

