var menuOption = document.querySelectorAll("li");

var menuOption2 = $("li");

debugger;

menuOption.forEach((option, indx) => {
    option.addEventListener('click', function (event) {
        alert("click");
    }, false);
});

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});
