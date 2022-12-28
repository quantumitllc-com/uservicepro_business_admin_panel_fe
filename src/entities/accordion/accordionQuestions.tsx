import { Pane, Heading, minorScale } from "evergreen-ui"

import { MyInput } from "components/input"
import styles from "./styles.module.scss"

interface IAccordion {
	heading: string
	type: string
	toggle: (key: string) => void
	open: boolean
}

function AccordionQuestions({ heading, type, toggle, open }: IAccordion) {
	return (
		<li className={styles.accordionItem}>
			<Pane
				className={styles.accordionToggle}
				onClick={() => toggle(heading)}
				borderBottom={open && "none!important"}
				style={{ padding: "20px 0" }}
			>
				<Pane alignItems="center" display="flex">
					<Heading
						fontFamily="var(--lexend)"
						fontSize={21}
						fontWeight={500}
						color={open ? "var(--black)" : "var(--grey)"}
					>
						{heading}
					</Heading>
				</Pane>
			</Pane>
			{open && (
				<Pane
					className={styles.accordionContent}
					style={{ padding: "0" }}
				>
					<MyInput
						marginBottom={minorScale(5)}
						type={type}
						placeholder="Your answer"
					/>
				</Pane>
			)}
		</li>
	)
}

export default AccordionQuestions
