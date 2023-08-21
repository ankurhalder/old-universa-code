import Image from "next/image";
import { useEffect } from "react";
import { handleThemeChange } from "@/hooks/theme";
function ThemeToogle() {
	useEffect(() => {
		const checkbox = document.getElementById("darkmode-toggle");

		checkbox.addEventListener("change", () => {
			const theme = checkbox.checked ? "dark" : "light";
			handleThemeChange(theme);
		});

		// Clean up the event listener when the component unmounts
		return () => {
			checkbox.removeEventListener("change", () => {
				const theme = checkbox.checked ? "dark" : "light";
				handleThemeChange(theme);
			});
		};
	}, []);
	return (
		<div className="theme-toogle">
			<input
				className="toogle-theme-input"
				type="checkbox"
				id="darkmode-toggle"
			/>
			<label className="theme-toogle-label" htmlFor="darkmode-toggle">
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

export default ThemeToogle;
