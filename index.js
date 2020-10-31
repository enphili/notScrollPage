'use strict';

import { NotScroll } from './notscroll.js';


const $modal = document.querySelector('.modal'),
      $btn = document.querySelector('.btn');

const noScroll = new NotScroll(document.body);


const toggleModal = () => {
  $modal.classList.toggle('is-open');
  if ($modal.classList.contains('is-open')) {
    noScroll.disabledScroll();
  } else {
    noScroll.enabledScroll();
  }
};

$btn.addEventListener('click', toggleModal);