const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const slideBar = document.querySelector('.sidebar')
const slideBars = document.querySelectorAll('.sidebar>div')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
const arrColor = document.querySelectorAll('button')

let actSlideIndex = 0
slideBar.style.top = `-${(slidesCount-1)*100}vh`

const colage = barOfColor(slideBars, slidesCount)

arrowColorDefault (colage)

upBtn.addEventListener('click', () => {
    changeSlide ('up')
    
})

downBtn.addEventListener('click', () => {
    changeSlide ('down')
    
})

document.addEventListener('keydown', (event) => {
    // console.log('key', event.key)
    if (event.key === 'ArrowUp') {
        changeSlide ('up')

    } else if (event.key === 'ArrowDown') {
        changeSlide ('down')

    }
})

function changeSlide (direction,) {
    if (direction === 'up'){
        
        actSlideIndex++
        
        if (actSlideIndex === slidesCount){
            actSlideIndex = 0
        }
    } else if(direction === 'down') {
        
        actSlideIndex--
        
        if (actSlideIndex < 0){
            actSlideIndex = slidesCount-1  
        }
    }

    const windowheight = container.clientHeight

    mainSlide.style.transform = `translateY(-${actSlideIndex * windowheight}px)`

    slideBar.style.transform = `translateY(${actSlideIndex * windowheight}px)`

    const color = colage[((slidesCount-1)-actSlideIndex)]

    colagePromt(color)
} 

function barOfColor(slideBars, slidesCount){
    
    const barColors=[]
    for (let i = 0; i<slidesCount; i++) {
        const current = slideBars[i].style.background       
        barColors.push(current) 
    }
    console.log(barColors)
    return barColors  
}

function arrowColorDefault(colage){
    
    const colorDefault = colage[((slidesCount-1)-actSlideIndex)]
    colagePromt(colorDefault)
}

function colagePromt(currentColor) {
    for (let i =0; i<2; i++){
    arrColor[i].style.color = `${currentColor}`
    }

}