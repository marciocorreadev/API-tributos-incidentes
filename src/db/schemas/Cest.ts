import mongoose, { Document, Schema } from 'mongoose'
import ICest from '@models/Cest'

type Cest = Document & ICest;

const CestSchema = new Schema(
    {
        cest: {
            type: String,
            required: true,
            trim: true,
        },
        ncm: {
            type: String,
            required: true,
            trim: true,
        },
        descricao: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<Cest>('Cest', CestSchema)