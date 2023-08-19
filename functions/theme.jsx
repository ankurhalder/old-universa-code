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
		setCSSVariable("hsla(0, 0%, 100%, 1)", `--theme-txt-secondary`, root);
		setCSSVariable("hsla(0, 0%, 85%, 1)", `--theme-accent`, root);
		setCSSVariable("hsla(120, 60%, 50%, 1)", `--theme-primary`, root);
		setCSSVariable("hsla(0, 0%, 40%, .3)", `--theme-secondary`, root);
		setCSSVariable("hsla(240, 100%, 50%, 1)", `--theme-tertiary`, root);
		setCSSVariable("hsla(30, 100%, 50%, 1)", `--theme-quaternary`, root);
		setCSSVariable("hsla(60, 100%, 50%, 1)", `--theme-quinary`, root);
		// gradient
		setCSSVariable(
			"linear-gradient(to bottom, hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0))",
			`--gradient-bg`,
			root
		);
		// Glassmorphism
		setCSSVariable("rgba(255, 255, 255, 0.2)", `--glass-bg`, root);
		setCSSVariable("rgba(0, 0, 0, 0.1)", `--glass-border`, root);

		// Neumorphism
		setCSSVariable("rgba(0, 0, 0, 0.2)", `--neu-shadow-dark`, root);
		setCSSVariable("rgba(255, 255, 255, 0.5)", `--neu-shadow-light`, root);
	} else {
		// Dark Theme
		setCSSVariable("hsla(210, 18%, 16%, 1)", `--theme-bg`, root);
		setCSSVariable("hsla(225, 20%, 23%, 0.1)", `--theme-panel`, root);
		setCSSVariable("hsla(0, 0%, 100%, 1)", `--theme-txt`, root);
		setCSSVariable("hsla(0, 0%, 0%, 1)", `--theme-txt-secondary`, root);
		setCSSVariable("hsla(210, 100%, 50%, 1)", `--theme-accent`, root);
		setCSSVariable("hsla(210, 60%, 45%, 1)", `--theme-primary`, root);
		setCSSVariable("hsla(0, 0%, 70%, .3)", `--theme-secondary`, root);
		setCSSVariable("hsla(240, 100%, 50%, 1)", `--theme-tertiary`, root);
		setCSSVariable("hsla(30, 100%, 50%, 1)", `--theme-quaternary`, root);
		setCSSVariable("hsla(60, 100%, 50%, 1)", `--theme-quinary`, root);
		// gradient
		setCSSVariable(
			"linear-gradient(to bottom, hsla(210, 18%, 16%, 0.8), hsla(210, 18%, 16%, 0))",
			`--gradient-bg`,
			root
		);
		// Glassmorphism
		setCSSVariable("rgba(0, 0, 0, 0.3)", `--glass-bg`, root);
		setCSSVariable("rgba(255, 255, 255, 0.1)", `--glass-border`, root);

		// Neumorphism
		setCSSVariable("rgba(0, 0, 0, 0.4)", `--neu-shadow-dark`, root);
		setCSSVariable("rgba(255, 255, 255, 0.4)", `--neu-shadow-light`, root);
	}
};

// Gradients
// setCSSVariable(
// 	"linear-gradient(90deg, var(--theme-primary), var(--theme-secondary))",
// 	`--gradient-primary-secondary`,
// 	root
// );
// setCSSVariable(
// 	"radial-gradient(circle, var(--theme-primary), var(--theme-secondary))",
// 	`--gradient-primary-secondary-radial`,
// 	root
// );
// setCSSVariable(
// 	"linear-gradient(45deg, var(--theme-primary), var(--theme-secondary))",
// 	`--gradient-primary-secondary-diagonal`,
// 	root
// );
// setCSSVariable(
// 	"linear-gradient(to top, var(--theme-primary), var(--theme-secondary))",
// 	`--gradient-primary-secondary-top`,
// 	root
// );
// setCSSVariable(
// 	"linear-gradient(to bottom, var(--theme-primary), var(--theme-secondary))",
// 	`--gradient-primary-secondary-bottom`,
// 	root
// );
// setCSSVariable(
// 	"linear-gradient(to left, var(--theme-primary), var(--theme-secondary))",
// 	`--gradient-primary-secondary-left`,
// 	root
// );
// setCSSVariable(
// 	"linear-gradient(to right, var(--theme-primary), var(--theme-secondary))",
// 	`--gradient-primary-secondary-right`,
// 	root
// );
