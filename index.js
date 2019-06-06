$(window).scroll(()=>{
    $('nav').toggleClass('scrolled', $(this).scrollTop()>20);
    $('.links').toggleClass('color-link', $(this).scrollTop()>20);
    $('.navbar-brand').toggleClass('color-link', $(this).scrollTop()>20);
    $('a').toggleClass('scrolled', $(this).scrollTop()>20 )
})

$('#contact-form').submit(()=>{
    toastr.success('Your Message Was Sent Successfully!', 'Avenger Ace Says');
});

