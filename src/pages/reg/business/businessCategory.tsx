import { minorScale } from "evergreen-ui"
import { Link } from "react-router-dom"
import { useParams } from "react-router"

import MyText from "shared/ui/text"
import BusinessDetail from "./businessDetail"

export const Breadcrumbs = () => {
	const { category } = useParams()

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
			<MyText fontSize={21} color="var(--dark-green)">
				{category}
			</MyText>
		</>
	)
}

const BusinessCategory = () => {
	const { category } = useParams()

	const textObj = {
		title: `${category}`,
		list: "List of sub-categories",
		add: "Add Sub-category",
		empty: "sub-categories",
		modalTitle: `${category}`,
		subTitle: "Sub-Category",
		select: "Select sub-category",
		delete: "sub-category",
	}

	return <BusinessDetail text={textObj} breadcrumbs={<Breadcrumbs />} />
}

export default BusinessCategory
