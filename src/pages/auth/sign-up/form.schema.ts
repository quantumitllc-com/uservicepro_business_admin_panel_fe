import * as Yup from "yup"

export const schema = Yup.object().shape({
	// userType: Yup.string().required(),
	email: Yup.string().email("Email is invalid").required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.matches(
			// eslint-disable-next-line
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
		),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Confirm Password is required"),
})
