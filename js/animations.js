const ANIMATION_SPEED = 80

function generateFromTo(min, max){
    return Number((Math.random() * (max - min) + min).toFixed())
}

// анимация счетчика количества клиентов
function increaseAnimationStep(count, element, endNumber){
    if(count <= endNumber){
        element.innerText = count
        count += generateFromTo(150, 250)
        setTimeout(increaseAnimationStep, ANIMATION_SPEED, count, element, endNumber)
    }else{
        element.innerText = endNumber + "+"
    }
}

element = document.querySelector(".features__clients-count")
increaseAnimationStep(100, element, 7000)

// выбор стоимости, поле "Другое"
function handlerFunction(event){
        if(event.target.value === "other"){
            let input = document.createElement("input")
            input.placeholder = "Введите ваш вариант (числовое значение)"
            input.type = "number"
            input.min = 0

            let formOtherInput = document.createElement("div")
            formOtherInput.classList.add("form__group", "form__other-input")
            formOtherInput.append(input)

            let formContainerForm = document.querySelector(".form_container form")
            formContainerForm.append(formOtherInput)
        } else {
            let formOtherInput = document.querySelector(".form__other-input")
            if(formOtherInput){
                formOtherInput.remove()
            }
        }
}

document.querySelector("#price").addEventListener("change", handlerFunction)

// изменение стиля header
function updateScroll(event){
    let header = document.querySelector("header")
    if(window.scrollY !== 0){
        header.classList.add("header__scrolled")
    }else{
        header.classList.remove("header__scrolled")
    }
}
window.addEventListener("scroll", updateScroll)
