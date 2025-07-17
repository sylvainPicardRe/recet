import axios from 'axios'
import mockedData from '../data/recipes.json'

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true'

const fetchAllRecipes = async () => {
  try {
    const response = await axios.get(mockedData)

    const allRecipes = response.data.data

    console.log(allRecipes)

    return allRecipes
  } catch (error) {
    console.log('Erreur lors de la récupération des recettes:', error)
  }
}
