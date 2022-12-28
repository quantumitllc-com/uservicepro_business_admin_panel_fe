import { Pane, Heading, minorScale } from "evergreen-ui"
import React, { FC } from "react"

import MyParagraph from "components/paragraph"
import styles from "./ui/styles.module.scss"
import { AccountTypeProps } from "./props"
import useHover from "../lib/hooks/useHover"

export const AccountType: FC<AccountTypeProps> = ({ iconSet, title, text }) => {
	const { isHover, setIsHover } = useHover()

	return (
		<Pane
			onMouseEnter={() => setIsHover(!isHover)}
			onMouseLeave={() => setIsHover(!isHover)}
			className={styles.card}
		>
			<Pane className={styles.icon}>
				{isHover ? iconSet.hover : iconSet.default}
			</Pane>
			<Pane width="208px">
				<Heading marginBottom={minorScale(1)} size={700}>
					{title}
				</Heading>
				<MyParagraph>{text}</MyParagraph>
			</Pane>
		</Pane>
	)
}
