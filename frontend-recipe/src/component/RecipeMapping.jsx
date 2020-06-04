import axios from 'axios'

const UserRecipe = 'NewRecipe';
const LocalHost_URL = 'http://localhost:8080'
const UserRecipe_Backend_URL = `${LocalHost_URL}/recipe/${UserRecipe}`

class RecipeMapping {

    retrieveAllRecipe(name) {
        return axios.get(`${UserRecipe_Backend_URL}/ingredients`);
    }

    retrieveRecipe(name, id) {
        return axios.get(`${UserRecipe_Backend_URL}/ingredients/${id}`);
    }

    deleteRecipe(name, id) {
        return axios.delete(`${UserRecipe_Backend_URL}/ingredients/${id}`);
    }

    updateRecipe(name, id, newRecipe) {
        return axios.put(`${UserRecipe_Backend_URL}/ingredients/${id}`, newRecipe);
    }

    createRecipe(name, newRecipe) {
        return axios.post(`${UserRecipe_Backend_URL}/ingredients/`, newRecipe);
    }
}

export default new RecipeMapping()