


  const scrollLetters = [... document.querySelectorAll('.scrollLetters div')];

document.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    scrollLetters.forEach(letter => {
      letter.classList.add('fade-up');
    });
  }
  
  if (window.scrollY < 50) {
    scrollLetters.forEach((letter) => {
      letter.classList.remove('fade-up');
    });
  }
});


$(document).ready(function() {
  // Smooth navigation scroll
    $(".navLink").on('click', function(event){
      if(this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
              window.location.hash = hash;
            });
      }
    });
});

    // section fade in during scroll
  $(document).on("scroll", function(){
    //Calculate how far down the page we are
    var pageTop = $(document).scrollTop();
    //Bottom of browser
    var pageBottom = pageTop + $(window).height();

    var tags = $("section");
    //loop through tags
    for(var i = 0; i < tags.length; i++){
      var tag = tags[i]
      var y = $(tag).position()
      // if tag is further up thank the bottom of window
      if(y.top + 300 < pageBottom) {
        //add visible class to make it fade in
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible")
      }
    }
  });

  var _window = window,Splitting = _window.Splitting,ScrollOut = _window.ScrollOut;
  Splitting();
  ScrollOut({
    targets: '.word',
    scrollingElement: '.page' });

    