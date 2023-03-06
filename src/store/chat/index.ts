import { create } from "zustand"
import dayjs from "dayjs"

import { IChatState } from "../../types/dashboard/chat"
import { getInitialChatId } from "../../utils/getInitialChatId"

export const useChatStore = create<IChatState>((set, get) => ({
	chats: [],
	setChats: (chats) => set({ chats }),
	currentChat: {
		chatId: "",
		userId: "",
		createdAt: dayjs().toString(),
		lastUnreadMessage: "",
		count: 0,
		imageUrl: "",
		userName: "",
	},
	setLastUnreadMessage: (newLastUnreadMessage, chatId) => {
		const currentChatIndex = get().chats.findIndex((c) => c.chatId === chatId)
		get().chats[currentChatIndex].lastUnreadMessage = newLastUnreadMessage
	},
	chatId: getInitialChatId(),
	setChatId: (chatId) => {
		const currentChat = get().chats.find((c) => c.chatId === chatId)
		return set({ chatId, currentChat })
	},
	messages: [],
	setMessages: (messages) => set({ messages }),
}))
