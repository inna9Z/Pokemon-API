import loadHandler from '../handlers/loadHandler.js';

const loadEvent = () => {
    window.addEventListener('DOMContentLoaded', loadHandler);
};

export default loadEvent;
