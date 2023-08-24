export const setCSSVariable = (value, name, element) => {
	element.style.setProperty(name, value);
};

export const handleThemeChange = (theme) => {
	const root = document.documentElement;
	if (theme === "light") {
		setCSSVariable("hsla(0, 0%, 100%, 1)", "--theme-bg", root);
		setCSSVariable("hsla(0, 0%, 98%, 1)", "--theme-panel", root);
		setCSSVariable("hsla(0, 0%, 0%, 1)", "--theme-txt", root);
	} else {
		setCSSVariable("hsla(210, 18%, 16%, 1)", "--theme-bg", root);
		setCSSVariable("hsla(0, 0%, 0%, 0.1)", "--theme-panel", root);
		setCSSVariable("hsla(0, 0%, 100%, 1)", "--theme-txt", root);
	}
	//@ applicant navbar
	const navbarPanel = document.querySelector(".navbar-panel");
	if (navbarPanel) {
		if (theme === "light") {
			navbarPanel.classList.remove("dark-theme");
			navbarPanel.classList.add("light-theme");
		} else {
			navbarPanel.classList.remove("light-theme");
			navbarPanel.classList.add("dark-theme");
		}
	}
};
