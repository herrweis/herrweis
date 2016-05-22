var allLinks = document.querySelectorAll('nav.top a, nav.bottom a, .worklisting a'),
    bodyElement = document.querySelector('body');
for (var i = 0; i < allLinks.length; i++) {
  var href = allLinks[i].href;
  allLinks[i].addEventListener('click', function(e){
    e.preventDefault();
    var currentTarget = this.href;
    bodyElement.classList.add('fadeout');
    window.setTimeout(function(){
    document.location = currentTarget;
      // console.log(currentTarget, 1000);
    }, 300);
  });
}
