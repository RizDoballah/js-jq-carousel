$(document).ready(
  function() {
    $('.next').click(
      function() {
        clickNext();
      }
    );
    // $('.prev').click(
    //   function() {
    //     clickPrev();
    //   }
    // );
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
}
