const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const gltext = (teks) => {
    return new Promise((resolve, reject) => {
        if (typeof teks === 'undefined') { reject('masukan teks') }
        var gh = text.split(".gltext ")[1];
    var teks1 = gh.split("|")[0];
    var teks2 = gh.split("|")[1];
    axios.get(`http://inyourdream.herokuapp.com/glitch?kata1=${teks1}&kata2=${teks2}`).then((res) => {
      imageToBase64(res.data.status)
                    .then(data => {
                        var buf = Buffer.from(ress, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = gltext
