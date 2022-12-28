import { useState } from "react"

const useIsShown = () => {
	const [isShown, setIsShown] = useState(false)

	return {
		isShown,
		setIsShown,
	}
}

export default useIsShown
