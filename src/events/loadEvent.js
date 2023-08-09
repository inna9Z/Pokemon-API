
import loadPokemon from '../handlers/loadPokemon.js';
import dom from '../dom.js';
const loadEvent = () => {


dom.btn.addEventListener('click', loadPokemon);
dom.input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        loadPokemon();
    }
});
};

export default loadEvent;
