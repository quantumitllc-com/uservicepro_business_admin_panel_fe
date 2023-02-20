import { object, SchemaOf, string } from "yup"
import { EditFormTypes } from "types/dashboard/profile/edit"

export const schema: SchemaOf<EditFormTypes> = object().shape({
	companyName: string().required(),
	companyTin: string().required(),
})

export const defaultValues = {
	companyName: "",
	companyTin: "",
}
