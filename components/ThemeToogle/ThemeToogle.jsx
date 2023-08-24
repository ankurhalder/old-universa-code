import Image from "next/image";
import { useEffect } from "react";
import { handleThemeChange } from "@/hooks/theme";

function ThemeToggle() {
	const handleCheckboxChange = () => {
		const checkbox = document.getElementById("darkmode-toggle");
		const theme = checkbox.checked ? "dark" : "light";
		handleThemeChange(theme);
	};

	useEffect(() => {
		const checkbox = document.getElementById("darkmode-toggle");
		checkbox.addEventListener("change", handleCheckboxChange);

		return () => {
			checkbox.removeEventListener("change", handleCheckboxChange);
		};
	}, []);
	return (
		<div className="theme-toggle">
			<input
				className="toggle-theme-input"
				type="checkbox"
				id="darkmode-toggle"
			/>
			<label className="theme-toggle-label" htmlFor="darkmode-toggle">
				<div className="sun theme-image">
					<Image src="/theme/sun.svg" alt="Sun" width={20} height={20} />
				</div>
				<div className="moon theme-image">
					<Image src="/theme/moon.svg" alt="moon" width={20} height={20} />
				</div>
			</label>
		</div>
	);
}

export default ThemeToggle;
