const image1 = document.getElementById("image")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const text1 = document.getElementById("t-1")
const text2 = document.getElementById("t-2")
const text3 = document.getElementById("t-3")
const progress = document.getElementById("progressive")


text1.style.display = "block";

image2.addEventListener("click", function () {
    image2.animate(
        [
            {transform: "translateX(0px)", width: "60%"},
            {transform: "translateX(-550px)", width: "80%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );

    image1.animate(
        [
            {transform: "translateX(0px)", width: "80%"},
            {transform: "translateX(-550px)", width: "60%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );


    image3.animate(
        [
            {transform: "translateX(0px)", width: "80%"},
            {transform: "translateX(1150px)", width: "60%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );

})

image3.addEventListener("click", function () {
    image3.animate(
        [
            {transform: "translateX(0px)", width: "60%"},
            {transform: "translateX(550px)", width: "80%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );

    image1.animate(
        [
            {transform: "translateX(0px)", width: "80%"},
            {transform: "translateX(-550px)", width: "60%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );


    image2.animate(
        [
            {transform: "translateX(0px)", width: "80%"},
            {transform: "translateX(0)", width: "60%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );

})

image1.addEventListener("click", function () {
    image1.animate(
        [
            {transform: "translateX(0px)", width: "60%"},
            {transform: "translateX(0px)", width: "80%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );

    image3.animate(
        [
            {transform: "translateX(0px)", width: "80%"},
            {transform: "translateX(0px)", width: "60%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );


    image2.animate(
        [
            {transform: "translateX(0px)", width: "80%"},
            {transform: "translateX(0px)", width: "60%"},

        ],
        {
            duration: 200,
            fill: "forwards",
        }
    );

})

image1.addEventListener("click", function () {
    text1.style.display = "block";
    text2.style.display = "none";
    text3.style.display = "none";
})


image2.addEventListener("click", function () {
    text2.style.display = "block";
    text1.style.display = "none";
    text3.style.display = "none";
})


image3.addEventListener("click", function () {
    text3.style.display = "block";
    text1.style.display = "none";
    text2.style.display = "none";
})


image2.addEventListener("click", function () {
    progress.animate(
        [
            {transform: "translateX(0px)", width: "100px"},
            {transform: "translateX(0px)", width: "800px"},

        ],
        {
            duration: 1000,
            fill: "forwards",
        }
    )
});

image3.addEventListener("click", function () {
    progress.animate(
        [
            {transform: "translateX(0px)", width: "100px"},
            {transform: "translateX(0px)", width: "1500px"},

        ],
        {
            duration: 1000,
            fill: "forwards",
        }
    )
});

image1.addEventListener("click", function () {
    progress.animate(
        [
            {transform: "translateX(0px)", width: "1500px"},
            {transform: "translateX(0px)", width: "100px"},

        ],
        {
            duration: 500,
            fill: "forwards",
        }
    )
});