import { useEffect, useState } from 'react';
import './App.css'
import * as starshipService from './services/starshipService.js'
import StarshipList from './components/StarshipList/StarshipList.jsx'
import StarshipSearch from './components/StarshipSearch/StarshipSearch.jsx'

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const fetchData = async (starship) => {
    const data = await starshipService.show(starship);
    setStarshipsData(data);
    setDisplayedStarships(data);
    // console.log('Data:', data);
  };

  const search = (starshipSearch) => {
    const searchedShips = starshipsData.filter(starship => starship.name.toLowerCase().includes(starshipSearch.toLowerCase()));
    const searchedModels = starshipsData.filter(starship => starship.model.toLowerCase().includes(starshipSearch.toLowerCase()));
    const searchedManufacturers = starshipsData.filter(starship => starship.manufacturer.toLowerCase().includes(starshipSearch.toLowerCase()));
    const searchedClasses = starshipsData.filter(starship => starship.starship_class.toLowerCase().includes(starshipSearch.toLowerCase()));

    if (searchedShips.length > 0) {
      console.log(1)
      console.log(searchedShips)
      setDisplayedStarships(searchedShips)
    } else if (searchedModels.length > 0) {
      console.log(2)
      console.log(searchedModels)
      setDisplayedStarships(searchedModels)
    } else if (searchedManufacturers.length > 0) {
      console.log(3)
      console.log(searchedManufacturers)
      setDisplayedStarships(searchedManufacturers)
    } else if (searchedClasses.length > 0) {
      console.log(4)
      console.log(searchedClasses)
      setDisplayedStarships(searchedClasses)
    } else {
      console.log(5)
    }

    // setDisplayedStarships(searchedShips);
  }

  const resetSearch = () => {
    setDisplayedStarships(starshipsData);
  }

  useEffect(() => {
    fetchData();    
  }, []);

  return (
    <>
      <main>
        <h1>Star Wars API</h1>
        <StarshipSearch search={search} resetSearch={resetSearch} />
        <StarshipList displayedStarships={displayedStarships} />
      </main>
    </>
  );
};

export default App;