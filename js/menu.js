
//Menu principal
/* menu.js
* Interacciones:
* - Activar y desactivar el menú principal
* Estructurtura:
* - Constantes
* - Funciones Handler
* - Eventos */

//Se define una función anónima autoejecutable 
//Se hace referencia en todos los archivos.html de la pagina
(function() {
  // constantes traidas del  DOM
  const headerNav = document.querySelector(`.Header-nav`)
  const btnMenu = headerNav.querySelector(`.Header-boton`)
  const menu = headerNav.querySelector(`.Header-ul`)
 console.log(btnMenu)

  //Funciones Handler
  const menuActive = () => { menu.classList.toggle(`is-active`) 
  btnMenu.classList.toggle(`is-active`)}
  
  const menuInactive = () => { menu.classList.remove(`is-active`)
  btnMenu.classList.remove(`is-active`)}
  
  const menuWindows = (e) => {
      const btnIn = btnMenu.contains(e.target)
      const menuIn = menu.contains(e.target)

      if (!btnIn && !menuIn) {
          menuInactive()
      }
  }

  //Cuando hago mouseup en Header-boton
  //Le toggle la clase is-active a  Header-ul y Header-boton
  btnMenu.addEventListener(`mouseup`, menuActive)
  //Cuando hago mouseup en cualquier parte de la ventana que no sea Header-boton o Header-ul le remove la clase is-active a Header-ul y Header-boton
  window.addEventListener(`mousedown`, menuWindows)
  //Cuando hago scroll le remove la clase is-active a Header-ul y Header-boton
  window.addEventListener(`scroll`, menuInactive)

})()




