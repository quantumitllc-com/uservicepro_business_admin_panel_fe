import { useEffect } from "react"
import { shallow } from "zustand/shallow"
import { toast } from "react-toastify"

import { IChatType } from "types/dashboard/chat"
import { getSocket } from "utils/getSocket"
import { useChatStore } from "store/chat"

export const useHeader = () => {
	const socket = getSocket()
	const { setChats, totalCount } = useChatStore(
		(state) => ({
			setChats: state.setChats,
			totalCount: state.totalCount
		}),
		shallow
	)

	useEffect(() => {
		socket.connect()
		socket.on("chats", (chats: IChatType[]) => {
			console.log(chats)
			if(Array.isArray(chats)) {
				setChats(chats)
			}
		})

		socket.on("msg", (msg) => {
			console.log(msg)
			toast(`${msg.userName}: sent a message\n${msg.message}`)
		})

		return () => {
			socket.off("chats")
			socket.off("msg")
		}
	}, [])


	return { totalCount }
}