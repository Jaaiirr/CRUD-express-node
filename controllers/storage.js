const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL;
//Obtener todos los registros
const getItems = async (req, res) => {
  const data = await storageModel.find({});

  res.send({ data });
};
// Obtener un solo registro
const getItem = () => { };

// Crear nuevo registro 
const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(file);

  const fileData = {
    fileName: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  const data = await storageModel.create(fileData);
  res.send({ data });
};

//Aactualizar un registro
const updateItem = () => { };

//Eliminar un registro
const deleteItem = () => { };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };