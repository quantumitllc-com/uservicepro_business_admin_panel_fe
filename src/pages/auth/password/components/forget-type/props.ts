import { ReactNode } from "react"

export interface ForgetTypeProps {
	isActive: boolean
	iconSet: {
		default: ReactNode
		active: ReactNode
	}
	title: string
	text: string
	onClick: () => void
}
