//Cuando hago CLICK en .Sliderbtn
 // .Slider-container se translateX()
//Variables y constantes
const sliderBtn = document.querySelectorAll(`.Galeria-btn`)
const sliderContainer = document.querySelector(`.Galeria-container`)
const sliderNext = document.querySelector(`.Galeria-arrow--next`)
const sliderPrev = document.querySelector(`.Galeria-arrow--prev`)        
console.log(sliderBtn)
console.log(sliderContainer)
console.log(sliderNext)
console.log(sliderPrev)

let anchoImagenes = 100 / 4
let contador = 0

   //Eventos
sliderBtn.forEach( (_ , index)=> { 
sliderBtn[index].addEventListener('click', () => {
        contador = index   
        sliderContainer.style.transform = `translateX(-${ anchoImagenes * contador }%)`
       })
   })

sliderNext.addEventListener(`click`, () => {
   contador++

   if(contador >= 4){
       contador = 0
   }
   sliderContainer.style.transform = `translateX(-${ anchoImagenes * contador }%)`
   })

sliderPrev.addEventListener(`click`, () => {
    contador--
   
    if(contador <= 0){
        contador = 0
    }
    sliderContainer.style.transform = `translateX(-${ anchoImagenes * contador }%)`
})