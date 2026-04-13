addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    getWeather();
    getJoke();
    getGenre();
    getStarWars();
    const btn = document.getElementById('refreshWeather');
    if (btn) btn.addEventListener('click', getWeather);
});


async function getWeather() {
    const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=60.17&longitude=24.94&current_weather=true";

    try {
        const contentEl = document.getElementById("weatherContent") || document.getElementById("weatherAPI");
        contentEl.innerHTML = `<p>Loading weather...</p>`;

        const response = await fetch(weatherURL);
        const data = await response.json();
        console.log(data);

        contentEl.innerHTML = `
        <h2>Current Weather in Helsinki</h2>
        <p>Temperature: ${data.current_weather.temperature} °C</p>
        <p>Wind Speed: ${data.current_weather.windspeed} km/h</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        const contentEl = document.getElementById("weatherContent") || document.getElementById("weatherAPI");
        if (contentEl) contentEl.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }

}

async function getJoke() {
    const jokeURL = "https://official-joke-api.appspot.com/random_joke";

    try {
        document.getElementById("jokeAPI").innerHTML = `<p>Loading joke...</p>`;
        const response = await fetch(jokeURL);
        const data = await response.json();
        console.log(data);

        document.getElementById("jokeAPI").innerHTML = `
            <h2>Random Joke</h2>
            <p>${data.setup}</p>
            <p>${data.punchline}</p>
        `;
    } catch (error) {
        console.error("Error fetching joke data:", error);
    }
}

async function getGenre() {
    const genreURL = "https://binaryjazz.us/wp-json/genrenator/v1/genre/5";

    try {
        document.getElementById("genreAPI").innerHTML = `Loading genre...`;

        const response = await fetch(genreURL);
        const data = await response.json();
        console.log(data);

        document.getElementById("genreAPI").innerHTML = `
            <h2>Random Genre</h2>
            <p>${data}</p>
        `;

    } catch (error) {
        console.error("Error fetching genre data:", error);
    }
}

async function getStarWars() {
        const starWarsURL = "https://swapi.dev/api/planets/3/?format=json";

        try {
            document.getElementById("starWarsAPI").innerHTML = `Loading Star Wars data...`;

            const response = await fetch(starWarsURL);
            const data = await response.json();
            console.log(data);

            document.getElementById("starWarsAPI").innerHTML = `
                <h2>Star Wars Planet: ${data.name}</h2>
                <p>Climate: ${data.climate}</p>
                <p>Population: ${data.population}</p>
            `;

        } catch (error) {
            console.error("Error fetching Star Wars data:", error);
        }
}

async function getAiCHat() {
    const aiChatURL = "https://ollama.com/api";

    try {
        document.getElementById("aiChatAPI").innerHTML = `loading AI chat...`;

        const response = await fetch(aiChatURL);
        const data = await response.json();
        console.log(data);

        document.getElementById("aiChatAPI").innerHTML = `
            <h2>AI Chat Response</h2>
            <p>${data.response}</p>
        `;
    } catch (error) {
        console.error("Error fetching AI chat data:", error);
    }
}