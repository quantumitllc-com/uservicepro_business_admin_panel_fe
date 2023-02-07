import { FormPhoneTypes } from "types/auth/password"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { schema } from "./form.schema"

const defaultValues = {
	phone: "",
}

export const usePhone = () => {
	const form = useForm<FormPhoneTypes>({
		resolver: yupResolver(schema),
		mode: "onChange",
		defaultValues,
	})

	const onSubmit = (data: FormPhoneTypes) => {
		// mutate(data)
	}

	return { form, onSubmit }
}
