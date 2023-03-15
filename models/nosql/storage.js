const mongoose = require('mongoose');

const StorageScheme = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    fileName: {
      type: String,
    },
  },
  {
    timestamps: true, // Agrega las columnas de createdAt, updatedAt
    versionKey: false,
  },
);

module.exports = mongoose.model("storages", StorageScheme); //Recibe el nombre de la tabla/coleccion y el Schema