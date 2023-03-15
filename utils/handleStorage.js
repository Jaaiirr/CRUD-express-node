const multer = require('multer');

//Configuracion multer
//Multer espera como minimo dos parametros
//diskStorage y filename
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const path = `${__dirname}/../storage`;
    callback(null, path);
  },
  filename: function (req, file, callback) {
    const extension = file.originalname.split('.').pop();
    const filename = `file-${Date.now()}.${extension}`;
    callback(null, filename);

  }
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;