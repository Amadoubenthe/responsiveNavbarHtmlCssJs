// Recuper le boutton qui a l'id 'btnToggler'
const btnToggler = document.getElementById('btnToggler');

// Recuper l'élément HTML avec la classe "navigation"
const navigation = document.querySelector('.navigation');

// Ajouter un écouteur d'événement "click" sur l'élément btnToggler, et ajouter ou retirer la classe "active" sur l'élément navigation

btnToggler.addEventListener('click', toggleMenu);

function toggleMenu() {
	navigation.classList.toggle('active');
}
