function togglePossess() {
    if (document.getElementById("img").classList.contains("hidden")) { // If possessed      
        document.getElementById("img").classList.remove("hidden")
        document.getElementById("img2").classList.add("hidden")
    } else if (document.getElementById("img2").classList.contains("hidden")) { // If Unpossessed
        document.getElementById("img2").classList.remove("hidden")
        document.getElementById("img").classList.add("hidden")
    } else {
        window.alert("An error with possession occurred.")
    }
}

function hide() {
    window.alert("You are hiding under the floorboards")
}