//Cuando hago CLICK en .Boton[index]
// a TODOS .Content-p le remove la clase isActive
//.Content-p[index] le ADD la clase isActive

const content = document.querySelector(`.Acordeon`)
const filaAcordeon = content.querySelectorAll(`.Acordeon-section`)
const btn = content.querySelectorAll(`.Acordeon-button`)

const openAcordeon = (index) => {
    btn[index].addEventListener(`mouseup`, () => {
       if(filaAcordeon[index].classList.contains(`isActive`)){
           filaAcordeon[index].classList.remove(`isActive`)
       }
       else{
           filaAcordeon.forEach(( _ , index) => {
               filaAcordeon[index].classList.remove(`isActive`)
           })
           filaAcordeon[index].classList.add(`isActive`)
       }
       })
   }


btn.forEach(( _ , index)  => openAcordeon(index))



