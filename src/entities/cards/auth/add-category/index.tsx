import React from "react"
import { Card, Dialog, minorScale, SearchInput, Select } from "evergreen-ui"

import MyHeading from "components/heading"
import styles from "pages/reg/business/styles.module.scss"
import MyCheckbox from "components/checkbox"

interface AddCategoryProps {
	isShown: boolean
	setIsShown: (value: boolean) => void
}

const AddCategory = ({ isShown, setIsShown }: AddCategoryProps) => (
	<Dialog
		isShown={isShown}
		title="Category"
		onCloseComplete={() => setIsShown(false)}
		confirmLabel="Add"
		width={424}
		onConfirm={() => {
			setIsShown(false)
		}}
	>
		<Select marginBottom={minorScale(2)} width="100%">
			<option color="red" defaultValue="null">
				Select categories
			</option>
		</Select>
		<Card padding={minorScale(5)} border="1px solid var(--dark-green)">
			<MyHeading marginBottom={minorScale(2)}>
				List of categories
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
)

export default AddCategory
