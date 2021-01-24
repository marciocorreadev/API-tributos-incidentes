import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import indexRouter from '@routes/Index'

const app = express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.use(indexRouter)

export default app

// import { xlsxToJSON } from './utils/converts'
// const file = `${__dirname}..\\..\\TABELAS\\CEST\\cest.xlsx`
// const data = xlsxToJSON(file)