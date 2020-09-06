const axios = require('axios')
const { api, access_key } = require('../config.json')

const get = async (symbols, callback, query = '') => {
    const url = `${api}eod?${access_key}${query}&symbols=${symbols}`
    await axios
        .get(url)
        .then(({ data }) => callback(data.data))
        .catch((err) => console.log(err))
}

module.exports = {
    get
}