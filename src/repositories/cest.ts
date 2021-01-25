import CestSchema from '@db/schemas/cest'

async function create(data: any) {
    const cest = new CestSchema(data);
    return await cest.save();
}

async function get() {
    return await CestSchema.find({},'cest ncm descricao');
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

export default { create, get, getById, update, remove }