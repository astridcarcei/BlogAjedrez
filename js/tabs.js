// Seleccion de elementos del DOM para la seccion de articulos
//Cuando hago click en Article-button[index] 
// a Todos los Article-item[index] le add la clase is-hiden
// a Todos los Article-item[index]  que esten en categoryMap[index] le remove la clase is-hiden

//Se define una función anónima autoejecutable 
//Se hace referencia en article.html

(function() {

const sectionArticle = document.querySelector(`.Articles`)
const btnsArticle = sectionArticle.querySelectorAll(`.Articles-button`)
const articles = sectionArticle.querySelectorAll(`.Article-item`)
const categoryP = sectionArticle.querySelectorAll(`.Article-item--primary`)
const categoryS = sectionArticle.querySelectorAll(`.Article-item--secondary`)
const categoryT = sectionArticle.querySelectorAll(`.Article-item--tertiary`)
// Defino un objeto categoryMap con las categorias de los articulos para poder recorrelos
const categoryMap = {
    0: articles,
    1: categoryP,
    2: categoryS,
    3: categoryT
}

//Funcion Handler para ocultar los articulos

const articleHidden = (index) => {
    btnsArticle[index].addEventListener(`mouseup`, () => {
        articles.forEach(( _ , index) => 
        articles[index].classList.add(`is-hiden`))
        categoryMap[index].forEach(article => article.classList.remove(`is-hiden`))
})
}

// Cuando hago click en Article-button se ejecuta articleHidden
btnsArticle.forEach(( _ , index) => articleHidden(index))
})()

