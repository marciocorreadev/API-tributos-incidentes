import CestRepository from '@repositories/cest'
import NcmRepository from '@repositories/ncm'
import { format, removeSynbols } from '@utils/fotmat'
import { csvToJSON, xlsxToJSON } from '@utils/converts'
import INcm from '@models/Ncm'
import fs from 'fs'

async function importCests() {
    const tabelaCest = `${__dirname}\\..\\..\\docs\\cest\\cest.xlsx`
    const cests = xlsxToJSON(tabelaCest)
    for await (let cest of cests) {
        const data = {
            cest: format(cest.CEST, 'cest'),
            descricao: cest['Descrição CEST'],
            ncm: removeSynbols(cest['NCM/SH'])
        }
        console.log(cest['NCM/SH'], data.ncm)
        try {
            const getCest = await CestRepository.getById(data.cest)
            if (!getCest.length) {
                await CestRepository.create(data)
                console.log(`Cest ${data.cest} criado.`)
            } else {
                const cestExist = getCest.find((c) => c.descricao === data.descricao && c.cest === data.cest && c.ncm === data.ncm)
                if (cestExist) {
                    await CestRepository.update(data.cest, data)
                    console.log(`Cest ${data.cest} atualizado.`)
                } else {
                    await CestRepository.create(data)
                    console.log(`Cest ${data.cest} criado.`)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}

async function importNcms() {
    const dir = `${__dirname}\\..\\..\\docs\\ncm\\`;
    const files = fs.readdirSync(dir)
    for await (let file of files) {
            const estado = file.slice(12, 14)
            const ncms = await csvToJSON(`${dir}${file}`) as any[];
            for await (let ncm of ncms) {
                const data = {
                    ncm: format(ncm.codigo, 'ncm'),
                    descricao: ncm.descricao,
                    ex: ncm.ex,
                    tipo: ncm.tipo,
                    vigenciaInicio: ncm.vigenciainicio,
                    vigenciaFim: ncm.vigenciafim,
                    chave: ncm.chave,
                    versao: ncm.versao,
                    fonte: ncm.fonte,
                    estado: {
                        [estado]: {
                                federal: ncm.nacionalfederal,
                                importados: ncm.importadosfederal,
                                estadual: ncm.estadual,
                                municipal: ncm.municipal,
                            }
                        }
                } as any;
            
                if (data.ncm === '22021000') {
                try {
                    const getNcm: INcm[] = await NcmRepository.getById(data.ncm);
                    if (!getNcm.length) {
                        console.log(`ncm ${data.ncm} cadastrado do zero`)
                        await NcmRepository.create(data)
                    } else {
                        const ncmExist = getNcm.find((n) =>  n.descricao === data.descricao && n.ex === data.ex && n.tipo === data.tipo)
                        if (!!ncmExist) {
                            await NcmRepository.updateByDesc(data.ncm, data.descricao, { estado: { ...data.estado, ...ncmExist.estado } })
                        } else {
                            await NcmRepository.create(data)
                        }
                    }
                    } catch (e) {
                        console.log('ERRO:', e);
                    }
                }
            
            }
        }

}

importCests()
importNcms()

