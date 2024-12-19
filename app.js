// Afficher un pop-up
//alert("Press Ok pour entrer dans le site");

// Carrousel
const image = document.getElementById("image");
const image2 = document.getElementById("image2");
const up = document.body;
image.style.top = 0
let tempY = 0
const sun = document.getElementById("soleil");
const moon = document.getElementById("lune");
sun.style.color = "green";
moon.style.color = "black";
let tabImage = ["image.webp", "image2.jpg", "image3.jpg"]
let tabImageBack = ["image2.jpg", "image3.jpg", "image.webp"]
const btnNext = document.getElementById("next")
let numberImage = 0

console.log(tabImage[0])


console.log(tabImage[tabImage.length-1])

/*image.addEventListener("click", function () {
    if (image.src.endsWith("image.webp")) {
        image.src = "image2.webp";
    } else {
        image.src = "image.webp";
    }
});*/

// Faire bouger une image
up.addEventListener("keypress", function () {
    console.log(image.style.top);
    tempY = -2 + tempY;
    image.style.top = tempY + 'px';
});

// Mode Sombre
sun.addEventListener("click", function () {
    sun.style.color = "green";
    moon.style.color = "black";
    up.style.backgroundColor = "white";
    up.style.color = "black";
})

moon.addEventListener("click", function () {
    moon.style.color = "green";
    sun.style.color = "white";
    up.style.backgroundColor = "black";
    up.style.color = "white";
    up.style.borderStyle = "green";
})


//Carrousel V1
btnNext.addEventListener("click", function () {
    numberImage = (numberImage + 1) % tabImage.length;
    image.src = tabImage[numberImage];
    image2.src = tabImageBack[numberImage];
});

image2.addEventListener("click", function () {

    numberImage = (numberImage + 1) % tabImage.length;
    image.src = tabImage[numberImage];
    image2.src = tabImageBack[numberImage];
})

/*// Boucle type
for (let i=0; i<3; i=i+1) {
}*/
