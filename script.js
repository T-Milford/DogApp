// Create an app that loads a single random image for a specific breed, based on a user input. This app should account for the happy case when the breed is found, as well as the unhappy case when it is not. Use the endpoint described in the "RANDOM IMAGE FROM A BREED COLLECTION" section of this page of the DogAPI docs. Note that the API will return an HTTP status code of 404 along with a JSON object with info about the error if a request is made for a breed that can't be found.

$('.request_dog').submit(event => {
    event.preventDefault();
    let number = $('.number_input').val();
    getImage(number);
});

function getImage(num) {
    fetch('https://dog.ceo/api/breeds/image/random/' + num.toString())
        .then(response => response.json())
        .then(responseJson => displayImage(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImage(json) {
    console.log(json);
    let image = json.message;
    for (count = 0; count < image.length; count++) {
        $('.dog_image').append(
            `<img src="${image[count]}">`
            ).css()
        };
    }

