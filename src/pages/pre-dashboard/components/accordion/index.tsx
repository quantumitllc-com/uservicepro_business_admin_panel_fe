import { minorScale, Pane, Heading } from "evergreen-ui"
import { Link } from "react-router-dom"

import MyText from "components/text"
import MyButton from "components/button"
import styles from "./styles.module.scss"
import { ReactComponent as Arrow } from "./icons/arrow.svg"
import { ReactComponent as ArrowSelected } from "./icons/arrow-selected.svg"

interface AccordionProps {
	heading: string
	icon: any
	iconSelected: any
	dynamicBadge: any
	text: string
	start: string
	phone?: string
	toggle?: (key: string) => void
	open: boolean
}

function Accordion({
	heading,
	icon,
	iconSelected,
	dynamicBadge,
	text,
	start,
	phone,
	toggle,
	open,
}: AccordionProps) {
	const getUrlAccordion = (url: string) => {
		if (url.includes("user")) {
			return "user"
		}
		if (url.includes("Verify")) {
			return "email"
		}
		return ""
	}

	return (
		<li className={styles.accordionItem}>
			<Pane
				className={styles.accordionToggle}
				onClick={toggle ? () => toggle(heading) : undefined}
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
					{dynamicBadge}
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
							// <Link to="phone">
							<MyButton
								disabled
								small="true"
								appearance="outlined"
							>
								{phone}
							</MyButton>
							// </Link>
						)}
					</Pane>
				</Pane>
			)}
		</li>
	)
}

export default Accordion
