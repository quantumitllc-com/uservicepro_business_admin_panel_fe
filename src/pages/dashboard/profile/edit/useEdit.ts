import useBoolean from "hooks/useBoolean"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup/dist/yup"

import { EditFormTypes } from "types/dashboard/profile/edit"
import { defaultValues, schema } from "./form.schema"

export const useEdit = () => {
	const { value, toggle } = useBoolean(false)

	const form = useForm<EditFormTypes>({
		resolver: yupResolver(schema),
		mode: "onSubmit",
		defaultValues,
	})



	return {
		value,
		toggle,
		form,
	}
}
