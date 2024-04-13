// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchSearchData } from './js/pixabay-api';
import { renderElements } from './js/render-functions';

const formEl = document.querySelector('.form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 500,
});

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const inputValue = event.target.elements.js_input.value.trim();

  if (inputValue === '') {
    return;
  }

  loaderEl.classList.add('is-visible');

  fetchSearchData(inputValue)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        galleryEl.innerHTML = '';
        return;
      }

      galleryEl.innerHTML = renderElements(response.hits);

      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loaderEl.classList.remove('is-visible');
    });
}
