import { create } from "zustand"
import { IChatState } from "../../types/dashboard/chat"

export const useChatStore = create<IChatState>((set) => ({
	socket: null,
	setSocket: (socket) => set({socket}),
	chats: [],
	setChats: (chats) => set({ chats })
}))
