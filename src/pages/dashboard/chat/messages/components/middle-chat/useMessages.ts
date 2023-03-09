import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { shallow } from "zustand/shallow"

import { getMessages } from "services/dashboard/chat"
import { useChatStore } from "store/chat"
import { useEffect, useRef } from "react"

export const useMessages = () => {
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
		}),
		shallow,
	)

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

	return {
		handleNext,
		isLoading,
		chatId,
		setMessages,
		currentChat,
		messages,
		hasMore,
		messagesEndRef
	}
}
