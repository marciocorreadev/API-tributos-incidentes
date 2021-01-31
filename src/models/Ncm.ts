export default interface INcm{
    ncm: string;
    descricao: string;
    ex: string;
    tipo: string;
    vigenciaInicio: string;
    vigenciaFim: string;
    chave: string;
    versao: string;
    fonte: string;
    estado?: object | any[];
    cests?: string;
}