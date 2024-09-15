const mahasiswas = require("../models/model")

getMhs = async (req, res) => {
  await mahasiswas.find().
  then((mahasiswa)=>{
    return res.status(201).json(mahasiswa)
  }).
  catch((err) => {
    return res.status(400).json({
      err,
      message: 'Data Mahasiswa Error Update!',
    })
  })
}

getMhsById = async (req, res) => {
  const kit = await mahasiswas.find({nama : req.params.id}).
  then((mahasiswa)=>{
    if (Object.keys(mahasiswa).length == 0) {
      return res.status(400).json({
        success: false,
        data: mahasiswa,
        message:'Data Mahasiswa tidak ada'
      })
    }
    return res.status(201).json(mahasiswa)
  }).
  catch((err) => {
    return res.status(400).json({
      err,
      message: 'Data Mahasiswa Error',
    })
  })
}

insertMhs = async (req,res) => {
  const mhs = new mahasiswas(req.body)
  if (Object.keys(req.body).length == 0) {
    return res.status(400).json({ success: false, message: 'Data Kosong !'})
  }
  mhs.save().then(()=>{
    res.status('201').json({
      success: true,
      data: mhs.nama,
      message: 'Data Mahasiswa berhasil di insert!',
    })
  }).catch((error)=>{
    return res.status(400).json({
      error,
      message: 'Data Mahasiswa Error Insert!',
    })
  })
}

deleteMhs = async (req,res) => {
  await mahasiswas.findOneAndDelete({nama : req.params.id}).
  then((mahasiswa)=>{
    if (!mahasiswa) {
      return res.status(400).json({
        success: false,
        data: mahasiswa,
        message:'Data Mahasiswa tidak ada'
      })
    }
    return res.status(201).json({
      success: true,
      data: mahasiswa,
      message:'Data Mahasiswa berhasil di Delete'
    })
  }).
  catch((err)=>{
    return res.status(400).json({
      err,
      message: 'Data Mahasiswa Error Delete!',
    })
  })
}

updateMhs = async (req,res) => {
  await mahasiswas.findOneAndUpdate({nama : req.params.id},req.body).
  then((mahasiswa)=>{
    if(!mahasiswa){
      return res.status(400).json({
        success: false,
        data: mahasiswa,
        message:'Data Mahasiswa tidak ada'
      })
    }
    return res.status(201).json({
      success: true,
      data: mahasiswa,
      message:'Data Mahasiswa berhasil di Update'
    })
  }).catch((err)=>{
    return res.status(400).json({
      err,
      message: 'Data Mahasiswa Error Update!',
    })
  })
}

module.exports = {getMhs,getMhsById,insertMhs,deleteMhs,updateMhs}
 