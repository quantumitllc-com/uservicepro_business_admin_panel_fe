import { majorScale, Pane } from "evergreen-ui"
import React, { FC } from "react"

import MyText from "components/text"
import { PasswordTypeProps } from "./props"
import { ReactComponent as Checked } from "../../sign-up/components/icons/checked.svg"
import styles from "./ui/styles.module.scss"
import useHover from "../../../../hooks/useHover"

export const PassowrdType: FC<PasswordTypeProps> = ({
	text,
	title,
	iconSet,
}) => {
	const { isHover, setIsHover } = useHover()

	return (
		<Pane
			minWidth="400px"
			border="1px solid"
			onMouseEnter={() => setIsHover(!isHover)}
			onMouseLeave={() => setIsHover(!isHover)}
			className={styles.card}
			padding={majorScale(3)}
			borderColor={isHover ? "var(--dark-green)" : "var(--stroke-block)"}
		>
			<Pane display="flex" alignItems="center">
				<Pane>{isHover ? iconSet.hover : iconSet.default}</Pane>
				<Pane
					display="flex"
					maxWidth="210px"
					flexDirection="column"
					marginLeft={majorScale(3)}
				>
					<MyText
						fontWeight={600}
						color={isHover ? "var(--dark-green)" : "#121F3E"}
					>
						{title}
					</MyText>
					<MyText color="muted">{text}</MyText>
				</Pane>
			</Pane>
			{isHover && (
				<Pane>
					<Checked />
				</Pane>
			)}
		</Pane>
	)
}
