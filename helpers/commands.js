const eod = require('../routes/eod')

const commands = [
    {
        command: 'search_eod',
        describe: 'Pesquisa o "end of day" da ação.',
        builder: {
            symbols: {
                describe: 'Sigla da Ação',
                demandOption: true,
                type: 'String'
            }
        },
        handler: ({ symbols }) =>  {
            eod.get(symbols, (data) => eod.getDetails(data))
        } 
    },
]

module.exports = commands