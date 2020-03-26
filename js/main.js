
function show() {
    console.log("Testar!")
    let menu = document.querySelector('.menu');
    let layer = document.querySelector('.fade-layer')
  
    menu.classList.toggle('show');
    layer.classList.toggle('visible');
  
  }
  
  let btn = document.querySelector('.menu-button')
  let layer = document.querySelector('.fade-layer')
  
  btn.addEventListener('click',show);
  layer.addEventListener('click',show);

  $(".menu article").click(function (){location.replace($(this).attr("id")+".html");});
  