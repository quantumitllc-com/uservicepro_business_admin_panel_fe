import * as Yup from "yup"
import { phoneRegExp } from "../../../pre-dashboard/business/detail/form.schema"

export const schema = Yup.object().shape({
	officeName: Yup.string().required(),
	state: Yup.string().required(),
	city: Yup.string().required(),
	zipCode: Yup.string().required(),
	addressLine1: Yup.string().required(),
	addressLine2: Yup.string().required(),
	phone: Yup.string().matches(
		phoneRegExp,
		"Phone should be similar to this +123456789012",
	),
})
