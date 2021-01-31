import CestSchema from '@db/schemas/Cest'

async function create(data: any) {
    const cest = new CestSchema(data);
    return await cest.save();
}

async function get(find: object = {}, limit: any, skip: any) {
    limit = parseInt(limit) || 10;
    skip = parseInt(skip) || 0;
    return await CestSchema.find(find, 'cest ncm descricao').skip(skip).limit(limit);
}

async function getByNcm(find: object = {}) {
    return await CestSchema.find(find,'cest ncm descricao');
}

async function getById(cest:string) {
    return await CestSchema.find({cest}, 'cest ncm descricao')
}

async function update(cest: string, data: any) {
    return await CestSchema.findOneAndUpdate({ cest }, {
        $set: data,
    });
}

async function remove(cest: string) {
    return await CestSchema.findOneAndRemove({cest});
}

export default { create, get, getById, update, remove, getByNcm }