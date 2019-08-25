// Create an app that lets users choose to display between 1 and 50 random dog images, 
// then prints the results to the console. The app should feature a form with a required input where users 
// indicate the number of images to retrieve, and the input should default to 3. Use the endpoint described 
// in the "DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION" section of this page of the DogAPI docs.
$('.request_dog').submit(event => {
    event.preventDefault();
    let number = $('.number_input').val();
    getImage(number);
});

function getImage(num) {

    console.log(num.toString());

    // let address = 'https://dog.ceo/api/breeds/image/random/';

    fetch('https://dog.ceo/api/breeds/image/random/')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

