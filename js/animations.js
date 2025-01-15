const ANIMATION_SPEED = 50

function increaseAnimationStep(count, element, endNumber){
    console.log("element.innerText " + element.innerText)
    if(count <= endNumber){
        element.innerText = count
        count += 255
        setTimeout(increaseAnimationStep, ANIMATION_SPEED, count, element, endNumber)
    }else{
        element.innerText = "5000+"
    }
}

element = document.querySelector(".features__clients-count")
increaseAnimationStep(100, element, 5000)
