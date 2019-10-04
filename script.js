const dropdownArea = () => {
	const menu = document.querySelector(".menu");
	const nav = document.querySelector(".nav-bar");
	const exit = document.querySelector(".exit");

	menu.addEventListener("click", () => {
		nav.classList.toggle("flow");
	});
	exit.addEventListener("click", () => {
		nav.classList.toggle("flow");
	});
};

dropdownArea();
