$.noConflict();

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
    
  $('#IITLogin').on('submit', function(e){
    if ($('#name-field').val() === 'user' && $('#password-field').val() === 'user') {
      window.location.replace('welcome/index.html');
    } else {
      console.log('Bad username');
      $('#IITLogin').prepend('Invalid credentials');
    }
    e.preventDefault();           
  })
  $("#navigation-toggle a").click(function(e){
    e.preventDefault();

    $("header > nav").slideToggle("medium");
    $("#logo").toggleClass("menu menuDown");
  });

  $(window).resize(function() {
    if($(window).width() >= "600") {
      $("header > nav").css("display", "block");
    }
    else {
      $("header > nav").css("display", "none");
    }
  });

  $("header > nav > ul > li > a").click(function(e) {
    if($(window).width() <= "600") {
      if($(this).siblings().size() > 0 ) {
        $(this).siblings().slideToggle("fast")
        $(this).children(".toggle").html($(this).children(".toggle").html() === 'close' ? 'expand' : 'close');
      }
    }
  });
});

