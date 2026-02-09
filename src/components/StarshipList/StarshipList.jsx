import StarshipCard from '../StarshipCard/StarshipCard.jsx'

const StarshipList = ({ displayedStarships }) => {
    return (
        <>
            <h3>Starships</h3>
            <p>Number of results: {displayedStarships.length}</p>
            <div>
                <ul>
                {displayedStarships.map((starship, index) => {
                    return (
                        <li className='.card' key={index}>
                            <StarshipCard starship={starship} />
                        </li>
                    )
                })}
            </ul>
            </div>
        </>
    )
}

export default StarshipList;