import { useEffect, useRef } from "react"
import { shallow } from "zustand/shallow"
import { useChatStore } from "store/chat"

export const useScrollToBottom = () => {
	const messagesEndRef = useRef<null | HTMLDivElement>(null)
	const { messages } = useChatStore(
		(state) => ({
			messages: state.messages,
		}),
		shallow,
	)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	return {
		messagesEndRef,
	}
}
