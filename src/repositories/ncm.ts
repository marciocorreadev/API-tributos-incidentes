import NcmSchema from '@db/schemas/ncm'

async function create(data: any) {
    const ncm = new NcmSchema(data);
    return await ncm.save();
}

async function get() {
    return await NcmSchema.find({}, 'ncm ncm descricao');
}

async function getById(ncm: string) {
    return await NcmSchema.find({ ncm }, 'ncm ncm descricao')
}

async function update(ncm: string, data: any) {
    return await NcmSchema.findOneAndUpdate({ ncm }, {
        $set: data,
    });
}

async function remove(ncm: string) {
    return await NcmSchema.findOneAndRemove({ ncm });
}

export default { create, get, getById, update, remove }