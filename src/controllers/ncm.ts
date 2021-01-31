import { Request, Response } from "express"
import NcmRepository from '@repositories/ncm'
import CestRepository from '@repositories/cest'
import { format } from '@utils/fotmat'

function error(err: Error, res: Response, status: number) {
    res.status(status).send({ error: err })
}

async function create(req: Request, res: Response) {
    try {
        let { ncm, descricao, estado, ex, tipo, vigenciaInicio, vigenciaFim, chave, versao, fonte } = req.body
        if (!ncm) throw ({ errors: "Dados inválidos.", status: 400 });

        ncm = format(ncm, 'ncm')
        const getNcm = await NcmRepository.getById(ncm);
        if (getNcm.length) {
            const updateNcm = await NcmRepository.update(ncm, { descricao, estado, ex, tipo, vigenciaInicio, vigenciaFim, chave, versao, fonte});
            res.status(200).json(updateNcm)
            return;
        }
        const createNcm = await NcmRepository.create({ ncm, descricao, estado, ex, tipo, vigenciaInicio, vigenciaFim, chave, versao, fonte });
        res.status(201).json(createNcm)
    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function get(req: Request, res: Response) {
    try {
        let { limit, skip } = req.query as any;
        let { uf } = req.params
        if (!uf) uf = '';

        const getNcm = await NcmRepository.get(uf.toUpperCase(), limit, skip);
        if (!getNcm.length) throw ({ errors: "Não encontrado", status: 404 });

        res.status(200).json(getNcm)
    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function getById(req: Request, res: Response) {
    try {

        let { ncm, uf } = req.params
        if (!uf) uf = '';
        if (!ncm) throw ({ errors: "Ncm não informado.", status: 400 });

        const getNcm = await NcmRepository.getById(ncm, uf.toUpperCase());
        if (!getNcm.length) throw ({ errors: "Não encontrado", status: 404 });

        const cestsFull = await CestRepository.getByNcm({ ncm: { $regex: new RegExp('^' + ncm, 'gm') } }) 
        const cestsInitial = await CestRepository.getByNcm({ ncm: { $regex: new RegExp('^' + ncm.slice(0, 4) + '$', 'gm') } }) 
        
        const ncms = [] as any[];

        getNcm.forEach((n: any) => ncms.push({ ...n['_doc'], cests: [...cestsFull, ...cestsInitial] }))

        res.status(200).json(ncms);

    } catch (e) {
        error(e, res, e?.status ? e.status : 500)
    }
}

async function update(req: Request, res: Response) {
    try {
        let ncm = req.params.ncm
        if (!ncm) throw ({ errors: "Ncm não informado.", status: 400 });

        let { descricao, estado, ex, tipo, vigenciaInicio, vigenciaFim, chave, versao, fonte } = req.body
        let data: any = {}
        if (descricao) data.descricao = descricao;
        if (estado) data.estado = estado;
        if (ex) data.ex = ex;
        if (tipo) data.tipo = tipo;
        if (vigenciaInicio) data.vigenciaInicio = vigenciaInicio;
        if (vigenciaFim) data.vigenciaFim = vigenciaFim;
        if (chave) data.chave = chave;
        if (versao) data.versao = versao;
        if (fonte) data.fonte = fonte;

        const get = await NcmRepository.getById(ncm);
        if (get.length) {
            const updateNcm = await NcmRepository.updateByDesc(ncm, descricao, data);
            if (!updateNcm) {
                throw ({ errors: "Não atualizado.", status: 404 })
            } else{
                const getNcm = await NcmRepository.getById(ncm);
                res.status(200).json(getNcm)
            }
        } else {
            const createNcm = await NcmRepository.create({ ncm, descricao, estado, ex, tipo, vigenciaInicio, vigenciaFim, chave, versao, fonte });
            res.status(201).json(createNcm)
        }
    } catch (e) {
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