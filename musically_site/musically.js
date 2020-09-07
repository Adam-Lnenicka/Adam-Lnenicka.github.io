$(document).ready(() => {
  $('.menu-icon').on('click',() =>{
    $('.navbar-links').addClass('mobile-menu-active')
  })
  $('.navbar-item').on('click',() => {
    $('.navbar-links').removeClass('mobile-menu-active')
  })

  $('.question-box1').on('click', () => {
    $('.answer1').toggle()
    $('.down1').toggle()
    $('.up1').toggle()
  })
  $('.question-box2').on('click', () => {
    $('.answer2').toggle();
    $('.down2').toggle()
    $('.up2').toggle()
  })
  $('.question-box3').on('click', () => {
    $('.answer3').toggle();
    $('.down3').toggle()
    $('.up3').toggle()
  })


});


