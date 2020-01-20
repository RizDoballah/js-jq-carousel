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

    $(document).keydown(
      function() {
        console.log(event.keyCode);
        if (event.keyCode == 39) {
          clickNext();
        } else if (event.keyCode == 37) {
          clickPrev();
        }
      }
    );

    // $('i.first').click(
      //   function() {
        //     $('img.active').removeClass('active');
        //     $('img.first').addClass('active');
        //     $('i.active').removeClass('active');
        //     $('i.first').addClass('active')
        //   }
        // )

    $('.nav i').click(
      function() {
      var thisPosition = $(this).index();
      var img = $('img').eq(thisPosition);
      $('img').removeClass('active');
      img.addClass('active');
      $('.nav i').removeClass('active');
      $(this).addClass('active');
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
