import { Checkbox, CheckboxProps } from "evergreen-ui"
import { FC } from "react"
import useCheckedCheckbox from "../../hooks/useCheckedCheckbox"

const MyCheckbox: FC<CheckboxProps> = (props) => {
	const { checked, setChecked } = useCheckedCheckbox()

	return (
		<Checkbox
			onChange={(e) => setChecked(e.target.checked)}
			checked={checked}
			{...props}
		/>
	)
}

export default MyCheckbox
