$(window).on("scroll", function(){
    if($(window).scrollTop()){
      $('nav').addClass('light');
        $('.logo').attr('src', 'img/logo-black.png');
    }
    else {
      $('nav').removeClass('light');
      $('.logo').attr('src', 'img/logo-white.png');
    }

   /* var currentScollPos = $(window).scrollTop();

  section.each(function() {
    var self = $(this);
    if(self.offset().top < (currentScollPos+navH) && (currentScollPos + navH) < (self.offset().top + self.outerHeight())){
      var targetClass = '.' + self.attr('class') + '-maker';
      navLink.removeClass('activedLink');
      $(targetClass).addClass('activedLink');

    }
  });*/
});