export interface IChatType {
	chatId: string;
	userId: string;
	createdAt: string;
	lastUnreadMessage: string;
	count?: any;
	imageUrl?: any;
	userName?: any;
}

export interface IChatState {
	socket: any
	setSocket: (socket: any) => void
	chats: IChatType[]
	setChats: (chats: IChatType[]) => void
}