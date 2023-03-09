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
		page,
		meta,
		chatId,
		setMessages,
		// updateMessages,
		currentChat,
		messages,
		setLastUnreadMessage,
		hasMore,
		setHasMore,
		setIncrementPage
	} = useChatStore(
		(state) => ({
			size: state.size,
			page: state.page,
			meta: state.meta,
			chatId: state.chatId,
			setMessages: state.setMessages,
			updateMessages: state.updateMessages,
			currentChat: state.currentChat,
			messages: state.messages,
			setLastUnreadMessage: state.setLastUnreadMessage,
			hasMore: state.hasMore,
			setHasMore: state.setHasMore,
			setIncrementPage: state.setIncrementPage
		}),
		shallow,
	)
	const messagesEndRef = useRef<null | HTMLDivElement>(null)

	// console.log(meta)

	const { isLoading, isFetching } = useQuery(
		["messages", page, chatId],
		() => {
			return getMessages({ size, page, chatId })
		},
		{
			enabled: meta.hasNext,
			select: (data) => data.data,
			onError: (error: any) => {
				toast(error.message)
			},
			onSuccess: (data) => {
				if (data.meta.totalCount > 0) {
					setMessages(data)
				}
			},
			keepPreviousData: true,
		},
	)

	const handleNext = () => {
		console.log("asd")
		if (!isFetching && !isLoading) {
			console.log(meta.totalCount)
			console.log(messages.length)
			if (meta.totalCount > messages.length) {
				setIncrementPage()
			} else {
				setHasMore(false)
			}
		}
	}

	const handleSendMessage = async () => {
		if (message !== "") {
			const messageContent = {
				message,
				chatId,
			}
			await socket.emit("send_message", messageContent)
			setLastUnreadMessage(message, currentChat.chatId)
			setMessage("")
		}
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
		hasMore
	}
}
