const axios = require('axios')
const chalk = require('chalk')
const { api, access_key } = require('../config.json')

const get = async (symbols, callback, query = '') => {
    const url = `${api}eod?${access_key}${query}&symbols=${symbols}`
    await axios
        .get(url)
        .then(({ data }) => callback(data.data))
        .catch((err) => console.log(chalk.bold.red(err)))
}

const getDetails = (items) => {
    items.map(({date, open, close, low, high}) => {
        const print = `
            ${chalk.bold.green(`Data => ${date}`)}
            ${chalk.bold.white(`Abertura => ${open}`)}
            ${chalk.bold.white(`Fechamento => ${close}`)}
            ${chalk.bold.blue(`Alta => ${high}`)}
            ${chalk.bold.red(`Baixa => ${low}`)}
        `
        console.log(print)
    })
}

module.exports = {
    get,
    getDetails
}