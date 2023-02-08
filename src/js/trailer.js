import axios from 'axios';
import { refs } from './refs';


const {
  trailerOverflow,
  trailerModal,
  trailerDiv,
  trailerCloseBtn,
  modal,
  overflow,
} = refs;

export async function watchTrailer(e) {
  const trailers = await fetchTrailer(e.target.dataset.id);
 
    modal.classList.add('move-left');
    overflow.classList.add('move-left');
    trailerModal.classList.remove('move-right');
    trailerOverflow.classList.remove('move-right');

    document.addEventListener('keydown', closeTrailerOnEsc);
    overflow.addEventListener('click', closeTrailerOverflow);
    trailerCloseBtn.addEventListener('click', closeTrailer);

     renderTrailer(trailers);
  }


function renderTrailer(results) {
  trailerDiv.innerHTML = `
  <iframe src="http://2221407734375553.svetacdn.in/h9Ggt3pCGbiS?imdb_id=${results}"  width="840" height="560" frameborder="0" allowfullscreen></iframe>
  `;
}

function closeTrailerOverflow(e) {
  if (e.currentTarget === e.target) closeTrailer();
}

function closeTrailerOnEsc(e) {
  if (e.code === 'Escape') closeTrailer();
}

function closeTrailer() {
  trailerModal.classList.add('move-right');
  trailerOverflow.classList.add('move-right');
  modal.classList.remove('move-left');
  overflow.classList.remove('move-left');

  document.removeEventListener('keydown', closeTrailerOnEsc);
  overflow.removeEventListener('click', closeTrailerOverflow);
  trailerCloseBtn.removeEventListener('click', closeTrailer);

  trailerModal.addEventListener('transitionend', stopVideo);
}

function stopVideo() {
  trailerDiv.innerHTML = '';
  trailerModal.removeEventListener('transitionend', stopVideo);
}

async function fetchTrailer(id) {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=2d95e97f255e7635245c1980eab541d3`
    );
    return result.data.imdb_id;
  } catch (error) {
    console.log(error);
  }
}
