const enum UserType {
	COMMERCIAL = "COMMERCIAL",
	SIMPLE = "SIMPLE",
	COMPANY = "COMPANY",
	ROOT = "ROOT",
}

export type FormTypes = {
	userType: string
	email: string
	password: string
	confirmPassword: string
}
