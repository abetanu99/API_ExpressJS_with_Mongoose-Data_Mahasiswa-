const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mhsSchema = new Schema({
  nama: String,
  email: String
});

module.exports = mongoose.model('mahasiswa', mhsSchema);