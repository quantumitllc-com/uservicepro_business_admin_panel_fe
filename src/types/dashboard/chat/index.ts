export type IChatType = {
	chatId: string
	userId: string
	createdAt: string
	lastUnreadMessage: string
	count: any
	imageUrl: any
	userName: any
}

export type IChatId = string | undefined

export interface IMessages {
	chatId: string
	createdAt: string
	fileUrls: any[]
	message: string
	messageId: string
	repliedMessageId?: any
	userId: string
	userName: string
}

export interface IChatState {
	size: number
	page: number
	setIncrementPage: () => void
	chats: IChatType[]
	setChats: (chats: IChatType[]) => void
	chatId: IChatId
	setChatId: (chatId: IChatId) => void
	currentChat: IChatType
	setLastUnreadMessage: (newLastUnreadMessage: string, chatId: string) => void
	messages: IMessages[]
	setMessages: (messages: IMessages[]) => void
}
