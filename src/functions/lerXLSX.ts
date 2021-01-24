import xlsx from 'node-xlsx';
import fs from 'fs';

const workSheetsFromFile = xlsx.parse(`${__dirname}/cest.xlsx`);
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/cest.xlsx`));
