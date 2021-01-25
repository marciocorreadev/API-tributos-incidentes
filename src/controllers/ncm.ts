import { Request, Response } from "express"
import NcmRepository from '@repositories/ncm'
import { format, removeSynbols } from '@utils/fotmat'

function error(err: Error, res: Response, status: number) {
    res.status(status).send({ error: err })
}

async function create(req: Request, res: Response) {
    try {
        let { ncm, descricao, estados } = req.body
        if (!ncm || !descricao) throw ({ errors: "Dados inválidos.", status: 400 });

        ncm = format(ncm, 'ncm')
        const createNcm = await NcmRepository.create({ ncm, descricao });

        res.status(201).json(createNcm)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function get(req: Request, res: Response) {
    try {

        const getNcm = await NcmRepository.get();

        if (!getNcm.length) throw ({ errors: "Não encontrado", status: 404 });

        res.status(200).json(getNcm)

    } catch (e) {

        error(e, res, e?.status ? e.status : 500)

    }
}

async function getById(req: Request, res: Response) {
    try {

        let { ncm } = req.params
        if (!ncm) throw ({ errors: "Ncm não informado.", status: 400 });

        const getNcm = await NcmRepository.getById(ncm);

        if (!getNcm.length) throw ({ errors: "Não encontrado", status: 404 });

        res.status(200).json(getNcm)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function update(req: Request, res: Response) {
    try {
        let ncm = req.params.ncm
        if (!ncm) throw ({ errors: "Ncm não informado.", status: 400 });

        let { descricao } = req.body
        let data: any = {}
        if (descricao) data.descricao = descricao;

        const updateNcm = await NcmRepository.update(ncm, data);
        if (!updateNcm) throw ({ errors: "Não atualizado.", status: 404 });

        const getNcm = await NcmRepository.getById(ncm);
        res.status(200).json(getNcm)
    } catch (e) {
        res.json(e)
        error(e, res, e?.status ? e.status : 500)
    }
}

async function remove(req: Request, res: Response) {
    try {
        let ncm = req.params.ncm
        if (!ncm) throw ({ errors: "Ncm não informado.", status: 400 });

        const removeNcm = await NcmRepository.remove(ncm);
        if (!removeNcm) throw ({ errors: "Não removido.", status: 404 });

        res.status(200).json(removeNcm)
    } catch (e) {
        res.json(e)
        error(e, res, e?.status ? e.status : 500)
    }
}

export default { create, get, getById, update, remove }