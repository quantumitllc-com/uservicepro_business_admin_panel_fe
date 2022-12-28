import { LockIcon, minorScale, Pane } from "evergreen-ui"

import { ReactComponent as DetailsSelected } from "entities/accordion/icons/details-selected.svg"
import MyText from "components/text"
import MyButton from "components/button"
import MyHeading from "components/heading"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import MyBadge from "components/badge"
import AccordionQuestions from "entities/accordion/accordionQuestions"
import { useOpenKey } from "entities/accordion/hooks/useOpenKey"

export const Breadcrumbs = () => {
	const { category, subCategory } = useParams()

	return (
		<>
			<Link to="/reg/business">
				<MyText
					marginLeft={minorScale(5)}
					fontSize={21}
					color="var(--grey)"
				>
					Business details/&nbsp;
				</MyText>
			</Link>
			<Link to="/reg/business/detail">
				<MyText fontSize={21} color="var(--grey)">
					Categories/&nbsp;
				</MyText>
			</Link>
			<Link to={`/reg/business/detail/${category}`}>
				<MyText fontSize={21} color="var(--grey)">
					{category}/&nbsp;
				</MyText>
			</Link>
			<MyText fontSize={21} color="var(--dark-green)">
				{subCategory}
			</MyText>
		</>
	)
}

export const accordionQuestions = [
	{
		heading: "Q1. Number of employees in the company?",
		type: "number",
	},
	{
		heading: "Q2. Text field type of question",
		type: "text",
	},
	{
		heading: "Q3. Text type of question",
		type: "text",
	},
	{
		heading: "Q4. Text button type of question?",
		type: "text",
	},
	{
		heading: "Q5. Date type of question",
		type: "date",
	},
]

const BusinessSubCategory = () => {
	const { openKey, handleToggle } = useOpenKey()

	return (
		<Pane padding="20px">
			<Pane
				alignItems="center"
				display="flex"
				marginBottom={minorScale(2)}
			>
				<DetailsSelected />
				<Breadcrumbs />
			</Pane>
			<MyText color="var(--grey)" fontSize="16px">
				Before work you have to fill up the profile section
			</MyText>
			<Pane marginBottom={minorScale(8)} marginTop={minorScale(4)}>
				<MyButton appearance="black" iconAfter={LockIcon} small="true">
					Finish
				</MyButton>
			</Pane>
			<MyHeading marginBottom={minorScale(2)} fontSize={24}>
				Questions
			</MyHeading>
			<Pane
				display="flex"
				gap={minorScale(2)}
				alignItems="center"
				marginBottom={minorScale(6)}
			>
				<MyHeading>List of Questions</MyHeading>
				<MyBadge backgroundColor="var(--green)">Completed: 1/5</MyBadge>
			</Pane>
			{accordionQuestions.map(({ heading, type }) => (
				<AccordionQuestions
					key={heading}
					heading={heading}
					type={type}
					toggle={handleToggle}
					open={openKey === heading}
				/>
			))}
		</Pane>
	)
}

export default BusinessSubCategory
