window.addEventListener('scroll', function(){
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle('fixed', window.scrollY > 10)
})
function navBack(){
    var nav = document.getElementById('nav').classList.toggle('change')
}