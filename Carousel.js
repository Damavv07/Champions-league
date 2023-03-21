$(document).ready(function () {
    const slides = document.querySelectorAll(".slide");

    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

    // select next slide button
    const nextSlide = document.querySelector(".btn-next");

    // current slide counter
    var curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length - 1;

    // add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        //   move slide by -100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });


    // select prev slide button
    const prevSlide = document.querySelector(".btn-prev");

    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });


    
   var DogsData =  [
    {
        "DogId":1,
        "Name": "PSG",
        "Description": "El Paris Saint-Germain Football Club, conocido popularmente por sus siglas PSG, es una entidad polideportiva francesa con sede en París. Fue fundada el 12 de agosto de 1970 tras la fusión del Paris Football Club y el Stade Saint-Germain."
    },
    {
        "DogId":2,
        "Name": "FC Barcelona",
        "Description": "El club fue fundado oficialmente el veintinueve de noviembre de 1899. Creció y cobró fuerza, ganando títulos como la Copa Macaya en 1902, la Copa de los Pirineos en 1910 - 1912. El FC Barcelona construyó su primer estadio en 1909 con una capacidad de 6.000 personas."
    },
    {
        "DogId":3,
        "Name": "Napoli",
        "Description": "La Società Sportiva Calcio Napoli es un club de fútbol de la ciudad de Nápoles, Italia. Fue fundado el 1 de agosto de 1926 y juega en la Serie A italiana. Utiliza camiseta celeste con vivos blancos y pantalón blanco desde 1926, y juega de local en el Estadio San Paolo desde 1959."
    },
    {
        "DogId":4,
        "Name": "Manchester City",
        "Description": "El Manchester City Football Club, conocido como Manchester City, es un club de fútbol de la ciudad de Mánchester, Inglaterra, que juega en la Premier League. Fue fundado el 23 de noviembre de 1880 bajo el nombre de St."
    },
    {
        "DogId":5,
        "Name": "Real Madrid",
        "Description": "El Real Madrid Club de Fútbol es un club polideportivo de la ciudad de Madrid, España. Fundado el 6 de marzo de 1902 como Sociedad Madrid Foot-Ball Club, en su rama futbolística - que juega en la Primera División de España - fue denominado por la FIFA el Mejor Club del Siglo XX."
    }
  ];



    function setName(){                 
        var dog  =  DogsData.filter(
            function(data){ return data.DogId == curSlide + 1 }
        );
        $(".DogName").html(dog[0].Name);  
        $(".DogContent").html(dog[0].Description);           
    };
   
    setName();
    
    $(".btn-next").on("click",function () {       
        setName();    
    });

    $(".btn-prev").on("click",function () {       
        setName();
    });

})
