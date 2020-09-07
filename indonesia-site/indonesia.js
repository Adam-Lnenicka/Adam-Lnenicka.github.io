$(document).ready(() => {
  $('.menu-icon').on('click',() =>{
    $('.navbar-links').addClass('mobile-menu-active')
  })
  $('.navbar-item').on('click',() => {
    $('.navbar-links').removeClass('mobile-menu-active')
  })
});


