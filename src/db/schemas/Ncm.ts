import mongoose, { Document, Schema } from 'mongoose';
import INcm from '@models/ncm'

type Ncm  = Document & INcm;

const NcmSchema = new Schema(
    {
        ncm : {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        descricao: {
            type: String,
            unique: true,
            trim: true,
        },
        estados: [
            {
                estado: String,
                tributos: {
                    ex: String,
                    tipo: String,
                    federal: Number,
                    importados: Number,
                    estadual: Number,
                    municipal: Number,
                    vigenciaInicio: String,
                    vigenciaFim: String,
                    chave: String,
                    versao: String,
                    fonte: String,
                }
            }
        ],
    },
    {
        timestamps: true,
    }
    )
    
export default mongoose.model<Ncm>('Ncm', NcmSchema)