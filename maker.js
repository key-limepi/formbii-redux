// skin colors

const skin1 = '#F7D4BE'
const skin2 = '#FBD0AE'
const skin3 = '#F8B6A6'
const skin4 = '#F9BE92'
const skin5 = '#F4A28A'
const skin6 = '#F8B26D'
const skin7 = '#E38968'
const skin8 = '#DA8D57'
const skin9 = '#D37144'
const skin10 = '#A4492A'
const skin11 = '#833423'
const skin12 = '#533125'
const skin13 = '#5E2418'
const skin14 = '#3A2C23'

// body

let head = 1
let eye = 1
let mouth = 1
let nose = 1
let gender = "n"
let skin = skin1

// accessories

let pants = 1
let shirt = 1

// changing skin color
document.addEventListener('DOMContentLoaded', function() {

    const img = document.getElementById("testimg")

    console.log("content loaded!!")

    document.getElementById("testb1").addEventListener("click", function() {
        img.style.backgroundColor = skin1
    })

    document.getElementById("testb2").addEventListener("click", function() {
        img.style.backgroundColor = skin2
    })

    document.getElementById("testb3").addEventListener("click", function() {
        img.style.backgroundColor = skin3
    })

    document.getElementById("testb4").addEventListener("click", function() {
        img.style.backgroundColor = skin4
    })

    document.getElementById("testb5").addEventListener("click", function() {
        img.style.backgroundColor = skin5
    })

    document.getElementById("testb6").addEventListener("click", function() {
        img.style.backgroundColor = skin6
    })

    document.getElementById("testb7").addEventListener("click", function() {
        img.style.backgroundColor = skin7
    })

    document.getElementById("testb8").addEventListener("click", function() {
        img.style.backgroundColor = skin8
    })

    document.getElementById("testb9").addEventListener("click", function() {
        img.style.backgroundColor = skin9
    })

    document.getElementById("testb10").addEventListener("click", function() {
        img.style.backgroundColor = skin10
    })

    document.getElementById("testb11").addEventListener("click", function() {
        img.style.backgroundColor = skin11
    })

    document.getElementById("testb12").addEventListener("click", function() {
        img.style.backgroundColor = skin12
    })

    document.getElementById("testb13").addEventListener("click", function() {
        img.style.backgroundColor = skin13
    })

    document.getElementById("testb14").addEventListener("click", function() {
        img.style.backgroundColor = skin14
    })

})