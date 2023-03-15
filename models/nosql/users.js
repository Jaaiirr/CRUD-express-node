const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String
    },
    role: {
      type: ['user', 'admin'],
      default: 'user'
    }
  },
  {
    timestamps: true, // Agrega las columnas de createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("users", UserScheme); //Recibe el nombre de la tabla/coleccion y el Schema