const StarshipCard = ({starship}) => {

    return (
        <div className='.card'>
            <h3>{starship.name}</h3>
            <p>Class: {starship.starship_class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Model: {starship.model}</p>
        </div>
    );
};

export default StarshipCard;