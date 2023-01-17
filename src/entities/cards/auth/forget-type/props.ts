import { IconSet } from "../icons"

export interface ForgetTypeProps {
	isActive: boolean
	iconSet: IconSet
	title: string
	text: string
	onClick: () => void
}
