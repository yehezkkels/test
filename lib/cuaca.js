const axios = require('axios')

const cuaca = (query) => {
    return new Promise((resolve, reject) => {
        if (typeof query === 'undefined') { reject('harap masukan query.') }
        var url = `https://mhankbarbars.herokuapp.com/api/cuaca?q=${query}&apiKey=N2Ws9kp3KTDYtry5Jjyz`
        axios.get(url)
            .then(res => {
                const { tempat,cuaca,angin,kelembapan,suhu } = res.data.result
                resolve({ hasil })
             })
    })
}

module.exports = cuaca
