import mongoose, { Document, Schema } from 'mongoose';
import INcm from '@models/Ncm'

type Ncm = Document & INcm;

const NcmSchema = new Schema(
    {
        ncm: {
            type: String,
            required: true,
            trim: true,
        },
        descricao: {
            type: String,
            required: true,
            trim: true,
        },
        ex: {
            type: String,
            trim: true,
        },
        tipo: {
            type: String,
            required: true,
            trim: true,
        },
        vigenciaInicio: {
            type: String,
            required: true,
            trim: true,
        },
        vigenciaFim: {
            type: String,
            required: true,
            trim: true,
        },
        chave: {
            type: String,
            required: true,
            trim: true,
        },
        versao: {
            type: String,
            required: true,
            trim: true,
        },
        fonte: {
            type: String,
            required: true,
            trim: true,
        },
        estado: {}
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<Ncm>('Ncm', NcmSchema)