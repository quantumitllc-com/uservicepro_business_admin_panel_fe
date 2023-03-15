export interface PreDashboardInfo {
	isProfileFilled: boolean;
	isFinished: boolean;
}

export interface IUser {
	id: string;
	email: string;
	userType: string;
	pictureUrl: string;
	isActive: boolean;
	accessToken: string;
	refreshToken: string;
	preDashboardInfo: PreDashboardInfo;
}

export interface IUserState {
	user: IUser;
	setUser: (user: IUser) => void
	setPictureUrl: (url: string) => void
}
