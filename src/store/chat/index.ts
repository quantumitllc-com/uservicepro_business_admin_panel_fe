import { create } from "zustand"
import dayjs from "dayjs"

import { IChatState } from "../../types/dashboard/chat"
import { getInitialChatId } from "../../utils/getInitialChatId"

const size = 15

export const useChatStore = create<IChatState>((set, get) => ({
	chatId: getInitialChatId(),
	currentChat: {
		chatId: "",
		userId: "",
		createdAt: dayjs().toString(),
		lastUnreadMessage: "",
		count: 0,
		imageUrl: "",
		userName: "",
	},
	setChatId: (chatId) => {
		const currentChat = get().chats.find((c) => c.chatId === chatId)
		return set({ chatId, currentChat })
	},
	size,
	page: 1,
	meta: {
		hasNext: true,
		hasPrev: false,
		nextPage: null,
		page: 1,
		pages: 1,
		prevPage: null,
		totalCount: 0,
	},
	chats: [],
	setChats: (chats) => set({ chats }),
	setLastUnreadMessage: (newLastUnreadMessage, chatId) => {
		const currentChatIndex = get().chats.findIndex(
			(c) => c.chatId === chatId,
		)
		get().chats[currentChatIndex].lastUnreadMessage = newLastUnreadMessage
	},
	messages: [],
	resetMessages: () => {
		set({ messages: [], page: 1, size })
	},
	setMessages: (res) => {
		res.data.reverse()
		set(() => ({
			messages: [...res.data, ...get().messages],
			meta: res.meta,
		}))
	},
	hasMore: true,
	setHasMore: (value) => set({ hasMore: value }),
	setIncrementPage: () => {
		set((state) => ({ page: state.page + 1 }))
	},
	setNewMessage: (mes) => {
		set((state) => ({
			messages: [...get().messages, ...mes],
			size: state.size + 1,
		}))
	},
}))
