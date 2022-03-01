let allPages = document.querySelectorAll('.page')
let allNextButtons = document.querySelectorAll('.next')
let allPrevButtons = document.querySelectorAll('.prev')
let allJumpButtons = document.querySelectorAll('[data-jump]')
let optionsA = document.querySelectorAll('.option.A')
let optionsB = document.querySelectorAll('.option.B')
let optionsC = document.querySelectorAll('.option.C')
let optionsD = document.querySelectorAll('.option.D')
let allOptions = document.querySelectorAll('.options')
let apple = 0
let orange = 0 
let grape = 0 
let banana = 0 
let allOptionsButtons = document.querySelectorAll('.option')
let resultsButtton = document.querySelectorAll('.results')
let resultsPage = document.querySelector(".page-end")

allPages[0].classList.add('show')

let currentPage = 0

let jumpToPage = function(pageNumber){
    allPages[currentPage].classList.remove('show')
    currentPage = pageNumber
    allPages[currentPage].classList.add('show')
}



let nextPage = function(){
    allPages[currentPage].classList.remove('show')
    currentPage++
    allPages[currentPage].classList.add('show')
}

let prevPage = function(){
    allPages[currentPage].classList.remove('show')
    currentPage--
    allPages[currentPage].classList.add('show')
}

allNextButtons.forEach(function(nextButton){
    // console.log(nextButton)
    nextButton.addEventListener('click' , nextPage)
})

allPrevButtons.forEach(function(prevButton){
    // console.log(prevButton)
    prevButton.addEventListener('click' , prevPage)
})

allJumpButtons.forEach(function(jumpButton){
    let pageNumber = jumpButton.getAttribute('data-jump')
    // console.log(jumpButton)
    jumpButton.addEventListener('click' , function(){
        jumpToPage(pageNumber)
    })
})





let results = function(){
    console.log(this.parentElement.querySelectorAll('.option'))

    this.parentElement.querySelectorAll('.option').forEach(function(sibling){
        sibling.classList.remove("selected")
    });

    this.classList.add("selected")
    // console.log(resultsA)
    // child.classList.remove("selected")
}

allOptionsButtons.forEach(function(div){
    // console.log(div)
    div.addEventListener('click' , results)
})

let calculations = function(){
    apple = document.querySelectorAll('.apple.selected').length
    orange = document.querySelectorAll('.orange.selected').length
    grape = document.querySelectorAll('.grape.selected').length
    banana = document.querySelectorAll('.banana.selected').length

    if (apple > 2) {
       let resultsApple = document.createElement("div")
       resultsApple.classList.add('results')
       resultsApple.innerText = "You're an Apple!"
       resultsPage.append(resultsApple)
    } if (orange > 2) {
        let resultsOrange = document.createElement("div")
        resultsOrange.classList.add('results')
        resultsOrange.innerText = "You're an Orange!"
        resultsPage.append(resultsOrange)
    } if (grape > 2) {
        let resultsGrape = document.createElement("div")
        resultsGrape.classList.add('results')
        resultsGrape.innerText = "You're a Grape!"
        resultsPage.append(resultsGrape)
    } if (banana > 2) {
        let resultsBanana = document.createElement("div")
        resultsBanana.classList.add('results')
        resultsBanana.innerText = "You're a Banana!"
        resultsPage.append(resultsBanana)
    }
}

// console.log(calculations)

resultsButtton.forEach(function(nextButton){
    nextButton.addEventListener('click' , function(){
        calculations();
        nextPage();
    })
    
})





