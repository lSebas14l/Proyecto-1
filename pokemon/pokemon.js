callApi();

function callApi(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    let pokemon = parseInt(Math.random() * (150 - 1) + 1);

    let apiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;


    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(result => printData(result))
        .catch(error => console.log('error', error));
}

function printData(result){
    
 console.log(result);

    const API_FAIL = "La API no trajo información";

    const image = document.querySelector('#pokemon-photo');

    image.setAttribute('src', `${result.sprites.front_default}`);

    const title = document.querySelector('#pokemon-title');

    result.name === undefined ? title.textContent = API_FAIL : title.textContent = `${result.name}`;

    const temperament = document.querySelector('#pokemon-temperament');

    result.abilities[0].ability.name === undefined ? temperament.textContent = API_FAIL : temperament.textContent = `${result.abilities[0].ability.name}`;
}