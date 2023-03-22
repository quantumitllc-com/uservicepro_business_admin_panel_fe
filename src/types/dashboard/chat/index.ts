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

export interface IMeta {
	hasNext: boolean
	hasPrev: boolean
	nextPage?: any
	page: number
	pages: number
	prevPage?: any
	totalCount: number
}

export interface IResponse {
	data: IMessages[]
	meta: IMeta
}

export interface IChatState {
	size: number
	page: number
	meta: IMeta
	// setIncrementPage: () => void
	chats: IChatType[]
	setChats: (chats: IChatType[]) => void
	totalCount: number
	chatId: IChatId
	setChatId: (chatId: IChatId) => void
	currentChat: IChatType
	setLastUnreadMessage: (newLastUnreadMessage: string, chatId: string) => void
	messages: IMessages[]
	resetMessages: () => void
	setMessages: (res: IResponse) => void
	hasMore: boolean
	setHasMore: (value: boolean) => void
	setIncrementPage: () => void
	setNewMessage: (mes: IMessages[]) => void
}
