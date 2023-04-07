import { create } from "zustand"
import dayjs from "dayjs"

import { getInitialChatId } from "utils/getInitialChatId"
import { IChatState } from "../../types/dashboard/chat"

const size = 15
const emptyCurrentChat = {
	chatId: "",
	userId: "",
	createdAt: dayjs().toString(),
	lastUnreadMessage: "",
	count: 0,
	imageUrl: "",
	userName: "",
}

export const useChatStore = create<IChatState>((set, get) => ({
	chatId: getInitialChatId(),
	currentChat: emptyCurrentChat,
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
	setChats: (chats) => {
		const totalCount = chats.reduce((acc, obj) => {
			return acc + obj.count
		}, 0)
		const currentChat =
			chats.find((c) => c.chatId === get().chatId) ?? emptyCurrentChat
		return set({ chats, totalCount, currentChat })
	},
	totalCount: 0,
	setLastUnreadMessage: (newLastUnreadMessage, chatId) => {
		const chats = get().chats.map((c) => {
			if (c.chatId === chatId) {
				return { ...c, lastUnreadMessage: newLastUnreadMessage }
			}
			return c
		})
		set({ chats })
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
		return set((state) => ({
			messages: [...get().messages, ...mes],
			size: state.size + 1,
		}))
	},
}))
