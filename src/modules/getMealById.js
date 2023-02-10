import axios from 'axios';

const getMealById = async (id) => {
  try {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const result = res.data;
    return result;
  } catch (error) {
    return null;
  }
};

export default getMealById;