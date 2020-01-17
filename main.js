$(document).ready(
  function() {
    $('.next').click(
      function() {
        clickNext();
      }
    );
    $('.prev').click(
      function() {
        clickPrev();
      }
    );
  }
);

//------------
// Funzioni
function clickNext() {
  //immagini
  var imageActive = $('img.active');
  var imageNext = imageActive.next();
  //cerchi
  var circleActive = $('i.active');
  var circleNext = circleActive.next();
  if (imageActive.hasClass('last') && circleActive.hasClass('last')) {
    imageNext = $('img.first');
    circleNext = $('i.first');
  }
  imageActive.removeClass('active');
  imageNext.addClass('active');
  circleActive.removeClass('active');
  circleNext.addClass('active');
}

function clickPrev() {
  //immagini
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  //cerchi
  var circleActive = $('i.active');
  var circlePrev = circleActive.prev();
  if (imageActive.hasClass('first') && circleActive.hasClass('first')) {
    imagePrev = $('img.last');
    circlePrev = $('i.last');
  }
  imageActive.removeClass('active');
  imagePrev.addClass('active');
  circleActive.removeClass('active');
  circlePrev.addClass('active');
}
