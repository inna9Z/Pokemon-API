import dom from '../dom.js';

import createPokemonList from '../components/createPokemonList.js';
import getPokemonById from '../../apis/getPokemonById.js';
import updatePokemon from '../components/updatePokemon.js';
const loadPokemon = async () => {
    const pokemonExist = document.getElementById('container');

    const pokemonId = Number(dom.input.value);
    // const dataId = data.id;
    // // check if the same pokemon
    // if (pokemonId === data.id) {
    //     return;
    // }

    if (isNaN(pokemonId) || pokemonId <= 0) {
        dom.error.innerText = 'Please enter a valid pokemon ID';
        dom.root.append(dom.error);
        if (dom.container) {
            dom.container.remove();
        }
        return;
    }

    const data = await getPokemonById(pokemonId);

    if (!data) {
        dom.error.innerText = 'An error occurred';
        dom.root.append(dom.error);
        if (dom.container) {
            dom.container.remove();
        }
        return;
    }

    dom.error.remove();
    if (!pokemonExist) {
        const pokemonDom = createPokemonList(data); // Fixed function name
        dom.root.append(pokemonDom);
    } else {
        updatePokemon(data);
    }
};

export default loadPokemon;
