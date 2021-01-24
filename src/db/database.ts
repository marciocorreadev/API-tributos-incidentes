import mongoose from 'mongoose'
import config from '@config'
import NcmSchema from './schemas/Ncm'

function connectDB() {
    if (config.db.connectionString) {
        mongoose.connect(
            config.db.connectionString,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: false,
            })
    }
}

export { connectDB }