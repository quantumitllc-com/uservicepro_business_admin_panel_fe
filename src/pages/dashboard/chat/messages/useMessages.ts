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
	const { chats, chatId, setMessages, currentChat, messages, setLastUnreadMessage } = useChatStore(
		(state) => ({
			chatId: state.chatId,
			setMessages: state.setMessages,
			currentChat: state.currentChat,
			messages: state.messages,
			setLastUnreadMessage: state.setLastUnreadMessage,
			chats: state.chats,
		}),
		shallow,
	)
	const messagesEndRef = useRef<null | HTMLDivElement>(null)
	const [size, setSize] = useState(10)
	const [page, setPage] = useState(undefined)

	console.log(chats)
	console.log(currentChat)

	const { isLoading, refetch } = useQuery(
		["messages", size, page, chatId],
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

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return {
		isLoading,
		chatId,
		setMessages,
		currentChat,
		messages,
		handleSendMessage,
		message,
		setMessage,
		messagesEndRef
	}
}
