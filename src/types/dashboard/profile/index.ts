export interface CompanyProfile {
	data: {
		id: string;
		companyName: string;
		companyTin: string;
		email: string;
		mainPhone: string;
		paymentOptions?: any;
		pictureUrl?: any;
		rating?: any;
		isEmailVerified: boolean;
		isMainPhoneNumberVerified: boolean;
		isFinished: boolean;
		createdAt: Date;
	}
}