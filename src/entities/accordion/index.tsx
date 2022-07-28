import { useState } from "react"
import { minorScale, Pane, Heading } from "evergreen-ui"

import MyBadge from "shared/ui/badge"
import MyText from "shared/ui/text"
import styles from "./styles.module.scss"
import { ReactComponent as Arrow } from "./icons/arrow.svg"
import { ReactComponent as ArrowSelected } from "./icons/arrow-selected.svg"
import MyButton from "../../shared/ui/button"

function Accordion({
	heading,
	icon,
	iconSelected,
	badge,
	success,
	text,
	start,
	verify,
}: any) {
	const [isActive, setIsActive] = useState(false)

	return (
		<li className={styles.accordionItem}>
			<Pane
				className={styles.accordionToggle}
				onClick={() => setIsActive(!isActive)}
				borderBottom={isActive && "none!important"}
			>
				<Pane alignItems="center" display="flex">
					{isActive ? iconSelected : icon}
					<Heading
						fontFamily="var(--lexend)"
						fontSize={21}
						fontWeight={500}
						marginLeft={minorScale(5)}
						color={isActive ? "var(--black)" : "var(--grey)"}
					>
						{heading}
					</Heading>
					<MyBadge
						backgroundColor="var(--grey)"
						marginLeft={minorScale(5)}
					>
						{badge}
					</MyBadge>
					<MyBadge
						backgroundColor="var(--green)"
						marginLeft={minorScale(5)}
					>
						{success}
					</MyBadge>
				</Pane>
				<span>
					{isActive ? (
						<ArrowSelected />
					) : (
						<Pane marginRight={minorScale(3)}>
							<Arrow />
						</Pane>
					)}
				</span>
			</Pane>
			{isActive && (
				<Pane className={styles.accordionContent}>
					<MyText
						color="var(--grey)"
						fontSize="16px"
						marginBottom={minorScale(5)}
					>
						{text}
					</MyText>
					<Pane>
						<MyButton
							marginRight={minorScale(2)}
							small="true"
							appearance="primary"
						>
							{start}
						</MyButton>
						{verify && (
							<MyButton small="true" appearance="outlined">
								{verify}
							</MyButton>
						)}
					</Pane>
				</Pane>
			)}
		</li>
	)
}

export default Accordion
