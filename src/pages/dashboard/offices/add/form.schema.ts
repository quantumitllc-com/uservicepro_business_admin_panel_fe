import * as Yup from "yup"
import { phoneRegExp } from "constants/regex"

export const schema = Yup.object().shape({
	officeName: Yup.string().required(),
	// state: Yup.string().required(),
	state: Yup.object().shape({
		label: Yup.string().required("Is required"),
		value: Yup.string().required("Is required"),
	}),
	city: Yup.string().required(),
	zipCode: Yup.string().required(),
	addressLine1: Yup.string().required(),
	addressLine2: Yup.string().notRequired(),
	phone: Yup.string().matches(
		phoneRegExp,
		"Phone should be similar to this +123456789012",
	),
})

export const defaultValues = {
	officeName: "",
	state: "",
	city: "",
	zipCode: "",
	addressLine1: "",
	addressLine2: "",
	phone: "",
}
