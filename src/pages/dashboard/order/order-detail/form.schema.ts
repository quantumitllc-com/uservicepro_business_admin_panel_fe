import { number, object, SchemaOf } from "yup"
import { FormTypes } from "types/dashboard/order"

export const schema: SchemaOf<FormTypes> = object().shape({
	totalPrice: number().min(1).nullable(true).required(),
})

export const defaultValues = {
	totalPrice: null,
}
