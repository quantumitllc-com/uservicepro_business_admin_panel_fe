import {
	Pane,
	Heading,
	minorScale
} from "evergreen-ui"
import React, { FC } from "react"

import styles from "./ui/styles.module.scss"
import { UserTypeProps } from "./props"
import useHover from "../lib/hooks/useHover"

export const UserType: FC<UserTypeProps> = ({ iconSet, title }) => {
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
				<Heading
					className={styles.heading}
					marginBottom={minorScale(1)}
					size={700}
					fontWeight={500}
				>
					{title}
				</Heading>
			</Pane>
		</Pane>
	)
}
