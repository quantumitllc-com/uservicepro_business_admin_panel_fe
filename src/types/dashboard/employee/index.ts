export type FormTypes = {
	phone: string
	email: string
	ssn: string
	officeId: string
	officeServiceIds: string[]
	attachedFileUrl?: string
	sendBy: string
}

export type EditFormTypes = {
	ssn: string
	officeId: string
	attachedFileUrl?: string
}
