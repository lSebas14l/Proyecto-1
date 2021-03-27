callApi();

function callApi(){
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    let apiUrl = "https://api.thecatapi.com/v1/images/search";

    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(result => printData(result))
        .catch(error => console.log('error', error));
}

function printData(result){

    const API_FAIL = "La API no trajo información";

    const image = document.querySelector('#cat-photo');

    image.setAttribute('src', `${result[0].url}`);

    const title = document.querySelector('#cat-title');

    result[0].breeds[0] === undefined ? title.textContent = API_FAIL : title.textContent = `${result[0].breeds[0].name}`;

    const temperament = document.querySelector('#cat-temperament');

    result[0].breeds[0] === undefined ? temperament.textContent = API_FAIL : temperament.textContent = `${result[0].breeds[0].temperament}`;
}