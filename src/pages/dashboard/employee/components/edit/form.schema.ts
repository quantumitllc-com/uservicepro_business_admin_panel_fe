import { object, SchemaOf, string } from "yup"
import { EditFormTypes } from "types/dashboard/employee"

export const schema: SchemaOf<EditFormTypes> = object().shape({
	ssn: string().nullable(true).required(),
	officeId: string().nullable(true).required(),
	attachedFileUrl: string().notRequired(),
})

export const defaultValues = {
	ssn: "",
	officeId: "",
	attachedFileUrl: "",
}
