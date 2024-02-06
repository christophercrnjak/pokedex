let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/gengar';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded pokemon ', currentPokemon['name'], currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo() {
    let pokeName = currentPokemon['name'];
    let pokeImg = currentPokemon['sprites']['other']['home']['front_default'];
    let pokeId = currentPokemon['id'];
    document.getElementById('pokemonName').innerHTML = capitalizeFirstLetter(pokeName);
    document.getElementById('id').innerHTML = `# ${pokeId}`;
    document.getElementById('pokemon_image').src = pokeImg;
    renderPokeTypes();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function renderPokeTypes() {
    let pokeTypesJSON = currentPokemon['types'];
    for (let i = 0; i < pokeTypesJSON.length; i++) {
        const pokeType = pokeTypesJSON[i]['type']['name'];
        document.getElementById('pokeType').innerHTML += /*html*/`
            <div>${pokeType}</div>
        `;
    }
}