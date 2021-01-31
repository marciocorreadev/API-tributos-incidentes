import { Request, Response } from "express";

function index(request: Request, response: Response) {
    response.send(
        `<!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>API Tributos</title>
                <style>
                </style>
            </head>
            <body>
                <h1> API para improtar dados da lei de transparência – Lei 12.741/2012.</h1>

                <h2>Detalhes</h2>
                <hr>
                <p>codigo: código NCM para mercadorias ou NBS para serviços, verificar o campo “tipo”.</p>
                <p>ex: Exceção do TIPI, deve ser utilizado com conjunto com o código NCM para encontra corretamente a alíquota a ser utilizada.</p>
                <p>Tipo: Tipo do código, pode assumir 0 para NCM ou 1 para NBS, a antiga tabela LC 116 não existe mais.</p>
                <p>descricao: Descrição do NCM ou Tipo de Serviço.</p>
                <p>nacional: Alíquota nacional, adotada se a origem da mercadoria for: 0,3,4,5</p>
                <p>importado: Alíquota importado, adotada se a origem da mercadoria for: 1,2,6,7</p>
                <p>estadual: Alíquota estadual.</p>
                <p>municipal: Alíquota municipal quando prestação de serviços.</p>
                <p>VigenciaInicio: Início da vigência da tabela.</p>
                <p>VigenciaFim: Fim da vigência da tabela.</p>
                <p>Chave: Chave única que identifica a tabela utilizada.</p>
                <p>Versao: Versão atual da tabela.</p>
                <p>Fonte: Fonte dos dados, fixo IBPT.</p>

            </body>
        </html>`
    )
}

function ping(request: Request, response: Response) {
    response.json({ status: 'OK', time: new Date().toLocaleTimeString('pt-BR') }).status(200)
}

export default { index, ping }