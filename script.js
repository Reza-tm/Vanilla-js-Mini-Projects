//Data
let projects = [
	{ name: "Vowels counter", address: "volwes/index.html" },
	{ name: "word reverser", address: "Reverse-word/index.html" },
	{ name: "Random Color", address: "RandomColor/index.html" },
	{ name: "Shop Project", address: "Shop-project/index.html" },
	{ name: "Clock", address: "Clock/index.html" },
	{ name: "Mouse cursor", address: "Nice-mouse/index.html" },
	{ name: "Address Selection", address: "adress-selection/index.html" },
	{ name: "City search", address: "Search/index.html" },
	{ name: "Random quete", address: "Random-quete/index.html" },
	{ name: "Picture slider", address: "Slider/index.html" },
	{ name: "Limited Form", address: "limited-Form/index.html" },
	{ name: "To Do", address: "TO-Do/index.html" },
	{ name: "Quiz App", address: "modul/index.html" },
	{ name: "Lamp", address: "Lamp/index.html" },
	{ name: "Hamburger Header", address: "Header-HtmlCss-dev/Home.html" },
];

//get Elements

const sideBarProjectWrapper = document.getElementById("sideBarProjectWrapper");
const mainProjectsWrapper = document.getElementById("mainProjectsWrapper");
let viewAllBtn = document.querySelector(".view-all");
let sideLimiter = document.getElementById("sideLimiter");
//event Listeners

document.addEventListener("DOMContentLoaded", projectMaker(projects));

// functions

function projectMaker(data) {
	let listStyles = ["side-bar-list-items", "sm:mt-4", "mt-8"];
	data.forEach((project) => {
		let sideProject = document.createElement("li");
		sideProject.classList.add(...listStyles);
		sideProject.innerHTML = `<a href=${project.address}>${project.name}</a>`;
		sideBarProjectWrapper.append(sideProject);
	});
}

function veiwAll() {
	sideLimiter.classList.toggle("h-40");
	sideLimiter.classList.toggle("overflow-hidden");
	sideLimiter.classList.toggle("h-56");
	sideLimiter.classList.toggle("overflow-scroll");
}
