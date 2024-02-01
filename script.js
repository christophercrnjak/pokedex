let currentPokemon;


// async function loadPokemon() {
//     let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
//     let response = await fetch(url);
//     currentPokemon = await response.json();

//     declarePokeVars();
//     test();
// }

function init() {
    test();
}

async function test() {
    let url = 'https://ex.traction.one/pokedex/pokemon/25';
    let response = await fetch(url).catch(errorFunction);
    let test = await response.json();
    console.log(test);

}

function errorFunction() {
    console.log('Fehler aufgetreten');
}

function declarePokeVars() {
    let pokeName = currentPokemon['name'];
    let pokeImg = currentPokemon['sprites']['other']['home']['front_default'];
    let pokeId = currentPokemon['id'];
    let pokeTypes1 = currentPokemon['types'][0]['type']['name'];
    let pokeTypes2 = currentPokemon['types'][1]['type']['name'];
    let pokeHeight = currentPokemon['height'];
    let pokeWeight = currentPokemon['weight'];

    renderPokeInfo(pokeName, pokeImg, pokeId, pokeTypes1, pokeTypes2, pokeHeight, pokeWeight);
}

function renderPokeInfo(pokeName, pokeImg, pokeId, pokeTypes1, pokeTypes2, pokeHeight, pokeWeight) {
    document.getElementById('pokemon_name').innerHTML = capitalizeFirstLetter(pokeName);
    document.getElementById('id').innerHTML = `#00${pokeId}`;
    document.getElementById('pokemon_image').src = pokeImg;
    document.getElementById('pokeType1').innerHTML = pokeTypes1;
    if (pokeTypes2) {
        document.getElementById('pokeType2').innerHTML = pokeTypes2;
    }
    document.getElementById('poke_height').innerHTML = pokeHeight;
    document.getElementById('poke_weight').innerHTML = pokeWeight;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// good information about pokemon in API, not used by now


// Description of the pokemon
// async function pokeText() {
//     let url = 'https://pokeapi.co/api/v2/pokemon-species/1/';
//     let response = await fetch(url);
//     let test = await response.json();
//     console.log(test);

//     document.getElementById('test').innerHTML = test['flavor_text_entries'][0]['flavor_text']
// }
