import { array, object, SchemaOf, string } from "yup"
import { FormTypes } from "types/dashboard/employee"

export const schema: SchemaOf<FormTypes> = object().shape({
	email: string().email().nullable(true).required(),
	phone: string().nullable(true).required(),
	ssn: string().nullable(true).required(),
	officeId: string().nullable(true).required(),
	officeServiceIds: array()
		.of(string().required("Office services is a required field"))
		.required("services is a required field"),
	attachedFileUrl: string().notRequired(),
	sendBy: string().nullable(true).required(),
})

export const defaultValues = {
	phone: "",
	email: "",
	ssn: "",
	officeId: "",
	officeServiceIds: [],
	attachedFileUrl: "",
	sendBy: "EMAIL",
}
