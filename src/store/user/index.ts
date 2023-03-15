import { create } from "zustand"

import { IUserState } from "../../types/dashboard/user"


export const useUserStore = create<IUserState>((set, get) => ({
	user: {
		id: "",
		email: "",
		userType: "",
		pictureUrl: "",
		isActive: false,
		accessToken: "",
		refreshToken: "",
		preDashboardInfo: {
			isProfileFilled: false,
			isFinished: false,
		}
	},
	setUser: (user) => set({ user }),
	setPictureUrl: (url: string) => {
		get().user.pictureUrl = url
	}
}))
