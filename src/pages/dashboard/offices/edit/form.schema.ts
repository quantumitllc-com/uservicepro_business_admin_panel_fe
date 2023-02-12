import * as Yup from "yup"
import { phoneRegExp } from "constants/regex"

export const schema = Yup.object().shape({
	name: Yup.string(),
	state: Yup.string(),
	city: Yup.string(),
	zipCode: Yup.string(),
	addressLine1: Yup.string(),
	addressLine2: Yup.string(),
	phone: Yup.string().matches(
		phoneRegExp,
		"Phone should be similar to this +123456789012",
	),
})

export const defaultValues = {
	name: "",
	state: "",
	city: "",
	zipCode: "",
	addressLine1: "",
	addressLine2: "",
	phone: "",
}
