
function loadPicture(date) {
    const API_KEY = import.meta.env.VITE_NASA_API_KEY;
    const nasaDate = date.replaceAll("-", "").slice(2);

document.querySelector("#app").innerHTML = "<p>loading...</p>";

fetch(`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${nasaDate}`).
then(response => response.json()).then(data => {
    document.querySelector("#app").innerHTML= `
    <h1>${data.title}</h1>
    <img src="${data.hdurl}"/>
    <p>${data.explanation}</p>`;
})
}

document.querySelector("#datepicker").addEventListener("change", event => {
    loadPicture(event.target.value);
});

loadPicture("2025-01-01");