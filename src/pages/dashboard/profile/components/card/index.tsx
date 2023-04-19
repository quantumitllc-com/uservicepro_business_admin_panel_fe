import { Pane, TickCircleIcon } from "evergreen-ui"
import { useParams } from "react-router"

import { ICardPlan } from "types/dashboard/profile/card"
import MyText from "components/text"
import MyHeading from "components/heading"
import MyButton from "components/button"
import {
	Ul,
	Type,
	Header,
	Container,
	IconRemove,
	HeaderLeft,
} from "./style"
import { ReactComponent as IconTick } from "./icons/tick.svg"
import { useCard } from "./useCard"

const Card = (props: ICardPlan) => {
	const discountCalc = (props.price * Number(props.discount)) / 100
	const { planId } = useParams()
	const { isLoading, onSubmit } = useCard(props)

	return (
		<Container>
			<Header>
				<HeaderLeft>
					<MyText>
						{props.title}
					</MyText>
					<Type>
						<MyHeading
							fontWeight={700}
							fontSize={24}
						>
							{props.isFree ? (
								"Free"
							) : (
								<>
									<span className="discount">${discountCalc} </span> ${props.price}
								</>
							)}
						</MyHeading>
						<MyText>/ {props.type}</MyText>
					</Type>
				</HeaderLeft>
				{planId === props.id && <TickCircleIcon color="var(--green)" size={30}/>}
			</Header>
			<MyText>
				{props.subTitle}
			</MyText>
			<Ul>
				<li>
					<Pane display="flex" alignItems="center">
						<IconTick />
					</Pane>
					<span className="active">You can add {props.offices}
					</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						<IconTick />
					</Pane>
					<span className="active">You can add {props.employees}
					</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						<IconTick />
					</Pane>
					<span className="active">You can use {props.categories}
					</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						<IconTick />
					</Pane>
					<span className="active">You can use {props.services}
					</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						{props.statisticsPage ? <IconTick /> : <IconRemove />}
					</Pane>
					<span className={props.statisticsPage ? "active" : undefined}>Statistics Page</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						{props.activityMapPage ? <IconTick /> : <IconRemove />}
					</Pane>
					<span className={props.activityMapPage ? "active" : undefined}>Activity Map Page</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						{props.reviewsPage ? <IconTick /> : <IconRemove />}
					</Pane>
					<span className={props.reviewsPage ? "active" : undefined}>Reviews Page</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						{props.accountingPage ? <IconTick /> : <IconRemove />}
					</Pane>
					<span className={props.accountingPage ? "active" : undefined}>Accounting Page</span>
				</li>
				<li>
					<Pane display="flex" alignItems="center">
						{props.customerSupport ? <IconTick /> : <IconRemove />}
					</Pane>
					<span className={props.customerSupport ? "active" : undefined}>
						Customer Support Page
					</span>
				</li>
			</Ul>
			<MyButton
				appearance="outlined"
				disabled={planId === props.id || isLoading}
				onClick={onSubmit}
			>
				Select
			</MyButton>
		</Container>
	)
}

export default Card