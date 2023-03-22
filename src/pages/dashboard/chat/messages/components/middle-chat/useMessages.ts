import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { shallow } from "zustand/shallow"

import { getMessages } from "services/dashboard/chat"
import { useChatStore } from "store/chat"
import { useEffect, useRef, useState } from "react"
import { getSocket } from "utils/getSocket"
import { useUserStore } from "store/user"

export const useMessages = () => {
	const socket = getSocket()
	const messagesEndRef = useRef<null | HTMLDivElement>(null)
	const {
		size,
		page,
		meta,
		chatId,
		setMessages,
		currentChat,
		messages,
		hasMore,
		setHasMore,
		setIncrementPage,
		setNewMessage,
		setLastUnreadMessage,
	} = useChatStore(
		(state) => ({
			size: state.size,
			page: state.page,
			meta: state.meta,
			chatId: state.chatId,
			setMessages: state.setMessages,
			currentChat: state.currentChat,
			messages: state.messages,
			hasMore: state.hasMore,
			setHasMore: state.setHasMore,
			setIncrementPage: state.setIncrementPage,
			setNewMessage: state.setNewMessage,
			setLastUnreadMessage: state.setLastUnreadMessage,
		}),
		shallow,
	)
	const { user } = useUserStore(
		(state) => ({
			user: state.user,
		}),
		shallow,
	)
	const [message, setMessage] = useState("")

	const { isLoading, isFetching } = useQuery(
		["messages", page, chatId],
		() => {
			return getMessages({ size, page, chatId })
		},
		{
			select: (data) => data.data,
			onError: (error: any) => {
				toast(error.message)
			},
			onSuccess: (data) => {
				if (data.meta.totalCount > 0) {
					setHasMore(true)
					setMessages(data)
				}
			},
			keepPreviousData: true,
		},
	)

	const handleNext = () => {
		if (!isFetching && !isLoading) {
			if (meta.totalCount > messages.length) {
				setIncrementPage()
			} else {
				setHasMore(false)
			}
		}
	}

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	useEffect(() => {
		socket.connect()
		socket.emit("join", { chatId })
		socket.on("msg", (msg) => {
			console.log(msg)
			// coming message
			if (msg.userId !== user.id) {
				setNewMessage([msg])
				if (chatId) {
					setLastUnreadMessage(msg.message, chatId)
				}
			}
		})

		return () => {
			socket.off("msg")
			socket.disconnect()
		}
	}, [chatId])

	return {
		messagesEndRef,
		handleNext,
		isLoading,
		chatId,
		setMessages,
		currentChat,
		messages,
		hasMore,
		message,
		setMessage,
	}
}
