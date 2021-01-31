var XLSX = require('xlsx')
const csv = require('csv-parser')
const fs = require('fs')

const csvToJSON = async (file: any) => new Promise(resolve => {
        const results: any = [];
        fs.createReadStream(file)
            .pipe(csv({ separator: ';' }))
            .on('data', (data: any) => results.push(data))
            .on('end', () => {
                resolve(results);
            });
})

const xlsxToJSON = (file: any) => {
    const arquive = XLSX.readFile(file);
    return XLSX.utils.sheet_to_json(arquive.Sheets[arquive.SheetNames[0]])
}

export { xlsxToJSON, csvToJSON }