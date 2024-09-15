const express = require('express')
const app = express()
const route = require('./routes/route')
const koneksi = require('./utils/db')

app.use(express.json()) //untuk req body
app.use(express.urlencoded({extended: true})) //untuk req body


koneksi.then(()=> {
    console.log("connected!")
}).catch(err => console.log(err) )

app.use(route)

app.listen(3000, function(){
    console.log("server is okey")
})