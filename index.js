// //DESARROLLA AQUI TUS SOLUCIONES

// //EJERCICIO 02

async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

}


// //EJERCICIO 01

const getRandomPokemon = async () => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    let data = await response.json();
    let count = data.count;
    let randomId = Math.floor(Math.random() * count);
    let information = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    let datos = await information.json();
    return datos;
}

//EJERCICIO 03

const ranmdomNumero03 = Math.floor(Math.random() * 1025);
const sectionPokemon = document.querySelector("#sectionPokemon");
const fragment = document.createDocumentFragment();

const urlBase03 = "https://pokeapi.co/api/v2"

const llamarApi = async (endpoint) => {
    try {
        const response = await fetch(`${urlBase03}${endpoint}`)
        let data;
        if (response.ok) {
            data = await response.json();
            return data;
        } else {
            throw ("Error con la data");
        }
    } catch (error) {
        throw error;
    }
}

const printImageAndName = (name, sprites) => {
    try {
        const imagenPokemon = document.createElement("IMG");
        imagenPokemon.setAttribute("src", sprites.front_default);
        imagenPokemon.setAttribute("alt", name)

        const tituloPokemon = document.createElement("H1");
        tituloPokemon.textContent = name;

        fragment.append(imagenPokemon);
        fragment.append(tituloPokemon);
        sectionPokemon.append(fragment);

        let imagen = sprites.front_default;
        let name = name;
        return `<section><img src= ${imagen} alt= ${name}><h1>${name}</h1></section>`


    } catch (error) {

    }
}

const getData = async () => {
    const { name, sprites } = await llamarApi(`/pokemon-form/${ranmdomNumero03}/`);
    console.log(name, sprites);
    printImageAndName(name, sprites);
}

getData();
// llamarApi("1/");



//EJERCICIO 04
const urlRandomDog = "https://dog.ceo/api/breeds/image/random"

const getRandomDogImage = async () => {
    try {
        const response = await fetch(urlRandomDog);
        let data;
        if (response.ok) {
            data = await response.json();
            let message = data.message;
            // console.log(message);
            return message;
        } else {
            throw ("Error con la data");
        }

    } catch (error) {
        throw error;
    }
}



// EJERCICIO 05

const ranmdomNumero = Math.floor(Math.random() * 1025);

const urlBase = "https://pokeapi.co/api/v2/pokemon-form"

const getRandomPokemonImage = async () => {
    try {
        const response = await fetch(`${urlBase}/${ranmdomNumero}/`)
        let data;
        if (response.ok) {
            data = await response.json();
            let imagen = data.sprites.front_default;
            return imagen;
        } else {
            throw ("Error con la data");
        }
    } catch (error) {
        throw error;
    }
}


//EJERCICIO 07



const urlBase07 = "https://rickandmortyapi.com/api/character"

const getRandomCharacter = async () => {
    try {
        const ranmdomNumero07 = Math.floor(Math.random() * 826);
        const response = await fetch(`${urlBase07}/${ranmdomNumero07}`)
        let data;
        if (response.ok) {
            data = await response.json();
            return data;
        } else {
            throw ("Error con la data");
        }
    } catch (error) {
        throw error;
    }
}


//EJERCICIO 08



const urlBase08 = "https://rickandmortyapi.com/api/character"

const getRandomCharacterInfo = async () => {
    try {
        const numeroRandom08 = Math.floor(Math.random() * 826);
        const response = await fetch(`${urlBase08}/${numeroRandom08}`);

        let data;
        let imgCaracter;
        let name;
        let episode;
        let firstEpisode;
        let dateEpisode;
        let data01;
        if (response.ok) {
            data = await response.json();
            name = data.name;
            episode = data.episode;
            imgCaracter = data.image;
        } else {
            throw ("Error con la data");
        }
        const responseEpisode = await fetch(episode[0]);
        if (response.ok) {
            data01 = await responseEpisode.json();
            firstEpisode = data01.name;
            dateEpisode = data01.air_date;
        } else {
            throw ("Error con la data01")
        }

        return { imgCaracter, name, episode, firstEpisode, dateEpisode };


    } catch (error) {
        throw error;
    }
}

