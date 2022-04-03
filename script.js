// TMDB API
const apiKey = "api_key=2234df3fad3b4d021fbed31b9b1c8ce9";
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKey;

const movieApi = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=2234df3fad3b4d021fbed31b9b1c8ce9&language=en-US`;
const imgUrl = `https://image.tmdb.org/t/p/w500/`;
const main = document.getElementById("movie-container");

getMovies(apiUrl);

function getMovies(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        console.log("SUCCESS");
        return response.json();
      } else {
        console.log("NETWORK ERROR");
      }
    })
    .then((data) => {
      console.log("DATA", data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    z;
    const movieEl = document.createElement("div");
    movieEl.classList.add("container");

    movieEl.innerHTML = `<div class="card col-3 movie-nail">
    <img
      class="card-img-top"
      src="${imgUrl + poster_path}"
      alt="${title}"
    />
    <div class="card-body">
      <div class="card-row">
        <h5 class="card-title">${title}</h5>
        <h5 class="card-rating">${vote_average}</h5>
      </div>
      <p class="card-text">Description</p>
    </div>
  </div>`;

    main.appendChild(movieEl);
  });
}
