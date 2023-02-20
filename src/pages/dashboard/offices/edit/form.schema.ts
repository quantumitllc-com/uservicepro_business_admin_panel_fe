import * as Yup from "yup"

export const schema = Yup.object().shape({
	name: Yup.string().required(),
	state: Yup.string().required(),
	city: Yup.string().required(),
	zipCode: Yup.string().required(),
	addressLine1: Yup.string().required(),
	addressLine2: Yup.string().required(),
})

export const defaultValues = {
	name: "",
	state: "",
	city: "",
	zipCode: "",
	addressLine1: "",
	addressLine2: "",
}
