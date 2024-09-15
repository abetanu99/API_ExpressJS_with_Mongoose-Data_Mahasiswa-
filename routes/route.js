const express = require('express')
const app = express.Router()
const controller = require('../controllers/controller')


app.post('/mhs/inp',controller.insertMhs)

app.put('/mhs/upd/:id',controller.updateMhs)

app.delete('/mhs/del/:id',controller.deleteMhs)

app.get('/mhs/:id',controller.getMhsById)

app.get('/mhs',controller.getMhs)

app.get('/',(res,req)=>{
})

module.exports = app