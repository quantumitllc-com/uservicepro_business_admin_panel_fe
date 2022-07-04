import { useState } from "react"

const useCheckedCheckbox = () => {
	const [checked, setChecked] = useState<boolean>(true)

	return {
		checked,
		setChecked
	}
}

export default useCheckedCheckbox