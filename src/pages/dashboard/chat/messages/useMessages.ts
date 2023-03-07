import { useQuery } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { shallow } from "zustand/shallow"

import { getMessages } from "services/dashboard/chat"
import { useChatStore } from "store/chat"
import { getSocket } from "utils/getSocket"

export const useMessages = () => {
	const [message, setMessage] = useState("")
	const socket = getSocket()
	const {
		size,
		// page,
		setIncrementPage,
		chatId,
		setMessages,
		currentChat,
		messages,
		setLastUnreadMessage,
	} = useChatStore(
		(state) => ({
			size: state.size,
			page: state.page,
			setIncrementPage: state.setIncrementPage,
			chatId: state.chatId,
			setMessages: state.setMessages,
			currentChat: state.currentChat,
			messages: state.messages,
			setLastUnreadMessage: state.setLastUnreadMessage,
		}),
		shallow,
	)
	const messagesEndRef = useRef<null | HTMLDivElement>(null)
	const [page, setPage] = useState(1)

	const { isLoading, refetch, isFetching } = useQuery(
		["messages", page, chatId],
		() => {
			return getMessages({ size, page, chatId })
		},
		{
			select: (data) => data.data.data,
			onError: (error: any) => {
				toast(error.message)
			},
			onSuccess: (data) => {
				data.reverse()
				setMessages(data)
			},
			keepPreviousData: true,
		},
	)

	const handleSendMessage = async () => {
		if (message !== "") {
			const messageContent = {
				message,
				chatId,
			}
			await socket.emit("send_message", messageContent)
			setLastUnreadMessage(message, currentChat.chatId)
			setMessage("")
			refetch()
		}
	}

	const handleNext = () => {
		// setPage(prevState => prevState + 1)
		// if (!isFetching && !isLoading) {
		// setIncrementPage()
		// }
		// setPage(prevState => prevState + 1)
		// setIncrementPage()
		// if (!isFetching && !isLoading) {
		// 	setIncrementPage()
		// if (count > messages.length) {
		// 	setIncrementPage()
		// } else {
		// 	setHasMore()
		// }
		// }
	}

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return {
		handleNext,
		isLoading,
		chatId,
		setMessages,
		currentChat,
		messages,
		handleSendMessage,
		message,
		setMessage,
		messagesEndRef,
	}
}
