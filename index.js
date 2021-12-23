$(window).on('load',function(){
    let WH = $(window).height();
    let offset1 = $('.img_1').offset().top;
    let offset2 = $('.img_2').offset().top;
    let offset3 = $('.img_3').offset().top;
    let offset4 = $('.img_4').offset().top;
    let offset5 = $('.img_5').offset().top;
    let offset6 = $('.img_6').offset().top;
    console.log(offset1);
    console.log(offset2);
    console.log(offset3);
    console.log(offset4);
    console.log(offset5);
    console.log(offset6);
    $(window).scroll(function(){
        let scroll = $(this).scrollTop()-100;
        if(scroll > offset1-WH){
            $('.img_1 img').addClass('img_active');
        }
        if(scroll > offset2-WH){
            $('.img_2 img').addClass('img_active');
        }
        if(scroll > offset3-WH){
            $('.img_3 img').addClass('img_active');
        }
        if(scroll > offset4-WH){
            $('.img_4 img').addClass('img_active');
        }
        if(scroll > offset5-WH){
            $('.img_5 img').addClass('img_active');
        }
        if(scroll > offset6-WH){
            $('.img_6 img').addClass('img_active');
        }
    })
})