import * as Yup from "yup"

export const schema = Yup.object().shape({
	email: Yup.string().email("Email is invalid").required("Email is required"),
})
