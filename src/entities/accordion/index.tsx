import { minorScale, Pane, Heading } from "evergreen-ui"
import { Link } from "react-router-dom"

import MyBadge from "shared/ui/badge"
import MyText from "shared/ui/text"
import MyButton from "shared/ui/button"
import styles from "./styles.module.scss"
import { ReactComponent as Arrow } from "./icons/arrow.svg"
import { ReactComponent as ArrowSelected } from "./icons/arrow-selected.svg"

interface IAccordion {
	heading: string
	icon: any
	iconSelected: any
	badgeText: string
	successText: string
	text: string
	start: string
	phone?: string
	toggle: (key: string) => void
	open: boolean
}

function Accordion({
	heading,
	icon,
	iconSelected,
	badgeText,
	successText,
	text,
	start,
	phone,
	toggle,
	open,
}: IAccordion) {
	const getUrlAccordion = (url: string) => {
		if (url.includes("profile")) {
			return "profile"
		}
		if (url.includes("Verify")) {
			return "email"
		}
		if (url.includes("company detail") || url.includes("categories")) {
			return "detail"
		}
		if (url.includes("payment")) {
			return "payment"
		}

		return ""
	}

	return (
		<li className={styles.accordionItem}>
			<Pane
				className={styles.accordionToggle}
				onClick={() => toggle(heading)}
				borderBottom={open && "none!important"}
			>
				<Pane alignItems="center" display="flex">
					{open ? iconSelected : icon}
					<Heading
						fontFamily="var(--lexend)"
						fontSize={21}
						fontWeight={500}
						marginLeft={minorScale(5)}
						color={open ? "var(--black)" : "var(--grey)"}
					>
						{heading}
					</Heading>
					<MyBadge
						backgroundColor="var(--grey)"
						marginLeft={minorScale(5)}
					>
						{badgeText}
					</MyBadge>
					<MyBadge
						backgroundColor="var(--green)"
						marginLeft={minorScale(5)}
					>
						{successText}
					</MyBadge>
				</Pane>
				<Pane>
					{open ? (
						<Pane>
							<ArrowSelected />
						</Pane>
					) : (
						<Pane
							marginRight={minorScale(2)}
							marginBottom={minorScale(2)}
						>
							<Arrow />
						</Pane>
					)}
				</Pane>
			</Pane>
			{open && (
				<Pane className={styles.accordionContent}>
					<MyText
						color="var(--grey)"
						fontSize="16px"
						marginBottom={minorScale(5)}
					>
						{text}
					</MyText>
					<Pane>
						<Link to={getUrlAccordion(heading)}>
							<MyButton
								marginRight={minorScale(2)}
								small="true"
								appearance="primary"
							>
								{start}
							</MyButton>
						</Link>
						{phone && (
							<Link to="phone">
								<MyButton small="true" appearance="outlined">
									{phone}
								</MyButton>
							</Link>
						)}
					</Pane>
				</Pane>
			)}
		</li>
	)
}

export default Accordion
