import React, { memo } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { Pane } from "evergreen-ui"
import "photoswipe/dist/photoswipe.css"

import { Spinner } from "components/spinner"
import { getTokens } from "utils/getTokens"
import SkeletonMessages from "../skeleton-messages"
import Sender from "./sender"
import Receiver from "./receiver"
import { useMessages } from "./useMessages"
import styles from "./styles.module.scss"
import { useScrollToBottom } from "./useScrollToBottom"

const MiddleChat = memo(() => {
	const tokens = getTokens()
	const { isLoading, messages, handleNext, hasMore } = useMessages()
	const { messagesEndRef } = useScrollToBottom()

	return (
		<Pane className={styles.container}>
			<InfiniteScroll
				pageStart={0}
				isReverse
				loadMore={handleNext}
				hasMore={hasMore}
				useWindow={false}
				className={styles.scroll}
				loader={<Spinner />}
			>
				{isLoading ? (
					<SkeletonMessages />
				) : (
					messages.map((message) => {
						if (message.userId === tokens.id) {
							return (
								<Sender
									time={message.createdAt}
									key={message.messageId}
									text={message.message}
								/>
							)
						}
						return (
							<Receiver
								time={message.createdAt}
								key={message.messageId}
								text={message.message}
							/>
						)
					})
				)}
				<Pane ref={messagesEndRef} />
			</InfiniteScroll>
		</Pane>
	)
})

export default MiddleChat
