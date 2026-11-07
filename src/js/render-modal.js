import emptyPhoto from '../images/empty-photo/empty-poster.jpg';

export function renderModal(list, id, watched, queue) {
  const {
    poster_path,
    original_title,
    title,
    genre_ids,
    vote_average,
    vote_count,
    popularity,
    overview,
    id: film_id,
  } = list[id];

  const genres = JSON.parse(localStorage.getItem('allGenres'));
  const finalGenres = [];
  genre_ids.forEach(idx => {
    const genre = genres.find(genre => genre.id === idx);
    if (genre) finalGenres.push(genre.name);
  });

  const foundInWatched = watched.find(film => film.id === film_id);
  const foundInQueue = queue.find(film => film.id === film_id);
  const isInQueue = !!foundInQueue;
  const isInWatched = !!foundInWatched;

  // --- Разметка кнопок ---
  const queueBtnMarkup = `
    <button class="modal__btn-queue" type="button" data-id="${film_id}">
      ${isInQueue ? 'remove from queue' : 'add to queue'}
    </button>
  `;

  const watchedBtnMarkup = `
    <button class="modal__btn-watched" type="button" data-id="${film_id}">
      ${isInWatched ? 'remove from watched' : 'add to watched'}
    </button>
  `;

  // 🆕 Новая кнопка трейлера
  const trailerBtnMarkup = `
    <button class="modal__btn-watch-trailer" type="button" data-id="${film_id}">
      Watch trailer
    </button>
  `;

  // --- Остальные блоки (без изменений) ---
  const voteCount = vote_count && vote_average ? `
    <li class="modal__item">
      <span class="modal__item-first">Vote / Votes</span>
      <span class="modal__item-bg modal__item--accent">${vote_average.toFixed(1)}</span> / ${vote_count}
    </li>
  ` : '';

  const popularityMarkup = popularity ? `
    <li class="modal__item">
      <span class="modal__item-first">Popularity</span>
      <span>${popularity.toFixed(1)}</span>
    </li>
  ` : '';

  const genresMarkup = finalGenres.length ? `
    <li class="modal__item">
      <span class="modal__item-first">Genre</span>
      <span>${finalGenres.join(', ')}</span>
    </li>
  ` : '';

  const originalTitleMarkup = original_title ? `
    <li class="modal__item">
      <span class="modal__item-first">Original Title</span>
      <span>${original_title}</span>
    </li>
  ` : '';

  const overviewMarkup = overview ? `
    <h3 class="modal__about-headline">About</h3>
    <p class="modal__about-text">${overview}</p>
  ` : '';

  const photoMarkup = poster_path ? `
    <img class="modal__img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
  ` : `
    <img class="modal__img" src="${emptyPhoto}" alt="photo coming soon" />
  `;

  const markup = `
    <div class="modal__main">
      ${photoMarkup}
      <div class="modal__about">
        <h2 class="modal__headline">${title}</h2>
        <ul class="modal__list">
          ${voteCount}
          ${popularityMarkup}
          ${originalTitleMarkup}
          ${genresMarkup}
        </ul>
        ${overviewMarkup}
        <div class="modal__buttons">
          <div class="modal__add-btns">
            ${watchedBtnMarkup}
            ${queueBtnMarkup}
            ${trailerBtnMarkup}  <!-- 🆕 кнопка трейлера -->
          </div>
          <button class="modal__btn-watch" ...>watch movie</button>  <!-- ✅ ваша кнопка видеобалансера -->
        </div>
      </div>
    </div>
  `;

  return [markup, isInQueue, isInWatched];
}
