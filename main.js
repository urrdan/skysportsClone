if($(window).width()<1000){
    $('.info>section').click(function(){
        funx.call(this,$(this).siblings('.info-ul'),'appear')
    })
    $('.sub-menu-placeholder').click(function(){
        funx.call(this, $('.sub-menu-disappear'),'appear')
    })
    
    $('.hidden-menu').click(function(){
        funx.call(this, $('.menu-disappear'), 'appear')
    })

    $('.menu').prepend($('.member'))

}

$(window).resize(function(){
    if ($(this).width() < 1000){
        $('.menu').prepend($('.member'))
    }
    else{
        $('.logo>:last-child').append($('.member'))
    }
})

function funx(ele,tog){
    ele.toggleClass(tog)
}