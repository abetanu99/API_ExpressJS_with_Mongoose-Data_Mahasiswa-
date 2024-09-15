const mongoose = require('mongoose');

const db = mongoose.connect("mongodb+srv://abetanu:beta0799@mahasiswa.fsdss.mongodb.net/abe?retryWrites=true&w=majority&appName=Mahasiswa");

module.exports = db
