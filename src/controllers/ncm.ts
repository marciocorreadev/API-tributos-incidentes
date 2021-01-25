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
        const createCest = await NcmRepository.create({ ncm, descricao });

        res.status(201).json(createCest)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function get(req: Request, res: Response) {
    try {

        const getCest = await NcmRepository.get();

        if (!getCest.length) throw ({ errors: "Nada encontrado", status: 404 });

        res.status(200).json(getCest)

    } catch (e) {

        error(e, res, e?.status ? e.status : 500)

    }
}

async function getById(req: Request, res: Response) {
    try {

        let { cest } = req.params
        if (!cest) throw ({ errors: "Cest não informado.", status: 400 });

        const getCest = await NcmRepository.getById(cest);

        if (!getCest.length) throw ({ errors: "Nada encontrado", status: 404 });

        res.status(200).json(getCest)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function update(req: Request, res: Response) {
    try {
        let Cest = req.params.cest
        if (!Cest) throw ({ errors: "Cest não informado.", status: 400 });

        let { ncm, cest, descricao } = req.body
        let data: any = {}
        if (ncm) data.ncm = removeSynbols(ncm)
        if (cest) data.cest = format(cest, 'cest')
        if (descricao) data.descricao = descricao;

        const updateCest = await NcmRepository.update(Cest, data);
        if (!updateCest) throw ({ errors: "Não atualizado.", status: 404 });

        const getCest = await NcmRepository.getById(data.cest);
        res.status(200).json(getCest)
    } catch (e) {
        res.json(e)
        error(e, res, e?.status ? e.status : 500)
    }
}

async function remove(req: Request, res: Response) {
    try {
        let cest = req.params.cest
        if (!cest) throw ({ errors: "Cest não informado.", status: 400 });

        const removeCest = await NcmRepository.remove(cest);
        if (!removeCest) throw ({ errors: "Não removido.", status: 404 });

        res.status(200).json(removeCest)
    } catch (e) {
        res.json(e)
        error(e, res, e?.status ? e.status : 500)
    }
}

export default { create, get, getById, update, remove }