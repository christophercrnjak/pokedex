let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    currentPokemon = await response.json();
    console.log('Loaded pokemon ', currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo() {
    let pokeName = currentPokemon['name'];
    let pokeImg = currentPokemon['sprites']['other']['home']['front_default'];
    let pokeId = currentPokemon['id'];
    document.getElementById('pokemonName').innerHTML = capitalizeFirstLetter(pokeName);
    document.getElementById('id').innerHTML = `# ${pokeId}`;
    document.getElementById('pokemon_image').src = pokeImg;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}