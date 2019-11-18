// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = "https://petdibs.herokuapp.com/pets/";

// Option functions.
const listPets = () => {
  axios.get('https://petdibs.herokuapp.com/pets/')
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError(`Could not list the pets: ${error.response.data}`)
  });
}

const showDetails = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to show details for a pet without selecting it!");
    return;
  }

  axios.get(`https://petdibs.herokuapp.com/pets/${selectedPet}`)
  .then((response) => {
    setResult(response.data)
  })
  .catch((error) => {
    setError(`failed to display details: ${error.response.data}`)
  })
}

const removePet = (selectedPet) => {
  if (!selectedPet) {
    setError("You tried to remove a pet without selecting it!");
    return;
  }

  axios.delete(`https://petdibs.herokuapp.com/pets/${selectedPet}`)
  .then((response) => {
    setResult('This pet has been adopted!')
  })
  .catch((error) => {
    setError('failed to remove pet: ${error.response.data}')
  })
}

const addPet = (petInfo) => {
  // Fill out as part of Wave 4.
}

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets: listPets,
  showDetails: showDetails,
  removePet: removePet,
  addPet: addPet
}
