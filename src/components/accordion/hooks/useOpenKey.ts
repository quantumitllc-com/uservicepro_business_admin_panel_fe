import { useState } from "react"

export const useOpenKey = () => {
	const [openKey, setOpenKey] = useState<string | null>()

	const handleToggle = (key: string) => {
		setOpenKey(openKey !== key ? key : null)
	}

	return {
		openKey,
		handleToggle,
	}
}
