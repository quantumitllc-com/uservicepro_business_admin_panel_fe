import { Textarea, TextareaProps } from "evergreen-ui"
import { Control, Controller } from "react-hook-form"

export type MyTextareaProps = TextareaProps & {
	name: string,
	control?: Control<any>
}
export const MyTextarea = ({ ...props }: MyTextareaProps) => (
	<Controller
		name={props.name}
		control={props.control}
		render={({ field, formState: { errors } }) => (
			<Textarea
				{...props}
				{...field}
				isInvalid={!!errors[props.name]}
			/>
		)}
	/>
)