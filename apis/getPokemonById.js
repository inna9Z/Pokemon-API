// get pokemon by id
const getPokemonById = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) { // Check if the response is not okay (status code other than 200)
            throw new Error(`An error occurred while fetching Pokemon: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return;
    }
};
export default getPokemonById;
