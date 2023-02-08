import * as Yup from "yup"

export const phoneRegExp =
	/^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/

export const schema = Yup.object().shape({
	companyName: Yup.string().required(),
	companyTin: Yup.string().required(),
	officeName: Yup.string().required(),
	state: Yup.string().required(),
	city: Yup.string().required(),
	zipCode: Yup.string().required(),
	addressLine1: Yup.string().required(),
	phone: Yup.string().matches(
		phoneRegExp,
		"Phone should be similar to this +123456789012",
	),
})
