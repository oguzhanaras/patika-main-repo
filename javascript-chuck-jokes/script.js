const url = 'https://api.chucknorris.io/jokes/random';


function makeJoke() {
    fetch(url)
    .then(response => response.json())
    .then(data => document.getElementById('joke').textContent = data.value)
    .catch(error => console.error('Error:', error));
}

makeJoke();