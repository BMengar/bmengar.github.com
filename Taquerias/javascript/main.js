
//obtener los elementos de la clase .close
let links = document.querySelectorAll('.close')

//Recorrerlos

links.forEach(function(link){

  //Agregar un evento click a cada uno de ellos - case sensitive
  link.addEventListener('click',function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content');

    //Quitarle las clases de animación que ya tienen
    content.classList.remove('animate__fadeInDown');
    content.classList.remove('animate__animated');

    //añadirle clases de animación para su salida 
    content.classList.add('animate__fadeOutUp');
    content.classList.add('animate__animated');

    setTimeout(function(){
      location.href = "../index.html";
    },600);

    return false;

  });
});
