/**
 * @jest-environment jsdom
 */

import createPokemonList from './createPokemonList.js';

describe('createPokemonList', () => {
    test('creates a container with the correct class', () => {
        const pokemonData = {
            name: 'Pikachu',
            sprites: { front_default: 'pikachu.png' },
            abilities: [],
        };

        const container = createPokemonList(pokemonData);

        expect(container.className).toEqual('pokemon-container');
    });

    test('check the first child h2', () => {
        const pokemonData = {
            name: 'name',
            sprites: { front_default: 'name' },
            abilities: [],
        };

        const container = createPokemonList(pokemonData);
        const nameElement = container.querySelector('h2');

        expect(nameElement.nodeName).toEqual('H2');
    });
});
