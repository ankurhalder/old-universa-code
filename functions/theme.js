export const setCSSVariable = (value, name, element) => {
	element.style.setProperty(name, value);
};

export const handleThemeChange = (theme) => {
	const root = document.documentElement;
	if (theme === "light") {
		// Light Theme

		setCSSVariable("hsla(0, 0%, 100%, 1)", `--theme-bg`, root);
		setCSSVariable("hsla(0, 0%, 98%, 1)", `--theme-panel`, root);
		setCSSVariable("hsla(0, 0%, 0%, 1)", `--theme-txt`, root);
		setCSSVariable("hsla(0, 0%, 100%, 1)", "--box-shadow-1", root);
		setCSSVariable("hsla(240, 4%, 79%, 1)", "--box-shadow-2", root);
	} else {
		// Dark Theme
		setCSSVariable("hsla(210, 18%, 16%, 1)", `--theme-bg`, root);
		setCSSVariable("hsla(0, 0%, 0%, 0.1)", `--theme-panel`, root);
		setCSSVariable("hsla(0, 0%, 100%, 1)", `--theme-txt`, root);
		setCSSVariable("hsla(0, 0%, 0%, 0)", "--box-shadow-1", root);
		setCSSVariable("hsla(0, 0%, 10%, 0)", "--box-shadow-2", root);
	}
};
