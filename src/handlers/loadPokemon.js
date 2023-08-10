import dom from '../dom.js';
import data from '../data.js';

import createPokemonList from '../components/createPokemonList.js';
import getPokemonById from '../../apis/getPokemonById.js';
import updatePokemon from '../components/updatePokemon.js';
const loadPokemon = async () => {
    const pokemonExist = document.getElementById('container');

    const pokemonId = Number(dom.input.value);

    // check if the same pokemon
    if (pokemonId === data.id) {
        return;
    }
    data.id = pokemonId;

    if (isNaN(pokemonId) || pokemonId <= 0) {
        dom.error.innerText = 'Please enter a valid pokemon ID';
        dom.root.append(dom.error);
        if (pokemonExist !== null) {
            pokemonExist.remove();
        }

        return;
    }

    const dataPokemonId = await getPokemonById(pokemonId);

    if (!dataPokemonId) {
        dom.error.innerText = 'An error occurred';
        dom.root.append(dom.error);
        if (pokemonExist !== null) {
            pokemonExist.remove();
        }

        return;
    }

    dom.error.remove();
    if (!pokemonExist) {
        const pokemonDom = createPokemonList(dataPokemonId); // Fixed function name
        dom.root.append(pokemonDom);
    } else {
        updatePokemon(dataPokemonId);
    }
};

export default loadPokemon;
