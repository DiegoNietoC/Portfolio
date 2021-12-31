var nombre = "Diego";
var x = "o";
var o = "";
var correo = "diego.n.x.000@gmail.com" 

//Textos de idioma por defecto
document.getElementById("titulo").innerHTML = `${nombre} Nieto Conrado`;
document.getElementById("nombre_").innerHTML = `${nombre.toUpperCase()} NIETO CONRADO`;
document.getElementById("textAboutMe").innerHTML = `I'm ${nombre}, Front End web developer. I like to design modern and minimalist applications using HTML, CSS and Javascript. <br><br>
	Besides web development, I am interested in other fields of technology, such as robotics, electronics, and artificial intelligence. <br><br>
	When I'm not working in programming and development, I play my artistic side by drawing and illustrating with programs like Adobe Photoshop, Illustrator, and Premiere Pro. <br><br>
	I like simple and elegant solutions. I am a self-taught person and always ready to learn new technologies.`;
document.getElementById("downloadCVlink").href = `https://10ne-v.neocities.org/Portfolio/assets/${nombre}NC-CV-eng.pdf`;
document.getElementById("mail").href = `mailto:${correo}`;
document.getElementById("mail").innerHTML = correo;

//Parallax del fondo
window.onload = ()=> {
	let image = document.querySelector('body');
	console.log(image);
	window.addEventListener('scroll', (e) => {
		let scroll = window.scrollY;
		image.style.backgroundPositionY = `${scroll/2}px`;
	})
}

//Inglés
document.getElementById("engB").onclick = function() {engFxText()};
function engFxText(){
	document.getElementById("selectedLang").innerHTML = "🇬🇧";
	document.getElementById("aboutMe").innerHTML = "About me";
	document.getElementById("portfolio").innerHTML = "Portfolio";
	document.getElementById("contact").innerHTML = "Contact";
	document.getElementById("helloW").innerHTML = "Hello world. I'm";
	document.getElementById("SnA").innerHTML = "Front-End Developer";
	document.getElementById("aboutMe2").innerHTML = "About me";
	document.getElementById("textAboutMe").innerHTML = `I'm ${nombre}, Front End web developer. I like to design modern and minimalist applications using HTML, CSS and Javascript. <br><br>
														Besides web development, I am interested in other fields of technology, such as robotics, electronics, and artificial intelligence. <br><br>
														When I'm not working in programming and development, I play my artistic side by drawing and illustrating with programs like Adobe Photoshop, Illustrator, and Premiere Pro. <br><br>
														I like simple and elegant solutions. I am a self-taught person and always ready to learn new technologies.`;
	document.getElementById("works").innerHTML = "Works";
	document.getElementById("portfolio4").innerHTML = "Portfolio";
	document.getElementById("downloadCVbutton").innerHTML = "Download CV";
	document.getElementById("downloadCVlink").href = `https://10ne-v.neocities.org/Portfolio/assets/${nombre}NC-CV-eng.pdf`;
	document.getElementById("textContact").innerHTML = "Contact";
	document.getElementById("YouCanWriteMe").innerHTML = "You can write to me at:";
}

//Español
document.getElementById("espB").onclick = function() {espFxText()};
function espFxText(){
	document.getElementById("selectedLang").innerHTML = "🇲🇽";
	document.getElementById("aboutMe").innerHTML = "Sobre mí";
	document.getElementById("portfolio").innerHTML = "Portafolio";
	document.getElementById("contact").innerHTML = "Contacto";
	document.getElementById("helloW").innerHTML = "Hola mundo. Soy";
	document.getElementById("SnA").innerHTML = `Desarrollador${o} Front-End`;
	document.getElementById("aboutMe2").innerHTML = "Sobre mí";
	document.getElementById("textAboutMe").innerHTML = `Soy ${nombre}, desarrollador${o} web Front End. Me gusta diseñar aplicaciones modernas y minimalistas utliziando HTML, CSS y Javascript. <br><br>
														Además del desarrollo web, estoy interesad${x} en otros campos de la tecnología, como la robótica, electrónica e inteligencia artificial. <br><br>
														Cuando no estoy trabajando en programación y desarrollo, desempeño mi lado artístico realizando dibujos e ilustraciones con programas como Adobe Photoshop, Illustrator y Premiere Pro. <br><br>
														Me gustan las soluciones simples y elegantes. Soy una persona autodidacta y siempre dispuest${x} a aprender nuevas tecnologías.`;
	document.getElementById("works").innerHTML = "Trabajos";
	document.getElementById("portfolio4").innerHTML = "Portafolio";
	document.getElementById("downloadCVbutton").innerHTML = "Descargar CV";
	document.getElementById("downloadCVlink").href = `https://10ne-v.neocities.org/Portfolio/assets/${nombre}NC-CV-esp.pdf`;
	document.getElementById("textContact").innerHTML = "Contacto";
	document.getElementById("YouCanWriteMe").innerHTML = "Puedes escribirme a:";
}