//data
let projects = [
	{ name: "Vowels counter", address: "volwes/index.html" },
	{ name: "word reverser", address: "Reverse-word/index.html" },
	{ name: "Random Color", address: "RandomColor/index.html" },
	{ name: "Shop Project", address: "Shop-project/index.html" },
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
	{ name: "Clock", address: "Clock/index.html" },
];
//get Elements

const sideBarProjectWrapper = document.getElementById("sideBarProjectWrapper");
const mainProjectWrapper = document.getElementById("mainProjectWrapper");
const mainProjectsWrapper = document.getElementById("mainProjectsWrapper");
let viewAllBtn = document.querySelector(".view-all");
let sideLimiter = document.getElementById("sideLimiter");

//event Listeners

document.addEventListener("DOMContentLoaded", projectMaker(projects));
document.addEventListener("DOMContentLoaded", mainPageProject(projects));

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

function mainPageProject(data) {
	data.forEach((miniProjects) => {
		let niceColors = [
			"project1",
			"project1",
			"project3",
			"project4",
			"project5",
			"project6",
			"project7",
			"project8",
			"project9",
			"project10",
			"project11",
			"project12",
			"project13",
			"project14",
			"project15",
			"project16",
			"project17",
		];
		let mi = miniProjects.name.split(" ");
		let first = mi[0].charAt(0);
		let second = mi[1] ? mi[1].charAt(0) : "";
		let color = niceColors[Math.floor(Math.random() * 17)];
		let mainProjectBox = document.createElement("div");
		mainProjectBox.innerHTML = `<a href="${miniProjects.address}"
		class="project block ${color} lg:h-32 lg:w-32 w-44 h-44 rounded-2xl">
		<p class="font-bold text-white text-5xl uppercase">${first + second}</p>
		</a>
		<p class="project-name text-sm mt-3 lg:w-32 w-44 text-center">
			${miniProjects.name}
		</p>`;
		mainProjectWrapper.append(mainProjectBox);
	});
}

// select header
let projectSection = document.getElementById("projectSection");
let headerItemsHtml = document.getElementsByClassName("headerItems");
let pagesHtml = document.getElementsByClassName("pages");
function headerClick(id, pageId) {
	// style on click
	let headerItems = [...headerItemsHtml];
	let filtered = headerItems.filter((e) => e.id !== id);
	let selectedHeader = headerItems.find((e) => e.id == id);
	selectedHeader.classList.add("active");
	filtered.forEach((e) => {
		e.classList.remove("active");
	});

	// change page on click
	let pages = [...pagesHtml];
	const selectedPage = pages.find((e) => e.id == id);
	selectedPage.classList.remove("hidden");
	const filterdPage = pages.filter((e) => e.id !== id);
	filterdPage.forEach((e) => {
		e.classList.add("hidden");
	});
}

function pageHiddenOrVisible(id) {}
