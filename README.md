# API-tributos-incidentes
#### API que retorna dados tributários da Lei da Transparência – Lei 12.741/2012.

## Usando as seguintes técnologias
- NodeJs
- Typescript
- Express
- MongoDB

##Instalação

## Rotas
### Index

| Métodos  | Endereço  | Retorno |
| ------------ |---------------|-----|
| `GET`      | /        | Detalhes API  |
| `GET`      | /ping       | Ping |


```sh
> get - /
```

<!DOCTYPE html>
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
      <h2>Rotas NCM</h2>
      <hr>
      <p>codigo: código NCM para mercadorias ou NBS para serviços, verificar o campo “tipo”.</p>
      <p>ex: Exceção do TIPI, deve ser utilizado com conjunto com o código NCM para encontracorretamente a alíquota a ser utilizada.</p>
      <p>Tipo: Tipo do código, pode assumir 0 para NCM ou 1 para NBS, a antiga tabela LC 116 nãoexiste mais.</p>
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
</html>

> get - /ping
```json
{
  "status": "OK",
  "time": "03:49:47"
}
```


### NCM

| Métodos  | Endereço  | Retorno |
| ------------ |---------------|-----|
| `GET`      | /ncm        | todos os dados  |
| `GET`      | /ncm/{codigoNcm}/{uf}        | Selecionar único |
| `POST`      | /ncm/        | Cadastrar |
| `PUT`      | /ncm/{codigoNcm}        | Editar |
| `PATCH`      | /ncm/{codigoNcm}        | Editar |
| `DELETE`      | /ncm/{codigoNcm}        | Deletar |

> Get - /ncm/AL?skip=10&limit=2
```JSON
[
  {
    "_id": "6015ef1e26050c0530ee8174",
    "ncm": "01023190",
    "descricao": "Outros b�falos reprodutores,de raca pura",
    "ex": "",
    "tipo": "0",
    "vigenciaInicio": "01/11/2020",
    "vigenciaFim": "31/01/2021",
    "chave": "5DC0AE",
    "versao": "20.2.C",
    "fonte": "IBPT/empresometro.com.br",
    "estado": {
      "AL": {
        "federal": "4.20",
        "importados": "6.20",
        "estadual": "18.00",
        "municipal": "0.00"
      }
    }
  },
  {
    "_id": "6015ef1e26050c0530ee8175",
    "ncm": "01023911",
    "descricao": "Outros b�falos para reprodu��o, prenhe ou com cria ao pe",
    "ex": "",
    "tipo": "0",
    "vigenciaInicio": "01/11/2020",
    "vigenciaFim": "31/01/2021",
    "chave": "5DC0AE",
    "versao": "20.2.C",
    "fonte": "IBPT/empresometro.com.br",
    "estado": {
      "AL": {
        "federal": "4.20",
        "importados": "6.70",
        "estadual": "18.00",
        "municipal": "0.00"
      }
    }
  }
]
```

> Get - /ncm/22021000
```JSON
[
 [
  {
    "_id": "6015ef6a26050c0530ee869b",
    "ncm": "22021000",
    "descricao": "Agua incl.mineral/gaseif.adicion.acucar, aromatizada,etc",
    "ex": "",
    "tipo": "0",
    "vigenciaInicio": "01/11/2020",
    "vigenciaFim": "31/01/2021",
    "chave": "5DC0AE",
    "versao": "20.2.C",
    "fonte": "IBPT/empresometro.com.br",
    "estado": {
      "TO": {
        "federal": "14.48",
        "importados": "20.95",
        "estadual": "29.00",
        "municipal": "0.00"
      },
      "SP": {
        "federal": "14.76",
        "importados": "22.45",
        "estadual": "18.00",
        "municipal": "0.00"
      },
      "...": "..."
    },
    "cests": [
      {
        "_id": "60161642f3330d16e81a0eff",
        "cest": "0300700",
        "descricao": "Águas minerais, potáveis ou naturais, gasosas ou não, inclusive gaseificadas ou aromatizadas artificialmente, exceto os refrescos e refrigerantes",
        "ncm": "22021000"
      },
      {
        "_id": "60161664f3330d16e81a115e",
        "cest": "1711000",
        "descricao": "Refrescos e outras bebidas prontas para beber, à base de chá e mate",
        "ncm": "22021000"
      },
      {
        "_id": "60161664f3330d16e81a115f",
        "cest": "1711100",
        "descricao": "Refrescos e outras bebidas não alcoólicas, exceto os refrigerantes e as demais bebidas nos CEST 03.007.00 e 17.110.00",
        "ncm": "22021000"
      },
      {
        "_id": "60161642f3330d16e81a0f01",
        "cest": "0301000",
        "descricao": "Refrigerantes em garrafa com capacidade igual ou superior a 600 ml, exceto os classificados no CEST 03.011.01",
        "ncm": "2202"
      },
      {
        "_id": "60161642f3330d16e81a0f02",
        "cest": "0301100",
        "descricao": "Demais refrigerantes, exceto os classificados no CEST 03.010.00 e 03.011.01",
        "ncm": "2202"
      },
      {
        "_id": "60161642f3330d16e81a0f03",
        "cest": "0301101",
        "descricao": "Espumantes sem álcool",
        "ncm": "2202"
      }
    ]
  }
]
```


> Get - /ncm/22021000/DF
```JSON
[
  {
    "_id": "6015ef6a26050c0530ee869b",
    "ncm": "22021000",
    "descricao": "Agua incl.mineral/gaseif.adicion.acucar, aromatizada,etc",
    "ex": "",
    "tipo": "0",
    "vigenciaInicio": "01/11/2020",
    "vigenciaFim": "31/01/2021",
    "chave": "5DC0AE",
    "versao": "20.2.C",
    "fonte": "IBPT/empresometro.com.br",
    "estado": {
      "DF": {
        "federal": "15.04",
        "importados": "23.93",
        "estadual": "31.00",
        "municipal": "0.00"
      }
    },
    "cests": [
      {
        "_id": "60161642f3330d16e81a0eff",
        "cest": "0300700",
        "descricao": "Águas minerais, potáveis ou naturais, gasosas ou não, inclusive gaseificadas ou aromatizadas artificialmente, exceto os refrescos e refrigerantes",
        "ncm": "22021000"
      },
      {
        "_id": "60161664f3330d16e81a115e",
        "cest": "1711000",
        "descricao": "Refrescos e outras bebidas prontas para beber, à base de chá e mate",
        "ncm": "22021000"
      },
      {
        "_id": "60161664f3330d16e81a115f",
        "cest": "1711100",
        "descricao": "Refrescos e outras bebidas não alcoólicas, exceto os refrigerantes e as demais bebidas nos CEST 03.007.00 e 17.110.00",
        "ncm": "22021000"
      },
      {
        "_id": "60161642f3330d16e81a0f01",
        "cest": "0301000",
        "descricao": "Refrigerantes em garrafa com capacidade igual ou superior a 600 ml, exceto os classificados no CEST 03.011.01",
        "ncm": "2202"
      },
      {
        "_id": "60161642f3330d16e81a0f02",
        "cest": "0301100",
        "descricao": "Demais refrigerantes, exceto os classificados no CEST 03.010.00 e 03.011.01",
        "ncm": "2202"
      },
      {
        "_id": "60161642f3330d16e81a0f03",
        "cest": "0301101",
        "descricao": "Espumantes sem álcool",
        "ncm": "2202"
      }
    ]
  }
]
```


> Post - /ncm
```JSON
{
    "ncm": "22021000",
    "descricao": "Águas",
    "ex": "",
    "tipo": "0",
    "vigenciaInicio": "01/11/2020",
    "vigenciaFim": "31/01/2021",
    "chave": "5DC0AE",
    "versao": "20.2.C",
    "fonte": "IBPT/empresometro.com.br",
    "estado": {
      "AL": {
        "federal": "4.20",
        "importados": "6.20",
        "estadual": "18.00",
        "municipal": "0.00"
      },
      "...": "..."
    }
  }
```

> Put - /ncm/22021000

> Delete - /ncm/22021000

### CEST

| Métodos  | Endereço  | Retorno |
| ------------ |---------------|-----|
| `GET`      | /cest        | todos os dados  |
| `GET`      | /cest/{codigoCest}        | Selecionar único |
| `POST`      | /cest/        | Cadastrar |
| `PUT`      | /cest/{codigoCest}        | Editar |
| `DELETE`      | /cest/{codigoCest}        | Deletar |

> Get - /cest?limit=2&skip=20
```JSON
[
  {
    "_id": "60161638f3330d16e81a0e4b",
    "cest": "0101600",
    "descricao": "Espelhos retrovisores",
    "ncm": "70091000"
  },
  {
    "_id": "60161638f3330d16e81a0e4c",
    "cest": "0101700",
    "descricao": "Lentes de faróis, lanternas e outros utensílios",
    "ncm": "70140000"
  }
]
```
> Get - /cest/ncm/22021000
```JSON
[
  {
    "_id": "60161642f3330d16e81a0eff",
    "cest": "0300700",
    "descricao": "Águas minerais, potáveis ou naturais, gasosas ou não, inclusive gaseificadas ou aromatizadas artificialmente, exceto os refrescos e refrigerantes",
    "ncm": "22021000"
  },
  {
    "_id": "60161664f3330d16e81a115e",
    "cest": "1711000",
    "descricao": "Refrescos e outras bebidas prontas para beber, à base de chá e mate",
    "ncm": "22021000"
  },
  {
    "_id": "60161664f3330d16e81a115f",
    "cest": "1711100",
    "descricao": "Refrescos e outras bebidas não alcoólicas, exceto os refrigerantes e as demais bebidas nos CEST 03.007.00 e 17.110.00",
    "ncm": "22021000"
  },
  {
    "_id": "60161642f3330d16e81a0f01",
    "cest": "0301000",
    "descricao": "Refrigerantes em garrafa com capacidade igual ou superior a 600 ml, exceto os classificados no CEST 03.011.01",
    "ncm": "2202"
  },
  {
    "_id": "60161642f3330d16e81a0f02",
    "cest": "0301100",
    "descricao": "Demais refrigerantes, exceto os classificados no CEST 03.010.00 e 03.011.01",
    "ncm": "2202"
  },
  {
    "_id": "60161642f3330d16e81a0f03",
    "cest": "0301101",
    "descricao": "Espumantes sem álcool",
    "ncm": "2202"
  }
]
```

> Get - /cest/0101600
```JSON
[
  {
    "_id": "60161638f3330d16e81a0e4b",
    "cest": "0101600",
    "descricao": "Espelhos retrovisores",
    "ncm": "70091000"
  }
]
```

> Post -  /ncm
```JSON
{
	"cest": "0101600",
	"ncm": "22021000",
	"descricao": "Suco Manga."
}
```

> Put -  /ncm/0101600
```JSON
{
	"ncm": "22021000",
	"descricao": "Suco Manga."
}
```
> Delete -  /ncm/0101600


