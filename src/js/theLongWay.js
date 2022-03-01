let pageWelcome = document.querySelector('.page-welcome')
let pageQ1 = document.querySelector('.page-q1')
let pageQ2 = document.querySelector('.page-q2')
let pageQ3 = document.querySelector('.page-q3')
let pageQ4 = document.querySelector('.page-q4')
let pageEnd = document.querySelector('.page-end')


pageWelcome.style.display = 'block'

let prevButtonPageQ1 = document.querySelector('.page-q1 .prev')
let prevButtonPageQ2 = document.querySelector('.page-q2 .prev')
let prevButtonPageQ3 = document.querySelector('.page-q3 .prev')
let prevButtonPageQ4 = document.querySelector('.page-q4 .prev')
let prevButtonPageEnd = document.querySelector('.page-end .prev')

let nextButtonPageWelcome = document.querySelector('.page-welcome .next')
let nextButtonPageQ1 = document.querySelector('.page-q1 .next')
let nextButtonPageQ2 = document.querySelector('.page-q2 .next')
let nextButtonPageQ3 = document.querySelector('.page-q3 .next')
let nextButtonPageQ4 = document.querySelector('.page-q4 .next')



nextButtonPageWelcome.addEventListener('click' , function(){
    pageWelcome.style.display = 'none'
    pageQ1.style.display = 'block'
})

nextButtonPageQ1.addEventListener('click' , function(){
    pageQ1.style.display = 'none'
    pageQ2.style.display = 'block'
})

nextButtonPageQ2.addEventListener('click' , function(){
    pageQ2.style.display = 'none'
    pageQ3.style.display = 'block'
})

nextButtonPageQ3.addEventListener('click' , function(){
    pageQ3.style.display = 'none'
    pageQ4.style.display = 'block'
})

nextButtonPageQ4.addEventListener('click' , function(){
    pageQ4.style.display = 'none'
    pageEnd.style.display = 'block'
})



prevButtonPageQ1.addEventListener('click' , function(){
    pageQ1.style.display = 'none'
    pageWelcome.style.display = 'block'
})

prevButtonPageQ2.addEventListener('click' , function(){
    pageQ2.style.display = 'none'
    pageQ1.style.display = 'block'
})

prevButtonPageQ3.addEventListener('click' , function(){
    pageQ3.style.display = 'none'
    pageQ2.style.display = 'block'
})

prevButtonPageQ4.addEventListener('click' , function(){
    pageQ4.style.display = 'none'
    pageQ3.style.display = 'block'
})

prevButtonPageEnd.addEventListener('click' , function(){
    pageEnd.style.display = 'none'
    pageQ4.style.display = 'block'
})








