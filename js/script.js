const currentPage = window.location.pathname;

const MOVIES_API_KEY = '9db71ce344da298213bf319d3d5a66fe';

// console.log(currentPage);

const moviesEl = document.getElementById('movies');
const movieDetails = document.getElementById('movie-details');
const seriesEl = document.querySelector('.series');
const serieDetails = document.getElementById('serie-details');

// Muestra las 10 películas más populares
const getPopularMovies = async () => {
  const { results } = await fetchData('movie/popular');

  results.slice(0, 10).forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="/movie-details.html?id=${movie.id}">
            <img
                src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}"
                class=""
                alt="${movie.title}"
              />
          </a>
              `;

    moviesEl.appendChild(div);
  });
};

// Muestra las 10 series más populares
const getPopularSeries = async () => {
  const { results } = await fetchData('tv/popular');

  results.slice(0, 10).forEach((serie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <a href="/serie-details.html?id=${serie.id}">
          <img
              src="https://image.tmdb.org/t/p/w500${serie.poster_path}"
              class=""
              alt="${serie.name}"
            />
        </a>
        `;

    seriesEl.appendChild(div);
  });
};

const getMovieDetails = async () => {
  const movieId = window.location.search.split('=')[1];

  const movie = await fetchData(`movie/${movieId}`);

  let genres = [];
  let production = [];

  movie.genres.forEach((genre) => genres.push(genre.name));
  movie.production_companies.forEach((prod) => production.push(prod.name));

  const div = document.createElement('div');

  div.innerHTML = `
              <h3>${movie.title}</h3>
              <img
                 src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                 class=""
                 alt="${movie.title}"
               />
               <h2><span>Título Original:</span> ${movie.original_title}</h2>
               <p>${movie.overview}</p>
               <p><span>Género:</span> ${genres.join(' | ')}</p>
               <p><span>Duración:</span> ${movie.runtime} minutos</p>
               <p><span>Producción:</span> ${production.join(' | ')}</p>
               <p><span>Rating:</span> ${movie.vote_average.toFixed(1)} / 10</p>
  `;
  movieDetails.appendChild(div);
};

const getSerieDetails = async () => {
  const serieId = window.location.search.split('=')[1];

  const serie = await fetchData(`tv/${serieId}`);

  let genres = [];
  let production = [];

  serie.genres.forEach((genre) => genres.push(genre.name));
  serie.production_companies.forEach((prod) => production.push(prod.name));

  const div = document.createElement('div');

  div.innerHTML = `
                 <h3>${serie.name}</h3>
             <img
                 src="https://image.tmdb.org/t/p/w500${serie.poster_path}"
                 class=""
                 alt="${serie.name}"
               />
               <h2><span>Título Original:</span> ${serie.original_name}</h2>
               <p>${serie.overview}</p>
               <p><span>Género:</span> ${genres.join(' | ')}</p>
               <p><span>Producción:</span> ${production.join(' | ')}</p>
               <p><span>Rating:</span> ${serie.vote_average.toFixed(1)} / 10</p>
  `;
  serieDetails.appendChild(div);
};

// Fetch Data de la API
const fetchData = async (endpoint) => {
  const MOVIES_URL = 'https://api.themoviedb.org/3/';

  //   showLoading();

  const response = await fetch(
    `${MOVIES_URL}${endpoint}?language=es-AR&api_key=${MOVIES_API_KEY}`
  );

  const data = await response.json();

  //   hideLoading();
  return data;
};

// https://api.themoviedb.org/3/movie/popular?language=es-AR&api_key=

const init = () => {
  switch (currentPage) {
    case '/':
    case '/index.html':
      getPopularMovies();
      // getPopularSeries();
      break;
    case '/series.html':
      getPopularSeries();
      break;
    case '/movie-details.html':
      getMovieDetails();
      break;
    case '/serie-details.html':
      getSerieDetails();
      break;
    case '/contacto.html':
      console.log('contacto');
      break;
  }
  // fetchData();
};

init();
