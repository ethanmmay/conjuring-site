let possessed = false
let changedBefore = false
let crowPossesedBefore = false
let crowCounter = 0

function togglePossess() {
    if (possessed) { 
        // Unpossess
        document.getElementById("img").classList.remove("hidden")
        document.getElementById("img2").classList.add("hidden")
        document.getElementById("possess-button").classList.remove("hidden")
        document.getElementById("unpossess-button").classList.add("hidden")
        possessed = false
    } else if (!possessed) {
        // Possess
        document.getElementById("img2").classList.remove("hidden")
        document.getElementById("img").classList.add("hidden")
        document.getElementById("possess-button").classList.add("hidden")
        document.getElementById("unpossess-button").classList.remove("hidden")
        possessed = true
    } else {
        window.alert("An error with possession occurred.")
    }
}

function hide() {
    document.getElementById("weightForm").classList.remove("hidden")
    document.getElementById("img").classList.add("hidden")
    window.alert("You are hiding in the walls behind the wardrobe")
}

function updateBump() {
    value = document.getElementById("wardrobeBump").value
    console.log("updated bump range - " + value)
    // when value changes, change classlist of girl to move away or towards wardrobe
    
    if (changedBefore) {
        let marginLeftNewClass = "margin-left-" + value
        document.getElementById("wardrobeGirl").classList.replace(marginLeftClass, marginLeftNewClass)
        marginLeftClass = marginLeftNewClass
        //console.log(document.getElementById("wardrobeGirl").classList.toString())
    } else {
        marginLeftClass = "margin-left-" + value
        //console.log(marginLeftClass)
        document.getElementById("wardrobeGirl").classList.replace("margin-left-0", marginLeftClass)
        changedBefore = true
    }
    
}

function acquireMusicBox() {
    document.getElementById("hint").classList.remove("hidden")
    document.getElementById("img").classList.add("hidden")
}

function possessCrow() {
    let topMargin = "margin-top-" + (Math.floor(Math.random() * 3) * 100)
    let leftMargin = "margin-left-" + (Math.floor(Math.random() * 3) * 100)
    if (crowPossesedBefore) {
        // Replace previous class with new class
        document.getElementById("crow").classList.replace(oldTopMargin, topMargin)
        document.getElementById("crow").classList.replace(oldLeftMargin, leftMargin)
    } else {
        // Replace 0 class with new class
        document.getElementById("crow").classList.replace("margin-top-0", topMargin)
        document.getElementById("crow").classList.replace("margin-left-0", leftMargin)
        crowPossesedBefore = true
    }
    oldTopMargin = topMargin
    oldLeftMargin = leftMargin
    crowCounter++
    document.getElementById("crowCounter").innerText = crowCounter
}

function piano(val) {
    if (val == 2) {
        window.alert("The piano is playing by itself! OOooohh! So spooky!")
    } else {
        window.alert("It's just a piano")
    }
}

function fall() {
    weight = document.getElementById("weightFormInput").value
    console.log(weight)
    document.getElementById("weightForm").classList.add("hidden")
    if (weight > 100) {
        //Fall through
        document.getElementById("fallText").classList.remove("hidden")
    } else {
        document.getElementById("fineText").classList.remove("hidden")
    }
}