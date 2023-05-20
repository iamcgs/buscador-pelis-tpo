const currentPage = window.location.pathname;

// console.log(currentPage);

// Listado de películas provisorio
const MOVIES = [
  {
    adult: false,
    backdrop_path: '/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg',
    genre_ids: [28, 12, 878],
    id: 640146,
    original_language: 'en',
    original_title: 'Ant-Man and the Wasp: Quantumania',
    overview:
      'La pareja de superhéroes Scott Lang y Hope van Dyne regresa para continuar sus aventuras como Ant-Man y la Avispa. Los dos, junto a los padres de Hope, Hank Pym y Janet van Dyne y la hija de Scott, Cassie Lang, se dedican a explorar el Mundo Cuántico, interactuando con nuevas y extrañas criaturas y embarcándose en una aventura que les llevará más allá de los límites de lo que creían posible.',
    popularity: 3706.025,
    poster_path: '/jTNYlTEijZ6c8Mn4gvINOeB2HWM.jpg',
    release_date: '2023-02-15',
    title: 'Ant-Man y la Avispa: Quantumanía',
    video: false,
    vote_average: 6.5,
    vote_count: 2380,
  },
  {
    adult: false,
    backdrop_path: '/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg',
    genre_ids: [27, 9648, 53],
    id: 758323,
    original_language: 'en',
    original_title: "The Pope's Exorcist",
    overview:
      'Película sobre Gabriele Amorth, un sacerdote que ejerció como exorcista principal del Vaticano, realizando más de cien mil exorcismos a lo largo de su vida. Amorth escribió dos libros de memorias donde detalló sus experiencias luchando contra Satanás.',
    popularity: 3274.664,
    poster_path: '/qcknZEeD71byJ3XSalDDZ5iHpNr.jpg',
    release_date: '2023-04-05',
    title: 'El exorcista del papa',
    video: false,
    vote_average: 7.3,
    vote_count: 770,
  },
  {
    adult: false,
    backdrop_path: '/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg',
    genre_ids: [16, 12, 10751, 14, 35],
    id: 502356,
    original_language: 'en',
    original_title: 'The Super Mario Bros. Movie',
    overview:
      'Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi.',
    popularity: 2915.871,
    poster_path: '/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg',
    release_date: '2023-04-05',
    title: 'Súper Mario Bros. La película',
    video: false,
    vote_average: 7.5,
    vote_count: 1932,
  },
  {
    adult: false,
    backdrop_path: '/A7JQ7MIV5fkIxceI5hizRIe6DRJ.jpg',
    genre_ids: [878, 12, 28],
    id: 447365,
    original_language: 'en',
    original_title: 'Guardians of the Galaxy Vol. 3',
    overview:
      'Star-Lord, todavía recuperándose de la pérdida de Gamora, debe reunir a su equipo para defender el universo junto con la protección de uno de los suyos. Una misión que, si no se completa, podría llevar al final de los Guardianes tal como los conocemos.',
    popularity: 2178.968,
    poster_path: '/voAxRv011XHK2qFBXmZKXPj2wWB.jpg',
    release_date: '2023-05-03',
    title: 'Guardianes de la Galaxia: Volumen 3',
    video: false,
    vote_average: 8.2,
    vote_count: 871,
  },
  {
    adult: false,
    backdrop_path: '/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg',
    genre_ids: [27, 53],
    id: 713704,
    original_language: 'en',
    original_title: 'Evil Dead Rise',
    overview:
      "Historia de dos hermanas separadas cuyo reencuentro se ve interrumpido por el surgimiento de demonios poseedores de carne, empujándolos a una batalla por la supervivencia mientras se enfrentan a la versión de familia más aterradora que se pueda imaginar. Secuela de la trilgía original de 'Evil Dead'.",
    popularity: 3039.142,
    poster_path: '/ioMtng0qHbwNjR1fuxYZsRf1kjm.jpg',
    release_date: '2023-04-12',
    title: 'Posesión infernal: El despertar',
    video: false,
    vote_average: 7.2,
    vote_count: 673,
  },
  {
    adult: false,
    backdrop_path: '/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg',
    genre_ids: [28, 35, 10749],
    id: 868759,
    original_language: 'en',
    original_title: 'Ghosted',
    overview:
      'Cole, un tipo campechano, se enamora perdidamente de la enigmática Sadie, quien, para su enorme sorpresa, resulta ser una agente secreta. Antes de que pueda surgir una segunda cita, los dos deben embarcarse en una aventura internacional para salvar el mundo.',
    popularity: 1965.704,
    poster_path: '/zSw2JeQ03GivcS4VKJmWK5sYi1F.jpg',
    release_date: '2023-04-18',
    title: 'Ghosting',
    video: false,
    vote_average: 7.1,
    vote_count: 705,
  },
  {
    adult: false,
    backdrop_path: '/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg',
    genre_ids: [28, 35, 14, 12],
    id: 594767,
    original_language: 'en',
    original_title: 'Shazam! Fury of the Gods',
    overview:
      'Billy Batson y sus hermanos adoptivos, que se transforman en superhéroes al decir "¡Shazam!", se ven obligados a volver a la acción y luchar contra las Hijas de Atlas, a quienes deben evitar que use un arma que podría destruir el mundo.',
    popularity: 1924.097,
    poster_path: '/igFLHxab9zG0M89OmEpnOM6TPXn.jpg',
    release_date: '2023-03-15',
    title: '¡Shazam! La furia de los dioses',
    video: false,
    vote_average: 6.8,
    vote_count: 1536,
  },
  {
    adult: false,
    backdrop_path: '/zPEDfWece7gg1I0904KFFVUq5mg.jpg',
    genre_ids: [53, 28, 80],
    id: 1102776,
    original_language: 'fr',
    original_title: 'AKA',
    overview:
      'Un agente de operaciones especiales se enfrenta a un dilema moral cuando se infiltra en una organización criminal y se hace amigo del hijo del jefe.',
    popularity: 2023.16,
    poster_path: '/rmlYg0HdVQDvvNlWishWT2WdxkE.jpg',
    release_date: '2023-04-28',
    title: 'Alias',
    video: false,
    vote_average: 7.1,
    vote_count: 184,
  },
  {
    adult: false,
    backdrop_path: '/8rpDcsfLJypbO6vREc0547VKqEv.jpg',
    genre_ids: [878, 12, 28],
    id: 76600,
    original_language: 'en',
    original_title: 'Avatar: The Way of Water',
    overview:
      "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
    popularity: 1860.799,
    poster_path: '/bqOqQ2Tawum3eHKNrc94P4EeaZB.jpg',
    release_date: '2022-12-14',
    title: 'Avatar: El sentido del agua',
    video: false,
    vote_average: 7.7,
    vote_count: 7904,
  },
  {
    adult: false,
    backdrop_path: '/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg',
    genre_ids: [18, 28],
    id: 677179,
    original_language: 'en',
    original_title: 'Creed III',
    overview:
      'Después de dominar el mundo del boxeo, Adonis Creed ha prosperado tanto en su carrera como en su vida familiar. Cuando un amigo de la infancia y ex prodigio de boxeo, Damien Anderson, resurge después de cumplir una larga sentencia en prisión, está ansioso por demostrar que merece su disparo en el ring. El enfrentamiento entre los antiguos amigos es más que una pelea. Para resolver el puntaje, Adonis debe poner su futuro en la línea para luchar contra Damien, un luchador que no tiene nada que perder.',
    popularity: 1450.554,
    poster_path: '/fcFMd3HdyX7r5gtFwVnn2qr5Yhq.jpg',
    release_date: '2023-03-01',
    title: 'Creed III',
    video: false,
    vote_average: 7.3,
    vote_count: 1314,
  },
];

// Listado de series provisorio
const SERIES = [
  {
    backdrop_path: '/8qlKzvR68dH0ZaJFG9XBEctvvUo.jpg',
    first_air_date: '2011-02-12',
    genre_ids: [35],
    id: 63935,
    name: "Les Mystères de l'amour",
    origin_country: ['FR'],
    original_language: 'fr',
    original_name: "Les Mystères de l'amour",
    overview: '',
    popularity: 2545.696,
    poster_path: '/mtUhIHbhw0GCacVnPam8p4vwejB.jpg',
    vote_average: 6.5,
    vote_count: 4,
  },
  {
    backdrop_path: '/69Jblm3seQgiPuPQMrJqg9Nxhaz.jpg',
    first_air_date: '2011-01-10',
    genre_ids: [10763, 10767],
    id: 101463,
    name: 'Al rojo vivo',
    origin_country: ['ES'],
    original_language: 'es',
    original_name: 'Al rojo vivo',
    overview:
      'Al rojo vivo es un programa de laSexta centrado en el análisis y el debate de la actualidad política nacional e internacional. El formato está presentado y dirigido por Antonio García Ferreras y producido por los Servicios informativos de laSexta.',
    popularity: 1339.93,
    poster_path: '/ag6PmoBxkF2s1uY3An618NCEt3g.jpg',
    vote_average: 1.8,
    vote_count: 7,
  },
  {
    backdrop_path: '/t2rAdgjSh0WYbXzdOB5zTDqzdCI.jpg',
    first_air_date: '2022-11-02',
    genre_ids: [18],
    id: 213713,
    name: 'Faltu',
    origin_country: ['IN'],
    original_language: 'hi',
    original_name: 'Faltu',
    overview: '',
    popularity: 2128.499,
    poster_path: '/lgyFuoXs7GvKJN0mNm7z7OMOFuZ.jpg',
    vote_average: 4.5,
    vote_count: 22,
  },
  {
    backdrop_path: '/3n2TjKw3HrwDqgVgcynvantOfS3.jpg',
    first_air_date: '2023-01-04',
    genre_ids: [18, 10751],
    id: 215103,
    name: 'Teri Meri Doriyaan',
    origin_country: ['IN'],
    original_language: 'hi',
    original_name: 'Teri Meri Doriyaan',
    overview: '',
    popularity: 2093.35,
    poster_path: '/4BHDmYiuSnNL3nqKIOzLJKYX4AN.jpg',
    vote_average: 4.9,
    vote_count: 7,
  },
  {
    backdrop_path: '/1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg',
    first_air_date: '2023-02-13',
    genre_ids: [10759, 35, 18],
    id: 215803,
    name: 'Batang Quiapo',
    origin_country: ['PH'],
    original_language: 'tl',
    original_name: 'Batang Quiapo',
    overview: '',
    popularity: 1269.551,
    poster_path: '/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg',
    vote_average: 5.6,
    vote_count: 13,
  },
  {
    backdrop_path: null,
    first_air_date: '2022-11-28',
    genre_ids: [18],
    id: 215315,
    name: 'रब्ब से है दुआ',
    origin_country: ['IN'],
    original_language: 'hi',
    original_name: 'रब्ब से है दुआ',
    overview: '',
    popularity: 2050.247,
    poster_path: '/6ikbefd7VeopbBuGgioYMNU5bQj.jpg',
    vote_average: 6,
    vote_count: 2,
  },
  {
    backdrop_path: '/lcSvkJ2Rob3ICIOCUJahw3kgSYZ.jpg',
    first_air_date: '2023-03-14',
    genre_ids: [18],
    id: 216390,
    name: '비밀의 여자',
    origin_country: ['KR'],
    original_language: 'ko',
    original_name: '비밀의 여자',
    overview: '',
    popularity: 1256.402,
    poster_path: '/1FaSrKPCvHK0l63Y31IWAfOPe38.jpg',
    vote_average: 5.2,
    vote_count: 5,
  },
  {
    backdrop_path: '/vW16JyrWiB1cW9wWzxhmjVHoqwJ.jpg',
    first_air_date: '2023-03-13',
    genre_ids: [10766],
    id: 217510,
    name: 'Queridos Papás',
    origin_country: ['PT'],
    original_language: 'pt',
    original_name: 'Queridos Papás',
    overview: '',
    popularity: 1211.906,
    poster_path: '/m1aGGAPvLpWF5cGhkQeZjbpu2nr.jpg',
    vote_average: 6,
    vote_count: 2,
  },
  {
    backdrop_path: '/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg',
    first_air_date: '2023-01-09',
    genre_ids: [10751, 35],
    id: 218145,
    name: 'Mama na prenájom',
    origin_country: ['SK'],
    original_language: 'sk',
    original_name: 'Mama na prenájom',
    overview: '',
    popularity: 1196.864,
    poster_path: '/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg',
    vote_average: 9,
    vote_count: 3,
  },
  {
    backdrop_path: '/w9uM2biYWGqwEpvIYs8CXRoAdVB.jpg',
    first_air_date: '2023-02-26',
    genre_ids: [10764, 10767],
    id: 221249,
    name: 'O Triângulo',
    origin_country: ['PT'],
    original_language: 'pt',
    original_name: 'O Triângulo',
    overview: '',
    popularity: 1134.245,
    poster_path: '/A2LE5B1IInR5h98OUNzyj9aQiIS.jpg',
    vote_average: 1.3,
    vote_count: 2,
  },
];

const moviesEl = document.getElementById('movies');
const movieDetails = document.getElementById('movie-details');
const seriesEl = document.querySelector('.series');
const serieDetails = document.getElementById('serie-details');

// Muestra las 10 películas más populares
const getPopularMovies = async () => {
  // const { results } = await fetchData('movie/popular');

  MOVIES.forEach((movie) => {
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
  // const { results } = await fetchData('tv/popular');

  SERIES.forEach((serie) => {
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

const getMovieDetails = () => {
  const movieId = Number(window.location.search.split('=')[1]);
  // console.log(typeof movieId);

  MOVIES.filter((movie) => {
    if (movie.id === movieId) {
      const div = document.createElement('div');
      //  div.classList.add('card');
      div.innerHTML = `
             <h3>${movie.title}</h3>
             <img
                 src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                 class=""
                 alt="${movie.title}"
               />
               <p>${movie.overview}</p>
               `;

      movieDetails.appendChild(div);
    }
  });
};

const getSerieDetails = () => {
  const serieId = Number(window.location.search.split('=')[1]);
  // console.log(serieId);

  SERIES.filter((serie) => {
    if (serie.id === serieId) {
      const div = document.createElement('div');
      //  div.classList.add('card');
      div.innerHTML = `
             <h3>${serie.name}</h3>
             <img
             src="https://image.tmdb.org/t/p/w500${serie.poster_path}"
             class=""
                 alt="${serie.name}"
                 />
            <p>${serie.overview}</p>
            `;

      serieDetails.appendChild(div);
    }
  });
};

// Fetch Data de la API
// const fetchData = async (endpoint) => {
//   const MOVIES_URL = 'https://api.themoviedb.org/3/';
//   const MOVIES_API_KEY = '';

//   //   showLoading();

//   const response = await fetch(
//     `${MOVIES_URL}${endpoint}?language=es-AR&api_key=${MOVIES_API_KEY}`
//   );

//   const data = await response.json();

//   //   hideLoading();
//   return data;
// };

// https://api.themoviedb.org/3/movie/popular?language=es-AR&api_key=

const init = () => {
  switch (currentPage) {
    case '/':
    case '/index.html':
      getPopularMovies();
      getPopularSeries();
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
