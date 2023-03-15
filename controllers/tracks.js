const { tracksModel } = require('../models');

//Obtener todos los registros
const getItems = async (req, res) => {
  const data = await tracksModel.find({});

  res.send({ data });
};
// Obtener un solo registro
const getItem = () => { };

// Crear nuevo registro 
const createItem = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await tracksModel.create(body);
  res.send(data);
};

//Aactualizar un registro
const updateItem = () => { };

//Eliminar un registro
const deleteItem = () => { };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };