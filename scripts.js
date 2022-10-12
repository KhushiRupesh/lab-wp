// page back to the top after refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

// collapsed navbar hide after click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});




 