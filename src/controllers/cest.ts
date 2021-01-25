import { Request, Response } from "express"
import CestRepository from '@repositories/cest'
import { format, removeSynbols } from '@utils/fotmat'

function error(err: Error, res: Response, status: number ) {
    res.status(status).send({ error: err })
}

async function create(req: Request, res: Response) {
    try {

        let { ncm, cest, descricao } = req.body
        if (!ncm || !cest || !descricao) throw ({ errors: "Dados inválidos.", status: 400 });

        ncm = removeSynbols(ncm)
        cest = format(cest, 'cest')

        const createCest = await CestRepository.create({ ncm, cest, descricao });

        res.status(201).json(createCest)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function get(req: Request, res: Response) {
    try {

        const getCest = await CestRepository.get();
        
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
        
        const getCest = await CestRepository.getById(cest);

        if (!getCest.length) throw ({ errors: "Nada encontrado", status: 404 });

        res.status(200).json(getCest)

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function update(req: Request, res: Response) {
    try {
        let cest = req.params.cest
        if (!cest) throw ({ errors: "Cest não informado.", status: 400 });

        let { ncm, descricao } = req.body
        let data: any = {}
        if (ncm) data.ncm = removeSynbols(ncm)
        if (descricao) data.descricao = descricao;

        const updateCest = await CestRepository.update(cest, data);
        if (!updateCest) throw ({ errors: "Não atualizado.", status: 404 });

        const getCest = await CestRepository.getById(data.cest);
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

        const removeCest = await CestRepository.remove(cest);
        if (!removeCest) throw ({ errors: "Não removido.", status: 404 });

        res.status(200).json(removeCest)
    } catch (e) {
        res.json(e)
        error(e, res, e?.status ? e.status : 500)
    }
}

export default { create, get, getById, update, remove }