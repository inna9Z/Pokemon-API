const createAbilityList = (abilities) => {
    const abilityList = document.createElement('ul');
    abilityList.id = 'abilities';

    abilities.forEach((ability) => {
        const abilityItem = document.createElement('li');
        abilityItem.textContent = ability.ability.name;
        abilityList.appendChild(abilityItem);
    });

    return abilityList;
};
export default createAbilityList;
