let possessed = false
let changedBefore = false

function togglePossess() {
    if (possessed) { 
        // Unpossess
        document.getElementById("img").classList.remove("hidden")
        document.getElementById("img2").classList.add("hidden")
        possessed = false
    } else if (!possessed) {
        // Possess
        document.getElementById("img2").classList.remove("hidden")
        document.getElementById("img").classList.add("hidden")
        possessed = true
    } else {
        window.alert("An error with possession occurred.")
    }
}

function hide() {
    window.alert("You are hiding in the walls behind the wardrobe")
}

function updateBump() {
    value = document.getElementById("wardrobeBump").value
    console.log("updated bump range - " + value)
    // when value changes, change classlist of girl to move away or towards wardrobe
    
    
    if (changedBefore) {
        let marginLeftNewClass = "margin-left-" + value*20
        document.getElementById("wardrobeGirl").classList.replace(marginLeftClass, marginLeftNewClass)
        marginLeftClass = marginLeftNewClass
        //console.log(document.getElementById("wardrobeGirl").classList.toString())
    } else {
        marginLeftClass = "margin-left-" + value*20
        //console.log(marginLeftClass)
        document.getElementById("wardrobeGirl").classList.replace("margin-left-0", marginLeftClass)
        changedBefore = true
    }
    
}