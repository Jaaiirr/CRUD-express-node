const mongoose = require('mongoose');

const TrackScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL"
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String
      },
      nationality: {
        type: String
      },
    },
    duration: {
      start: {
        type: Number
      },
      end: {
        type: Number
      },
    },
    mediaId: {
      // type: mongoose.Types.ObjectId,
      type: String,
    }
  },
  {
    timestamps: true, // Agrega las columnas de createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("tracks", TrackScheme); //Recibe el nombre de la tabla/coleccion y el Schema