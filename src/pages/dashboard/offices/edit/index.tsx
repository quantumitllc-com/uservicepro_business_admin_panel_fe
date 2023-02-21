import { EditIcon, minorScale, Pane } from "evergreen-ui"
import { useEffect } from "react"

import { Input } from "components/input"
import MyLabel from "components/label"
import MyButton from "components/button"
import { labels } from "../constatns"
import { useEdit } from "./useEdit"
import { useDetail } from "../detail/useDetail"

const Edit = () => {
	const { form, onSubmit, isLoading, value, toggle } = useEdit()
	const { data } = useDetail()

	useEffect(() => {
		form.reset(data)
	}, [form, data])

	return (
		<Pane paddingTop={28}>
			<Pane display="flex" rowGap="16px" flexWrap="wrap">
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 50%"
				>
					<Input
						disabled={!value}
						name="name"
						control={form.control}
						label={<MyLabel>{labels.name}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 50%"
				>
					<Input
						disabled={!value}
						name="state"
						control={form.control}
						label={<MyLabel>{labels.state}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 50%"
				>
					<Input
						disabled={!value}
						name="city"
						control={form.control}
						label={<MyLabel>{labels.city}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 50%"
				>
					<Input
						disabled={!value}
						type="number"
						name="zipCode"
						control={form.control}
						label={<MyLabel>{labels.zipCode}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 50%"
				>
					<Input
						disabled={!value}
						name="addressLine1"
						control={form.control}
						label={<MyLabel>{labels.addressLine1}</MyLabel>}
					/>
				</Pane>
				<Pane
					gap={minorScale(3)}
					display="flex"
					flexDirection="column"
					flex="1 1 50%"
				>
					<Input
						disabled={!value}
						name="addressLine2"
						control={form.control}
						label={<MyLabel>{labels.addressLine2}</MyLabel>}
					/>
				</Pane>
			</Pane>
			{value ? (
				<Pane display="flex" gap={8} marginTop={minorScale(7)}>
					<MyButton
						small="true"
						appearance="outlined"
						onClick={() => {
							toggle()
						}}
					>
						Cancel
					</MyButton>
					<MyButton
						onClick={
							form.formState.isDirty
								? form.handleSubmit(onSubmit)
								: toggle
						}
						small="true"
						appearance="outlined"
						isLoading={isLoading}
					>
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
