'use strict';
function handleThumbnailClicks() {

$('.thumbnail').on('click', event => {
  
  const imgSrc = $(event.currentTarget).find('img').attr('src');

  const imgAlt = $(event.currentTarget).find('img').attr('alt');

  $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  
});
}

$(handleThumbnailClicks);