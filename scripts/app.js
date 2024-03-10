const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const results = document.getElementById("results");

let accessKey = "L65umU1RK4b-QSh_aRvJhEgqiyH1o-4VdjepFvTQhVk";

const fetchImages = async (query) => {
    const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
    );
    const data = await response.json();
    clearResults();
    data.results.forEach((image) => {
        addImage(image.urls.regular, image.alt_description);
    });
    return data;
};

const addImage = (src, alt) => {
    const resultsContainer = document.getElementById("results");
    const img = document.createElement("img");
    img.classList.add("box");

    img.src = src;
    img.alt = alt;

    resultsContainer.appendChild(img);
};

const clearResults = () => {
    results.innerHTML = "";
};

searchButton.addEventListener("click", () => {
    fetchImages(searchInput.value);
});
