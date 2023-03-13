import * as Yup from "yup"
import { phoneRegExp } from "constants/regex"

export const schema = Yup.object().shape({
	companyName: Yup.string().required(),
	companyTin: Yup.string().required(),
	officeName: Yup.string().required(),
	// state: Yup.string().required(),
	state: Yup.object().shape({
		label: Yup.string().required("Is required"),
		value: Yup.string().required("Is required")
	}),
	city: Yup.string().required(),
	zipCode: Yup.string().required(),
	addressLine1: Yup.string().required(),
	phone: Yup.string().matches(
		phoneRegExp,
		"Phone should be similar to this +123456789012",
	),
})
