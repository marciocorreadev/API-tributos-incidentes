import NcmSchema from '@db/schemas/Ncm'

async function create(data: any) {
    const ncm = new NcmSchema({...data});
    return await ncm.save();
}

async function get(uf: string, limit: any, skip: any) {
    limit = parseInt(limit) || 10;
    skip = parseInt(skip) || 0;
    let select = `ncm descricao ex tipo vigenciaInicio vigenciaFim chave versao fonte`
    !!uf
        ? select += ` estado.${uf}`
        : select += ` estado`
    return await NcmSchema.find({}).skip(skip).limit(limit).select(select);
}

async function getById(ncm: string, uf: string = '') {
    let select = `ncm descricao ex tipo vigenciaInicio vigenciaFim chave versao fonte`
    !!uf
        ? select += ` estado.${uf}`
        : select += ` estado`
    return await NcmSchema.find({ ncm }, select)
}

async function update(ncm: string, data: any) {
    return await NcmSchema.findOneAndUpdate({ ncm }, {
        $set: data,
    });
}

async function updateByDesc(ncm: string, descricao: string, data: any) {
    return await NcmSchema.findOneAndUpdate({ ncm, descricao }, {
        $set: data,
    });
}

async function remove(ncm: string) {
    return await NcmSchema.findOneAndRemove({ ncm });
}

export default { create, get, getById, update, remove, updateByDesc }