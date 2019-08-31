// Create an app that loads a single random image for a specific breed, based on a user input. This app should account for the happy case when the breed is found, as well as the unhappy case when it is not. Use the endpoint described in the "RANDOM IMAGE FROM A BREED COLLECTION" section of this page of the DogAPI docs. Note that the API will return an HTTP status code of 404 along with a JSON object with info about the error if a request is made for a breed that can't be found.

$('.request_dog').submit(event => {
    event.preventDefault();
    let breed = $('.breed_input').val().toLowerCase();
    getImage(breed);
});

function getImage(dog) {
    fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayImage(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}


function displayImage(json) {
    console.log(json);
    if (json.status == "error") {
        $('.dog_image').html(`<p>Breed not found in database.</p>`)
    }
    else {
        $('.dog_image').html(`<img src=${json.message}>`)
    }
}
