const fs = require('fs')
const fetch = require('node-fetch');
let camList = require('./config.json') // example listed in config.json

fs.watchFile('config.json', () => {
    camList = JSON.parse(fs.readFileSync('./config.json').toString())
    console.log('reloaded')
})
async function saveImage() {
    let d = new Date();
    let name = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds()
    for (let i = 0; i < camList.IPs.length; i++) {
        console.log(camList.IPs[i])
        try {
            fs.mkdirSync('./cameras/' + i.toString(), {
                recursive: true
            }) // basically see if folder already exists
        } catch (error) {}

        let imgcontent = camList.IPs[i]
        try {
            let res = await fetch(imgcontent)
            if (res.ok) {} // if response is ok, do nothing
            else {
                throw 'An error occured, please try again'; // if it goes wrong do this
            }
            const file = fs.createWriteStream('./cameras/' + i + '/' + name + '.jpg') // save file to my pc pls
            res.body.pipe(file); // let goooo
        } 
        catch (error) {console.log(error)}
    }
}

setInterval(saveImage, 1800000)