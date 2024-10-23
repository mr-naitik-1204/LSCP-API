var express = require('express');
var router = express.Router();
var CC=require('../Controller/CategoryCC')
var AM = require('../Midlewhere/Autho')
var multer = require('multer')
/* GET users listing. */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })
router.post('/Create',upload.single('image'),AM.tokensecure,CC.Create)
router.get('/Suerch/:id',AM.tokensecure,CC.Suerch)
router.get('/show',AM.tokensecure,CC.show)
router.delete('/Delete/:id',AM.tokensecure,CC.Delete)
router.patch('/updete/:id',AM.tokensecure,CC.updete)

module.exports = router;
