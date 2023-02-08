import { object, SchemaOf, string } from "yup"
import { FormTypes } from "types/dashboard/employee"

export const schema: SchemaOf<FormTypes> = object().shape({
	email: string().email().nullable(true).required(),
	phone: string().nullable(true).required(),
	ssn: string().nullable(true).required(),
	officeId: string().nullable(true).required(),
	categoryId: string().nullable(true).required(),
	attachedFileUrl: string().notRequired(),
	sendBy: string().nullable(true).required(),
})

export const defaultValues = {
	phone: "",
	email: "",
	ssn: "",
	officeId: "",
	categoryId: "12345",
	attachedFileUrl: "",
	sendBy: "EMAIL",
}
