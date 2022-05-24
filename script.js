let possessed = false

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