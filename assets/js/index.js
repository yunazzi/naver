$(window).scroll(function(){
    curr = $(window).scrollTop();
    if(curr < 200){
        $(`.group-search`).removeClass(`fixed`);
    }else{
        $(`.group-search`).addClass(`fixed`);
    }
})
$(`#topBtn`).click(function(){
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
   })