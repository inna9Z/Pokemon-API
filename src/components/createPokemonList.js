import createAbilityList from '../handlers/createAbilityList.js';

const createPokemonList = (pokemonData) => {
    const container = document.createElement('div');
    container.className = 'pokemon-container';
    container.id = 'container';

    const name = document.createElement('h2');
    name.innerText = pokemonData.name;
    name.id = 'name';

    const img = document.createElement('img');
    img.src = pokemonData.sprites.front_default;
    img.alt = `${pokemonData.name} Images`;
    img.id = 'img';

    const abilitiesHandlers = document.createElement('h3');
    abilitiesHandlers.innerText = 'Abilities: ';
    const abilitiesList = createAbilityList(pokemonData.abilities);

    container.append(name, img, abilitiesHandlers, abilitiesList);
    return container;
};

export default createPokemonList;
