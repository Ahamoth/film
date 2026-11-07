import axios from 'axios';
import { refs } from './refs';

const {
  trailerOverflow,
  trailerModal,
  trailerDiv,
  modal,
  overflow,
} = refs;

const TMDB_API_KEY = '2d95e97f255e7635245c1980eab541d3';

let trailerIsOpen = false;

export function isTrailerOpen() {
  return trailerIsOpen;
}

// =====================================================
//  WATCH MOVIE (видеобалансер)
// =====================================================
export async function watchTrailer(e) {
  const imdbId = await fetchImdbId(e.target.dataset.id);

  if (!imdbId) {
    alert('Видео для этого фильма недоступно.');
    return;
  }

  openTrailerOverlay();

  trailerDiv.innerHTML = `
<iframe src="https://franko.uacdn.online/show/imdb/${imdbId}" width="840" height="560" frameborder="0" allowfullscreen></iframe>`;
}

async function fetchImdbId(id) {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
    );
    return result.data.imdb_id;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// =====================================================
//  WATCH TRAILER (YouTube, приоритет ru → uk → en)
// =====================================================
export async function watchYoutubeTrailer(e) {
  const videoKey = await fetchYoutubeKey(e.target.dataset.id);

  if (!videoKey) {
    alert('Трейлер для этого фильма не найден.');
    return;
  }

  openTrailerOverlay();

  trailerDiv.innerHTML = `
<iframe src="https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0" width="840" height="560" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

async function fetchYoutubeKey(id) {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=ru-RU&include_video_language=ru,uk,en`
    );

    const videos = result.data.results || [];

    // 🎯 Приоритеты
    const langRank = { ru: 0, uk: 1, en: 2 };
    const typeRank = { Trailer: 0, Teaser: 1 };

    const scored = videos
      .filter(v => v.site === 'YouTube' && v.key)
      .map(v => {
        const lang = langRank[v.iso_639_1] ?? 3;     // неизвестные языки — в конец
        const type = typeRank[v.type] ?? 2;           // Featurette и пр. — в конец
        const officialBonus = v.official ? 0 : 10;    // официальные впереди
        return { video: v, score: lang * 1000 + type * 100 + officialBonus };
      })
      .sort((a, b) => a.score - b.score);

    return scored.length ? scored[0].video.key : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// =====================================================
//  OPEN / CLOSE OVERLAY
// =====================================================
function openTrailerOverlay() {
  trailerIsOpen = true;
  modal.classList.add('move-left');
  overflow.classList.add('move-left');
  trailerModal.classList.remove('move-right');
  trailerOverflow.classList.remove('move-right');
}

function closeTrailer() {
  if (!trailerIsOpen) return;
  trailerIsOpen = false;

  trailerModal.classList.add('move-right');
  trailerOverflow.classList.add('move-right');
  modal.classList.remove('move-left');
  overflow.classList.remove('move-left');

  trailerModal.addEventListener('transitionend', stopVideo);
}

function stopVideo() {
  trailerDiv.innerHTML = '';
  trailerModal.removeEventListener('transitionend', stopVideo);
}

// =====================================================
//  🛡️ CAPTURE-PHASE HANDLERS
// =====================================================
document.addEventListener(
  'click',
  e => {
    if (e.target.closest('#trailerClose')) {
      e.stopPropagation();
      e.preventDefault();
      closeTrailer();
    }
  },
  true
);

document.addEventListener(
  'click',
  e => {
    if (
      e.target.closest('#trailerOverflow') &&
      !e.target.closest('#trailerDiv') &&
      !e.target.closest('#trailerClose')
    ) {
      e.stopPropagation();
      closeTrailer();
    }
  },
  true
);

document.addEventListener(
  'keydown',
  e => {
    if (e.code === 'Escape' && trailerIsOpen) {
      e.stopPropagation();
      e.preventDefault();
      closeTrailer();
    }
  },
  true
);

document.addEventListener('click', e => {
  const btn = e.target.closest('.modal__btn-trailer');
  if (btn) {
    watchYoutubeTrailer(e);
  }
});

// =====================================================
//  🔹 Видимый крестик в #trailerClose
// =====================================================
function ensureTrailerCloseIcon() {
  const btn = document.querySelector('#trailerClose');
  if (!btn) return;

  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width="22" height="22"
         fill="none"
         stroke="#ffffff"
         stroke-width="2.5"
         stroke-linecap="round">
      <line x1="6" y1="6" x2="18" y2="18"/>
      <line x1="18" y1="6" x2="6" y2="18"/>
    </svg>
  `;

  const svg = btn.querySelector('svg');
  if (svg) {
    svg.style.display = 'block';
    svg.style.pointerEvents = 'none';
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureTrailerCloseIcon);
} else {
  ensureTrailerCloseIcon();
}

document.addEventListener('click', e => {
  if (
    e.target.closest('.modal__btn-trailer') ||
    e.target.closest('.modal__btn-watch-trailer')
  ) {
    setTimeout(ensureTrailerCloseIcon, 0);
  }
});
