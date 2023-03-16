import { create } from "zustand"

import { IUserState } from "../../types/dashboard/user"
import { getTokens } from "../../utils/getTokens"

export const useUserStore = create<IUserState>((set, get) => {
	const tokens = getTokens()

	return ({
		user: tokens,
		setUser: (user) => set({ user }),
		setPictureUrl: (url: string) => {
			set({ user: { ...get().user, pictureUrl: url } })
		},
	})
})
