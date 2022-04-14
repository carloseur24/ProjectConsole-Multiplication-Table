const {
    colors
} = require('../personalice/colors.js')
const fs = require('fs');
const createfile = async (base, list, limit) => {

    try {
        const temp1 = ('=================');
        const temp2 = ('       ================='.info);
        const table1 = (`         Table  of  ${base}`);
        const table2 = ('         Table  of '.cyan + `${base}`.grey);

        output = `${temp1}\n${table1}\n${temp1}\n` + '';
        outputconsole = `${temp2}\n${table2}\n${temp2}\n` + '';
        
        const multiples = (base,limit) => {
                    for (let i = 1; i <= limit; i++) {
                        output += `${base}x${i} = ${base*i}\n`;
                        outputconsole += base + ' x '.green + i + ' = '.red + base * i + '\n';
                    }
                }

        multiples(base,limit);
        (list) ?
        console.log(outputconsole.debug): console.log("couldn't be shown but...")


        fs.writeFileSync(`./txt-tables/table-${base}.txt`, output);
        return `Table-${base}.txt in directory /txt-tables`.italic.bgRed

    } catch (err) {
        throw err
    }

    // fs.writeFile(`table-${base}.txt`, output, (err) => {
    //     if (err) throw err;
    //     console.log('file created with success')
    // })
}

module.exports = {
    createfile
}