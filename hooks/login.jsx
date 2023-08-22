import { useState } from "react";
import { useRouter } from "next/router";

function useLogin() {
	const router = useRouter();
	const [userId, setUserId] = useState("2023005500");
	const [password, setPassword] = useState("Universa@2021");

	function isPasswordValid(password) {
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return passwordRegex.test(password);
	}

	function handleLogin() {
		console.log("hitted login api");
		if (!isPasswordValid(password)) {
			alert(
				"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character."
			);
			setPassword("");
		} else {
			fetch(
				`https://universa-api-gateway.onrender.com/services/account/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						user_id: userId,
						password: password,
					}),
				}
			)
				.then(function (response) {
					if (response.ok) {
						console.log(response);

						return response.json();
					} else {
						throw new Error(response.statusText);
					}
				})
				.then(function (data) {
					console.log(data);
					localStorage.setItem("applicant_login_data", data.authToken);
					localStorage.setItem("user_type", data.data.type);
					if (data.status === true && data.data.type === "applicant") {
						router.push("/applicant");
						const a = localStorage.getItem("applicant_login_data");
						console.log(a);
					} else {
					}
				})
				.catch(function (error) {
					console.error("Error logging in:", error);
				});
		}
	}

	return {
		userId,
		setUserId,
		password,
		setPassword,
		handleLogin,
	};
}

export default useLogin;
