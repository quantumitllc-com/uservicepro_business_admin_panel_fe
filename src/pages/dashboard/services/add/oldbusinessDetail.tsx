import {
	LockIcon,
	minorScale,
	Pane,
	AddIcon,
	Dialog,
	Select,
	Card,
	SearchInput,
	Table,
	TrashIcon,
} from "evergreen-ui"
import { useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import { Link, useNavigate } from "react-router-dom"

import { ReactComponent as DetailsSelected } from "pages/pre-dashboard/components/accordion/icons/details-selected.svg"
import MyText from "components/text"
import MyButton from "components/button"
import MyHeading from "components/heading"
import MyCheckbox from "components/checkbox"
import EmptyList from "./empty-list-old"
import styles from "../../../pre-dashboard/business/styles.module.scss"

export const listItems = [
	{
		name: "Office-cleaning",
	},
	{
		name: "Car-cleaning",
	},
	{
		name: "Wood carving",
	},
	{
		name: "Crafting",
	},
]

export interface IBusinessDetail {
	breadcrumbs: JSX.Element
	text: TypeTextObj
}

export const Breadcrumbs = () => (
	<>
		<Link to="/pre-dashboard/business">
			<MyText
				marginLeft={minorScale(5)}
				fontSize={21}
				color="var(--grey)"
			>
				Business details/&nbsp;
			</MyText>
		</Link>
		<MyText fontSize={21} color="var(--dark-green)">
			Categories
		</MyText>
	</>
)

type TypeTextObj = {
	title: string
	list: string
	add: string
	empty: string
	modalTitle: string
	subTitle: string
	select: string
	delete: string
}

export const textObj = {
	title: "Categories",
	list: "List of categories",
	add: "Add Category",
	empty: "services",
	modalTitle: "Category",
	subTitle: "List of categories",
	select: "Select categories",
	delete: "category",
}

const OldbusinessDetail = ({ breadcrumbs, text }: IBusinessDetail) => {
	const [isShownDelete, setIsShownDelete] = useState(false)
	const [isShown, setIsShown] = useState(false)
	const [list, setList] = useState<any>([])
	const navigate = useNavigate()
	// const [list, setList] = useState<any>(listItems)

	return (
		<Pane padding="20px">
			<Pane
				alignItems="center"
				display="flex"
				marginBottom={minorScale(2)}
			>
				<DetailsSelected />
				{breadcrumbs}
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
				{text.title}
			</MyHeading>
			<Pane
				display="flex"
				alignItems="flex-end"
				justifyContent="space-between"
				marginBottom={minorScale(2)}
			>
				<MyHeading>{text.list}</MyHeading>
				<MyButton
					iconBefore={AddIcon}
					small="true"
					appearance="primary"
					backgroundColor="var(--green)"
					onClick={() => setIsShown(true)}
				>
					{text.add}
				</MyButton>
			</Pane>
			{list.length === 0 ? (
				<EmptyList add={text.empty} />
			) : (
				<Table>
					<Table.Body>
						{listItems.map((listItem) => (
							<Table.Row
								onSelect={() => navigate(`${listItem.name}`)}
								key={listItem.name}
								isSelectable
							>
								<Table.TextCell>
									<MyText>{listItem.name}</MyText>
								</Table.TextCell>
								<Table.TextCell>
									<Pane className={styles.progressBar}>
										<MyText fontSize={6} lineHeight="7px">
											Your progress
										</MyText>
										<MyText
											fontSize={10}
											color="var(--dark-green)"
											lineHeight="12px"
											fontWeight={500}
										>
											0% to complete
										</MyText>
										<ProgressBar
											bgColor="var(--dark-green)"
											completed={15}
											height="6px"
											width="147px"
											isLabelVisible={false}
										/>
									</Pane>
								</Table.TextCell>
								<Table.TextCell className={styles.trash}>
									<TrashIcon
										marginRight={minorScale(3)}
										onClick={(e) => {
											e.stopPropagation()
											setIsShownDelete(true)
										}}
									/>
								</Table.TextCell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
			)}
			<Dialog
				isShown={isShown}
				title={text.modalTitle}
				onCloseComplete={() => setIsShown(false)}
				confirmLabel="Add"
				width={424}
				onConfirm={() => {
					setIsShown(false)
					setList(listItems)
				}}
			>
				<Select marginBottom={minorScale(2)} width="100%">
					<option color="red" defaultValue="null">
						{text.select}
					</option>
				</Select>
				<Card
					padding={minorScale(5)}
					border="1px solid var(--dark-green)"
				>
					<MyHeading marginBottom={minorScale(2)}>
						{text.list}
					</MyHeading>
					<SearchInput width="100%" placeholder="Search anything" />
					<ul className={styles.container}>
						<li className={styles.list}>
							<MyCheckbox marginRight={minorScale(3)} />
							Office-cleaning
						</li>
						<li className={styles.list}>
							<MyCheckbox marginRight={minorScale(3)} />
							Car-cleaning
						</li>
						<li className={styles.list}>
							<MyCheckbox marginRight={minorScale(3)} />
							Wood carving
						</li>
						<li className={styles.list}>
							<MyCheckbox marginRight={minorScale(3)} />
							Crafting
						</li>
					</ul>
				</Card>
			</Dialog>
			<Dialog
				isShown={isShownDelete}
				title={`${text.delete} deleting`}
				intent="warning"
				onCloseComplete={() => setIsShownDelete(false)}
				confirmLabel="Delete"
			>
				Are you sure you want to delete {text.delete} from the list. You
				will lose all progress what you did before, please press button
				delete if you are sure!
			</Dialog>
		</Pane>
	)
}

export default OldbusinessDetail
