import { EditIcon, majorScale, minorScale, Pane } from "evergreen-ui"
import { useEffect } from "react"

import { Input } from "components/input"
import MyLabel from "components/label"
import MyButton from "components/button"
import { useEdit } from "./useEdit"
import { useProfile } from "../useProfile"

const Edit = () => {
	const { value, toggle, form } = useEdit()
	const { data } = useProfile()

	useEffect(() => {
		form.reset(data)
	}, [form, data])

	return (
		<Pane>
			<Pane display="flex" gap={20}>
				<Pane>
					<Input
						width={majorScale(30)}
						disabled={!value}
						name="companyName"
						control={form.control}
						label={<MyLabel>Company name</MyLabel>}
					/>
				</Pane>
				<Pane>
					<Input
						width={majorScale(30)}
						disabled={!value}
						name="companyTin"
						control={form.control}
						label={<MyLabel>Company tin</MyLabel>}
					/>
				</Pane>
			</Pane>
			{value ? (
				<Pane display="flex" gap={8} marginTop={minorScale(7)}>
					<MyButton
						onClick={toggle}
						small="true"
						appearance="outlined"
					>
						Cancel
					</MyButton>
					<MyButton small="true" appearance="outlined">
						Save
					</MyButton>
				</Pane>
			) : (
				<MyButton
					marginTop={minorScale(7)}
					iconBefore={EditIcon}
					small="true"
					appearance="primary"
					backgroundColor="var(--green)"
					onClick={toggle}
				>
					Edit
				</MyButton>
			)}
		</Pane>
	)
}

export default Edit
