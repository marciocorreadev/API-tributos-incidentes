import Papa from "papaparse"
var XLSX = require('xlsx')

const papaPromise = (importFile: any) => new Promise((resolve, reject) => {
    Papa.parse(importFile, {
        worker: true, header: true, dynamicTyping: true,
        complete: results => resolve(results.data),
        error: error => reject(error)
    })
})

const csvToJSON = async (file: any) => await papaPromise(file)

const xlsxToJSON = (file: any) => {
    const arquive = XLSX.readFile(file);
    return XLSX.utils.sheet_to_json(arquive.Sheets[arquive.SheetNames[0]])
}

export { xlsxToJSON, csvToJSON }