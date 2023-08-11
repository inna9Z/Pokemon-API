import createAbilityList from './createAbilityList.js';

const updatePokemon = (pokemonData) => {
    document.getElementById('name').innerText = pokemonData.name;

    const img = document.getElementById('img');
    img.src = pokemonData.sprites.front_default;
    img.alt = `${pokemonData.name} Image`;

    const abilitiesList = createAbilityList(pokemonData.abilities);
    const oldList = document.getElementById('abilities'); // Corrected ID
    oldList.replaceWith(abilitiesList);
};

export default updatePokemon;
