// const API_KEY = '<YOUR_API_KEY_HERE>';
const BASE_URL = `https://swapi.info/api/starships`;

const show = async () => {
  try {
    const res = await fetch(BASE_URL);
    
    if (!res.ok) {
        throw new Error('Failed to fetch starships.');
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { show };