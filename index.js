//DESARROLLA AQUI TUS SOLUCIONES

//EJERCICIO 02

async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

}


//EJERCICIO 01

const getRandomPokemon = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    let data = await response.json();
    let count = data.count;
    console.log(count);
    let randomId = Math.floor(Math.random() * count);
    console.log(randomId);
    let information = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    let datos = await information.json();
    console.log(datos);
    return datos;
}
