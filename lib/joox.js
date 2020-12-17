const axios = require('axios')

const joox = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan query.') }
        var url = `https://tobz-api.herokuapp.com/api/joox?q=${query}`
        axios.get(url)
            .then(res => {
                const { judul,mp3 } = res.data
                resolve({ hasil })
             })
    })
}

module.exports = joox
