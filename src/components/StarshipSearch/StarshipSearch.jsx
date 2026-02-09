import { useState } from 'react';

const StarshipSearch = (props) => {
    const [prevSearchTerm, setPrevSearchTerm] = useState('');
    const [storeSearch, setStoreSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.search(prevSearchTerm);
        setStoreSearch(prevSearchTerm);
        setPrevSearchTerm('');
    }

    const resetSearch = () => {
        setStoreSearch('');
        setPrevSearchTerm('');
        props.resetSearch();
    }

    return (
        <>
            <section>
            <h2>Search</h2>
            <p>{storeSearch ? `Previous Search Term: ${storeSearch}` : "Search for a starship by name."}</p>
            <p>{storeSearch ? <button onClick={resetSearch}>Show all starships</button> : null}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="searchTerm">Search Term: </label>
                <input
                id="searchTerm"
                type="text"
                onChange={(e) => setPrevSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            </section>
        </>
    );
};

export default StarshipSearch;