const https = require('https')
const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/44.1545,-75.7088';

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log('json converted to string!');

    })

    response.on('end', () => {
        console.log('At the end!');

        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()