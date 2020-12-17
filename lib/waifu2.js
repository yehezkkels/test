const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const waifu2 = () => {
    return new Promise((resolve, reject) => {
        var url = `https://docs-jojo.herokuapp.com/api/waifu2`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.img)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = waifu2
