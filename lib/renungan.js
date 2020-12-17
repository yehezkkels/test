const axios = require('axios')

const renungan = () => {
    return new Promise((resolve, reject) => {
        var url = `https://docs-jojo.herokuapp.com/api/renungan`
        axios.get(url)
            .then(res => {
                const { isi,judul,pesan } = res.data
                resolve({ isi,judul,pesan })
             })
    })
}

module.exports = renungan
