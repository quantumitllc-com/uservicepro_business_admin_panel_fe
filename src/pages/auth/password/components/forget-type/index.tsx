import { majorScale, Pane } from "evergreen-ui"
import React, { FC } from "react"

import MyText from "components/text"
import { ForgetTypeProps } from "./props"
import { ReactComponent as Checked } from "../../icons/checked.svg"
import styles from "./ui/styles.module.scss"

export const ForgetType: FC<ForgetTypeProps> = ({
	text,
	title,
	iconSet,
	isActive,
	onClick,
}) => (
	<Pane
		onClick={onClick}
		border="1px solid"
		className={styles.card}
		padding={majorScale(3)}
		borderColor={isActive ? "var(--dark-green)" : "var(--stroke-block)"}
	>
		<Pane display="flex" alignItems="center">
			<Pane>{isActive ? iconSet.active : iconSet.default}</Pane>
			<Pane
				display="flex"
				maxWidth="210px"
				flexDirection="column"
				marginLeft={majorScale(3)}
			>
				<MyText
					fontWeight={600}
					color={isActive ? "var(--dark-green)" : "#121F3E"}
				>
					{title}
				</MyText>
				<MyText color="muted">{text}</MyText>
			</Pane>
		</Pane>
		{isActive && (
			<Pane>
				<Checked />
			</Pane>
		)}
	</Pane>
)
