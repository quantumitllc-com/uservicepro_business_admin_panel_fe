import React, { useEffect, useState } from "react"
import { shallow } from "zustand/shallow"
import { toast } from "react-toastify"

import { getSocket } from "utils/getSocket"
import { useChatStore } from "store/chat"
import { getMessages } from "services/dashboard/chat"
import { useMutation } from "@tanstack/react-query"
import { uploadFile } from "services/dashboard/profile"

export const useFooter = () => {
	const [message, setMessage] = useState("")
	const [file, setFile] = useState<null | File>(null)
	const socket = getSocket()
	const { chatId, currentChat, setLastUnreadMessage, setNewMessage } =
		useChatStore(
			(state) => ({
				chatId: state.chatId,
				currentChat: state.currentChat,
				setLastUnreadMessage: state.setLastUnreadMessage,
				setNewMessage: state.setNewMessage,
			}),
			shallow,
		)

	const { isLoading, mutate } = useMutation(uploadFile, {
		onSuccess: ({
			data: {
				message: { file_url },
			},
		}) => {
			toast.success("File is uploaded successfully")
			setMessage(file_url)
		},
		onError: (error: any) => {
			toast.error(error.response.data.message)
		},
	})

	const selectFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const file = event.target.files[0]
			setMessage(file.name)
			setFile(file)
			const formData = new FormData()
			formData.append("file_url", file)
			await mutate(formData)
		}
	}

	const handleSendMessage = async () => {
		if (message !== "") {
			const messageContent = {
				message,
				chatId,
			}
			socket.connect()
			socket.emit("send_message", messageContent, () => {
				setMessage("")
				setFile(null)
				setTimeout(async () => {
					const {
						data: { data },
					} = await getMessages({ size: 1, page: 1, chatId })
					await setLastUnreadMessage(message, currentChat.chatId)
					await setNewMessage(data)
					await socket.disconnect()
				}, 500)
			})
		}
	}

	return {
		isLoading,
		handleSendMessage,
		message,
		setMessage,
		file,
		selectFile,
	}
}
