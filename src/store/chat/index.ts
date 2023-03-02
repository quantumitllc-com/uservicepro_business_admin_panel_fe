import { create } from "zustand"

import { IChatState } from "../../types/dashboard/chat"
import { getInitialChatId } from "../../utils/getInitialChatId"

export const useChatStore = create<IChatState>((set, get) => ({
	chats: [],
	setChats: (chats) => set({ chats }),
	currentChat: {
		chatId: "",
		userId: "",
		createdAt: "",
		lastUnreadMessage: "",
		count: 0,
		imageUrl: "",
		userName: ""
	},
	chatId: getInitialChatId(),
	setChatId: ((chatId) => {
		const currentChat = get().chats.find(c => c.chatId === chatId)
		return set({ chatId, currentChat })
	}),
	messages: [],
	setMessages: (messages) => set({messages}),
}))
