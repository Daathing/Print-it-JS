const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

let indexSlide = 0;

// récupération de tous les éléments ayant pour class arrow_left 
const allArrowLeft = document.getElementsByClassName('arrow_left');
// récupération du premier élément du tableau
const arrowLeft = allArrowLeft[0]
// ajout de l'event listener
arrowLeft.addEventListener('click', scrollLeft)

// ajout de la fonction scrollLeft
function scrollLeft() {
	indexSlide = (indexSlide - 1 + slides.length) % slides.length;
	updateActiveImage();
	updateActiveBullet()
	updateActiveText()
	console.log("scrollLeft")	
}

// récupération de tous les éléments ayant pour class arrow_right
const allArrowRight = document.getElementsByClassName('arrow_right');
// récupération du premier élément du tableau
const arrowRight = allArrowRight[0]
// ajout de l'event listener
arrowRight.addEventListener('click', scrollRight)

// ajout de la fonction scrollRight
function scrollRight () {
	indexSlide = (indexSlide + 1) % slides.length;
	updateActiveImage()
	updateActiveBullet()
	updateActiveText()
    console.log("scrollRight")
}

// ajout de la fonction relative au défilement du bullet point actifs
function updateActiveBullet() {
	const bullets = document.querySelectorAll(".dot");
	bullets.forEach((bullet, index) => {
	  if (index === indexSlide) {
		bullet.classList.add("dot_selected");
	  } else {
		bullet.classList.remove("dot_selected");
	  }
	});
}

// ajout de la fonction relative au défilement de l'image active
function updateActiveImage() {
	const images = document.querySelectorAll(".banner-img");
	images.forEach((image, index) => {
		if (index === indexSlide) {
		  image.classList.add("active");
		  image.style.display = "block";
		} else {
		  image.classList.remove("active");
		  image.style.display = "none";
		}
	  });
}

// ajout de la fonction relative au défilement du texte actif
function updateActiveText() {
	const textual = document.querySelectorAll(".text");
	textual.forEach((textualize, index) => {
		if (index === indexSlide) {
			textualize.classList.add("valid");
			textualize.style.display = "block"
		} else {
			textualize.classList.remove("valid");
			textualize.style.display = "none"
		}
	});
}

document.addEventListener("DOMContentLoaded", function() {
    updateActiveImage();
    updateActiveBullet();
    updateActiveText();
});
