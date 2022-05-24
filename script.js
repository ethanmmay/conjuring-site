function possess() {
    document.getElementById("img2").classList.remove("hidden")
    document.getElementById("img").classList.add("hidden")
}

function unpossess() {
    document.getElementById("img").classList.remove("hidden")
    document.getElementById("img2").classList.add("hidden")
}

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