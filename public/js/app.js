$(function (){
    //Topに戻るボタンのアニメーション
    let top_button = $('#return_top');
    top_button.click(function(event){
        event.preventDefault();
        $('body, html').animate({
            scrollTop: 550
        },1000);
    });

    //要素がスクロールするとスライドされる
    let profile = $('#Profile');
    profile.hide();
    let hobby = $('#Hobby');
    hobby.hide();
    let product = $('#Product');
    product.hide();
    let product1 = $('#work1');
    product1.hide();
    let product2 = $('#work2');
    product2.hide();
    let product3 = $('#work3');
    product3.hide();

    let shokai ={
        profile : true,
        gakureki : true,
        hobby : true,
        product : true,
        product1 : true,
        product2 : true,
        product3 : true
    };

    $(window).scroll(function(){
        if($(this).scrollTop() > 100 && shokai.profile == true){
            $('#Profile').effect("slide");
            shokai.profile = false;
        }
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 800 && shokai.hobby == true){
            $('#Hobby').effect("slide");
            shokai.hobby = false;
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 1200 && shokai.product == true){
            $('#Product').effect("slide");
            shokai.product = false;
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 1400 && shokai.product1 == true){
            $('#work1').effect("slide");
            shokai.product1 = false;
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 1700 && shokai.product2 == true){
            $('#work2').effect("slide");
            shokai.product2 = false;
        }
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 2100 && shokai.product3 == true){
            $('#work3').effect("slide");
            shokai.product3 = false;
        }
    });
});
