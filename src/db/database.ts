import mongoose from 'mongoose'
import config from '@config'
import NcmSchema from './schemas/ncm'

function connectDB() {
    if (config.db.connectionString) {
        mongoose.connect(
            config.db.connectionString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: false,
            })
    }
}

export { connectDB }