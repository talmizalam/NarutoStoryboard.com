const slide = document.querySelectorAll(".slide")
var counter= 0;
//console,log (slide)
slide.forEach(
    (slide,index) => {
        slide.style.left =  `${index * 100}%`
    }
)

const goPrev = () => {
    if(counter==0)
        counter=slide.length
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    if(counter==slide.length)
        counter=0
    slideImage()
}

const slideImage = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
