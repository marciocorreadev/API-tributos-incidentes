import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import indexRouter from '@routes/index'
import cestRouter from '@routes/cest'
import ncmRouter from '@routes/ncm'

const app = express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.use('/', indexRouter)
app.use('/', cestRouter)
app.use('/', ncmRouter)

// Descomente a linha abaixo para importar planilhas locais
// import './utils/import'

export default app

