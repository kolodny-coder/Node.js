const fs = require('fs')


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Dan Kolodny'
data.planet = 'Marc'
data.age = '38'

const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData)

console.log(data.age)